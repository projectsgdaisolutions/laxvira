// =====================================================================================
// Products.jsx
// Inventory / Product List Page
// -------------------------------------------------------------------------------------
// Frontend-only implementation. Every point where a real backend call will eventually
// replace local logic is marked with "API PLACEHOLDER" / "TODO" comments. Business
// logic lives in plain helper functions (never inline in JSX) so a backend developer
// can swap data sources without touching markup.
// =====================================================================================

// ------------------------------- Imports --------------------------------------------
import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Upload,
  Download,
  Search,
  RotateCcw,
  Eye,
  Pencil,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  PackageSearch,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileUp,
} from "lucide-react";

// Current data source — a static dummy catalog.
// API PLACEHOLDER: replace this import with a network call.
// Future:
//   const { data } = await axios.get("/products");
//   setProducts(data);
import { products as INITIAL_PRODUCTS } from "../data/products";

// ------------------------------- Constants -------------------------------------------
const ITEMS_PER_PAGE = 10;
const STATUS_OPTIONS = ["All", "In Stock", "Low Stock", "Out of Stock"];
const CSV_COLUMNS = [
  "name",
  "sku",
  "barcode",
  "category",
  "brand",
  "costPrice",
  "sellingPrice",
  "stock",
  "lowStockThreshold",
  "gstPercentage",
];
const BLANK_DRAFT = {
  name: "",
  sku: "",
  barcode: "",
  category: "",
  brand: "",
  costPrice: "",
  sellingPrice: "",
  stock: "",
  lowStockThreshold: "10",
  gstPercentage: "5",
  image: "📦",
};

// ------------------------------- API Placeholder Functions ---------------------------

// API PLACEHOLDER: GET /products
// Future: return (await axios.get("/products")).data;
const fetchProductsFromServer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return INITIAL_PRODUCTS;
};

// API PLACEHOLDER: POST /products/import
// Future: return (await axios.post("/products/import", validRows)).data;
const importProductsToServer = async (validRows) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("Rows submitted to backend for import:", validRows);
  // TODO POST /products/import
  return { success: true, imported: validRows.length };
};

// API PLACEHOLDER: GET /products/export
// Future: window.location.href = "/products/export" (or fetch a signed file URL).
// For now the CSV is generated locally from in-memory data.
const exportProductsFromServer = (rows) => rows;

// ------------------------------- Utility / Helper Functions ---------------------------

const getProductStatus = (stock, lowStockThreshold) => {
  if (stock <= 0) return "Out of Stock";
  if (stock <= lowStockThreshold) return "Low Stock";
  return "In Stock";
};

const formatCurrency = (value) =>
  `₹${Number(value || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const toCSVValue = (value) => {
  const stringValue = String(value ?? "");
  return stringValue.includes(",") ? `"${stringValue}"` : stringValue;
};

const buildCSV = (rows) => {
  const header = CSV_COLUMNS.join(",");
  const lines = rows.map((row) =>
    CSV_COLUMNS.map((column) => toCSVValue(row[column])).join(",")
  );
  return [header, ...lines].join("\n");
};

const downloadCSV = (filename, csvContent) => {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Naive CSV parser: assumes comma-separated values with a header row.
// Sufficient for the simple, quote-free export format this page produces.
const parseCSVText = (text) => {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0) return { headers: [], rows: [] };

  const headers = lines[0].split(",").map((header) => header.trim());
  const rows = lines.slice(1).map((line) => {
    const values = line.split(",").map((value) => value.trim());
    return headers.reduce((acc, header, index) => {
      acc[header] = values[index] ?? "";
      return acc;
    }, {});
  });

  return { headers, rows };
};

// Validates a single imported row against the fields a product requires.
const validateImportRow = (row) => {
  const errors = [];

  if (!row.name) errors.push("Missing name");
  if (!row.sku) errors.push("Missing SKU");
  if (!row.category) errors.push("Missing category");
  if (row.sellingPrice === "" || isNaN(Number(row.sellingPrice)))
    errors.push("Invalid selling price");
  if (row.stock === "" || isNaN(Number(row.stock))) errors.push("Invalid stock");

  return { isValid: errors.length === 0, errors };
};

// ------------------------------- Small Reusable Sub-Components ------------------------
// Kept inside this file (not extracted) purely to avoid repeated JSX below.

const StatusBadge = ({ status }) => {
  const styles = {
    "In Stock": "bg-emerald-50 text-emerald-600 border-emerald-100",
    "Low Stock": "bg-amber-50 text-amber-600 border-amber-100",
    "Out of Stock": "bg-red-50 text-red-600 border-red-100",
  };
  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${
        styles[status] || "bg-slate-50 text-slate-500 border-slate-100"
      }`}
    >
      {status}
    </span>
  );
};

const ModalShell = ({ title, onClose, children, footer, widthClass = "max-w-lg" }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
    <div className={`w-full ${widthClass} bg-white rounded-2xl shadow-xl flex flex-col max-h-[90vh]`}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
          <X size={18} />
        </button>
      </div>
      <div className="px-6 py-5 overflow-y-auto">{children}</div>
      {footer && <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-2">{footer}</div>}
    </div>
  </div>
);

const SkeletonRow = () => (
  <tr className="border-b border-slate-100">
    <td className="px-4 py-3"><div className="w-10 h-10 rounded-lg bg-slate-100 animate-pulse" /></td>
    <td className="px-4 py-3"><div className="h-4 w-36 rounded bg-slate-100 animate-pulse" /></td>
    <td className="px-4 py-3"><div className="h-4 w-20 rounded bg-slate-100 animate-pulse" /></td>
    <td className="px-4 py-3"><div className="h-4 w-24 rounded bg-slate-100 animate-pulse" /></td>
    <td className="px-4 py-3"><div className="h-4 w-16 rounded bg-slate-100 animate-pulse" /></td>
    <td className="px-4 py-3"><div className="h-4 w-12 rounded bg-slate-100 animate-pulse" /></td>
    <td className="px-4 py-3"><div className="h-5 w-20 rounded-full bg-slate-100 animate-pulse" /></td>
    <td className="px-4 py-3"><div className="h-4 w-16 rounded bg-slate-100 animate-pulse" /></td>
  </tr>
);

// ------------------------------- Component ---------------------------------------------

export default function Products() {
  // ------------------------------- State ------------------------------------------------

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [lowStockOnly, setLowStockOnly] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // View / Edit / Add / Delete modals
  const [viewTarget, setViewTarget] = useState(null);
  const [editTarget, setEditTarget] = useState(null); // existing product being edited, or null
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [draftProduct, setDraftProduct] = useState(BLANK_DRAFT);
  const [deleteTarget, setDeleteTarget] = useState(null);

  // Import modal
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importFileName, setImportFileName] = useState("");
  const [importPreview, setImportPreview] = useState({ valid: [], invalid: [] });
  const [isImporting, setIsImporting] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // ------------------------------- Effects ------------------------------------------------

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setIsLoading(true);
      setLoadError(null);
      try {
        const data = await fetchProductsFromServer();
        if (isMounted) setProducts(data);
      } catch (error) {
        if (isMounted) setLoadError("Failed to load products. Please try again.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  // Reset to page 1 whenever any filter changes so results are never on a stale page.
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categoryFilter, statusFilter, lowStockOnly]);

  // ------------------------------- Memoized Values ------------------------------------------

  const categoryOptions = useMemo(() => {
    const unique = new Set(products.map((product) => product.category));
    return ["All", ...Array.from(unique)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.sku.toLowerCase().includes(normalizedQuery) ||
        product.barcode.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery);

      const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;
      const matchesStatus = statusFilter === "All" || product.status === statusFilter;
      const matchesLowStock = !lowStockOnly || product.status === "Low Stock";

      return matchesSearch && matchesCategory && matchesStatus && matchesLowStock;
    });
  }, [products, searchQuery, categoryFilter, statusFilter, lowStockOnly]);

  const totalPages = useMemo(
    () => Math.max(Math.ceil(filteredProducts.length / ITEMS_PER_PAGE), 1),
    [filteredProducts]
  );

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const areFiltersActive = useMemo(
    () =>
      searchQuery.trim() !== "" ||
      categoryFilter !== "All" ||
      statusFilter !== "All" ||
      lowStockOnly,
    [searchQuery, categoryFilter, statusFilter, lowStockOnly]
  );

  // ------------------------------- Event Handlers -------------------------------------------

  const handleSearchChange = useCallback((event) => setSearchQuery(event.target.value), []);
  const handleCategoryChange = useCallback((event) => setCategoryFilter(event.target.value), []);
  const handleStatusChange = useCallback((event) => setStatusFilter(event.target.value), []);
  const handleLowStockToggle = useCallback(() => setLowStockOnly((prev) => !prev), []);

  const handleResetFilters = useCallback(() => {
    setSearchQuery("");
    setCategoryFilter("All");
    setStatusFilter("All");
    setLowStockOnly(false);
  }, []);

  const handlePageChange = useCallback(
    (page) => {
      setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    },
    [totalPages]
  );

  // View
  const openViewModal = useCallback((product) => setViewTarget(product), []);
  const closeViewModal = useCallback(() => setViewTarget(null), []);

  // Edit existing product
  const openEditModal = useCallback((product) => {
    setEditTarget(product);
    setDraftProduct({
      name: product.name,
      sku: product.sku,
      barcode: product.barcode,
      category: product.category,
      brand: product.brand,
      costPrice: String(product.costPrice),
      sellingPrice: String(product.sellingPrice),
      stock: String(product.stock),
      lowStockThreshold: String(product.lowStockThreshold),
      gstPercentage: String(product.gstPercentage),
      image: product.image,
    });
    setIsProductModalOpen(true);
  }, []);

  const closeProductModal = useCallback(() => {
    setIsProductModalOpen(false);
    setEditTarget(null);
    setDraftProduct(BLANK_DRAFT);
  }, []);

  const handleDraftChange = useCallback((field, value) => {
    setDraftProduct((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSaveProduct = useCallback(() => {
    if (!editTarget) return;

    const numericDraft = {
      ...draftProduct,
      costPrice: Number(draftProduct.costPrice) || 0,
      sellingPrice: Number(draftProduct.sellingPrice) || 0,
      stock: Number(draftProduct.stock) || 0,
      lowStockThreshold: Number(draftProduct.lowStockThreshold) || 0,
      gstPercentage: Number(draftProduct.gstPercentage) || 0,
    };
    const status = getProductStatus(numericDraft.stock, numericDraft.lowStockThreshold);

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editTarget.id ? { ...product, ...numericDraft, status } : product
      )
    );

    closeProductModal();
  }, [draftProduct, editTarget, closeProductModal]);

  // Delete
  const openDeleteModal = useCallback((product) => setDeleteTarget(product), []);
  const closeDeleteModal = useCallback(() => setDeleteTarget(null), []);

  const handleConfirmDelete = useCallback(() => {
    if (!deleteTarget) return;
    // API PLACEHOLDER: DELETE /products/:id
    // Future: await axios.delete(`/products/${deleteTarget.id}`);
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== deleteTarget.id));
    setDeleteTarget(null);
  }, [deleteTarget]);

  // Import
  const openImportModal = useCallback(() => setIsImportModalOpen(true), []);
  const closeImportModal = useCallback(() => {
    setIsImportModalOpen(false);
    setImportFileName("");
    setImportPreview({ valid: [], invalid: [] });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const handleFileSelect = useCallback((event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImportFileName(file.name);

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const text = String(loadEvent.target?.result || "");
      const { rows } = parseCSVText(text);

      const valid = [];
      const invalid = [];

      rows.forEach((row, index) => {
        const { isValid, errors } = validateImportRow(row);
        if (isValid) {
          valid.push(row);
        } else {
          invalid.push({ rowNumber: index + 2, row, errors }); // +2 accounts for header row + 1-index
        }
      });

      setImportPreview({ valid, invalid });
    };
    reader.readAsText(file);
  }, []);

  const handleConfirmImport = useCallback(async () => {
    if (importPreview.valid.length === 0) return;
    setIsImporting(true);
    try {
      // TODO POST /products/import
      const response = await importProductsToServer(importPreview.valid);
      if (response.success) {
        setProducts((prevProducts) => {
          const imported = importPreview.valid.map((row, index) => {
            const stock = Number(row.stock) || 0;
            const lowStockThreshold = Number(row.lowStockThreshold) || 10;
            return {
              id: generateProductId([...prevProducts]) + `-${index}`,
              name: row.name,
              sku: row.sku,
              barcode: row.barcode || "",
              category: row.category,
              brand: row.brand || "",
              costPrice: Number(row.costPrice) || 0,
              sellingPrice: Number(row.sellingPrice) || 0,
              stock,
              lowStockThreshold,
              gstPercentage: Number(row.gstPercentage) || 0,
              image: "📦",
              status: getProductStatus(stock, lowStockThreshold),
            };
          });
          return [...imported, ...prevProducts];
        });
        closeImportModal();
      }
    } finally {
      setIsImporting(false);
    }
  }, [importPreview, closeImportModal]);

  // Export
  const handleExportCSV = useCallback(() => {
    // Currently generated locally from in-memory (filtered) data.
    // API PLACEHOLDER: GET /products/export
    // Future: window.location.href = "/products/export";
    const rowsToExport = exportProductsFromServer(filteredProducts);
    const csvContent = buildCSV(rowsToExport);
    downloadCSV(`products-export-${Date.now()}.csv`, csvContent);
  }, [filteredProducts]);

  // ------------------------------- JSX ---------------------------------------------------

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-6 flex flex-col gap-5">
      {/* ============================= HEADER ============================= */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Inventory</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Manage your product catalog, stock levels, and pricing
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={openImportModal}
            className="flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm transition"
          >
            <Upload size={16} /> Import CSV
          </button>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm transition"
          >
            <Download size={16} /> Export CSV
          </button>
          <button
            onClick={() => navigate("/products/new")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-md shadow-blue-100 transition"
          >
            <Plus size={16} /> Add Product
          </button>
        </div>
      </div>

      {/* ============================= FILTERS ============================= */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by name, SKU, barcode, or category..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "All Categories" : category}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={handleStatusChange}
          className="bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status === "All" ? "All Statuses" : status}
            </option>
          ))}
        </select>

        <button
          onClick={handleLowStockToggle}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-medium border transition whitespace-nowrap ${
            lowStockOnly
              ? "bg-amber-500 border-amber-500 text-white"
              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
          }`}
        >
          <AlertTriangle size={15} /> Low Stock Only
        </button>

        {areFiltersActive && (
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-500 transition"
          >
            <RotateCcw size={15} /> Reset
          </button>
        )}
      </div>

      {/* ============================= TABLE ============================= */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex-1 flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[820px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                <th className="px-4 py-3 w-16">Image</th>
                <th className="px-4 py-3">Product Name</th>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Selling Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: 8 }).map((_, index) => <SkeletonRow key={index} />)
              ) : loadError ? (
                <tr>
                  <td colSpan={8} className="px-4 py-16 text-center text-sm text-red-500">
                    {loadError}
                  </td>
                </tr>
              ) : paginatedProducts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-20">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <PackageSearch size={34} className="mb-3" />
                      <p className="text-sm font-medium text-slate-500">No Products Found</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Try adjusting your search or filters
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60 transition"
                  >
                    <td className="px-4 py-3">
                      <div className="w-10 h-10 flex items-center justify-center text-xl bg-slate-50 rounded-lg">
                        {product.image}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-700">{product.name}</p>
                      <p className="text-xs text-slate-400">{product.brand}</p>
                    </td>
                    <td className="px-4 py-3 text-slate-500">{product.sku}</td>
                    <td className="px-4 py-3 text-slate-500">{product.category}</td>
                    <td className="px-4 py-3 font-medium text-slate-700">
                      {formatCurrency(product.sellingPrice)}
                    </td>
                    <td className="px-4 py-3 text-slate-500">{product.stock}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={product.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => openViewModal(product)}
                          title="View"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => openEditModal(product)}
                          title="Edit"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => openDeleteModal(product)}
                          title="Delete"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {!isLoading && filteredProducts.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-slate-100">
            <p className="text-xs text-slate-400">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}
              {"–"}
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </p>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-slate-200 text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition"
              >
                <ChevronLeft size={15} />
              </button>
              <span className="text-xs font-medium text-slate-600 px-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-slate-200 text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ============================= VIEW MODAL ============================= */}
      {viewTarget && (
        <ModalShell
          title="Product Details"
          onClose={closeViewModal}
          footer={
            <button
              onClick={closeViewModal}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
            >
              Close
            </button>
          }
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 flex items-center justify-center text-3xl bg-slate-50 rounded-xl">
              {viewTarget.image}
            </div>
            <div>
              <p className="font-semibold text-slate-800">{viewTarget.name}</p>
              <p className="text-xs text-slate-400">{viewTarget.brand}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <DetailRow label="SKU" value={viewTarget.sku} />
            <DetailRow label="Barcode" value={viewTarget.barcode} />
            <DetailRow label="Category" value={viewTarget.category} />
            <DetailRow label="Status" value={<StatusBadge status={viewTarget.status} />} />
            <DetailRow label="Cost Price" value={formatCurrency(viewTarget.costPrice)} />
            <DetailRow label="Selling Price" value={formatCurrency(viewTarget.sellingPrice)} />
            <DetailRow label="Stock" value={viewTarget.stock} />
            <DetailRow label="Low Stock Threshold" value={viewTarget.lowStockThreshold} />
            <DetailRow label="GST %" value={`${viewTarget.gstPercentage}%`} />
          </div>
        </ModalShell>
      )}

      {/* ============================= ADD / EDIT MODAL ============================= */}
      {isProductModalOpen && (
        <ModalShell
          title="Edit Product"
          onClose={closeProductModal}
          footer={
            <>
              <button
                onClick={closeProductModal}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProduct}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-100 transition"
              >
                Save Changes
              </button>
            </>
          }
        >
          <div className="grid grid-cols-2 gap-3">
            <FormField label="Product Name" value={draftProduct.name} onChange={(v) => handleDraftChange("name", v)} span2 />
            <FormField label="SKU" value={draftProduct.sku} onChange={(v) => handleDraftChange("sku", v)} />
            <FormField label="Barcode" value={draftProduct.barcode} onChange={(v) => handleDraftChange("barcode", v)} />
            <FormField label="Category" value={draftProduct.category} onChange={(v) => handleDraftChange("category", v)} />
            <FormField label="Brand" value={draftProduct.brand} onChange={(v) => handleDraftChange("brand", v)} />
            <FormField label="Cost Price" value={draftProduct.costPrice} onChange={(v) => handleDraftChange("costPrice", v)} type="number" />
            <FormField label="Selling Price" value={draftProduct.sellingPrice} onChange={(v) => handleDraftChange("sellingPrice", v)} type="number" />
            <FormField label="Stock" value={draftProduct.stock} onChange={(v) => handleDraftChange("stock", v)} type="number" />
            <FormField label="Low Stock Threshold" value={draftProduct.lowStockThreshold} onChange={(v) => handleDraftChange("lowStockThreshold", v)} type="number" />
            <FormField label="GST %" value={draftProduct.gstPercentage} onChange={(v) => handleDraftChange("gstPercentage", v)} type="number" />
          </div>
        </ModalShell>
      )}

      {/* ============================= DELETE CONFIRMATION MODAL ============================= */}
      {deleteTarget && (
        <ModalShell
          title="Delete Product"
          onClose={closeDeleteModal}
          widthClass="max-w-sm"
          footer={
            <>
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-100 transition"
              >
                Delete
              </button>
            </>
          }
        >
          <div className="flex flex-col items-center text-center gap-2 py-2">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-red-500">
              <Trash2 size={20} />
            </div>
            <p className="text-sm text-slate-600">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-slate-800">{deleteTarget.name}</span>? This
              action cannot be undone.
            </p>
          </div>
        </ModalShell>
      )}

      {/* ============================= IMPORT CSV MODAL ============================= */}
      {isImportModalOpen && (
        <ModalShell
          title="Import Products from CSV"
          onClose={closeImportModal}
          widthClass="max-w-2xl"
          footer={
            <>
              <button
                onClick={closeImportModal}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmImport}
                disabled={importPreview.valid.length === 0 || isImporting}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed shadow-md shadow-blue-100 transition"
              >
                {isImporting ? "Importing..." : `Import ${importPreview.valid.length} Rows`}
              </button>
            </>
          }
        >
          <div className="flex flex-col gap-4">
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-xl py-8 cursor-pointer hover:border-blue-300 hover:bg-blue-50/40 transition">
              <FileUp size={26} className="text-blue-500" />
              <span className="text-sm font-medium text-slate-600">
                {importFileName || "Click to select a CSV file"}
              </span>
              <span className="text-xs text-slate-400">
                Columns: {CSV_COLUMNS.join(", ")}
              </span>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>

            {(importPreview.valid.length > 0 || importPreview.invalid.length > 0) && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-sm text-emerald-600">
                    <CheckCircle2 size={16} /> {importPreview.valid.length} valid rows
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-red-500">
                    <XCircle size={16} /> {importPreview.invalid.length} invalid rows
                  </div>
                </div>

                <div className="max-h-52 overflow-y-auto border border-slate-100 rounded-xl">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-50 sticky top-0">
                      <tr className="text-left text-slate-500">
                        <th className="px-3 py-2">Row</th>
                        <th className="px-3 py-2">Name</th>
                        <th className="px-3 py-2">SKU</th>
                        <th className="px-3 py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {importPreview.valid.map((row, index) => (
                        <tr key={`valid-${index}`} className="border-t border-slate-50">
                          <td className="px-3 py-2 text-slate-400">{index + 2}</td>
                          <td className="px-3 py-2 text-slate-600">{row.name}</td>
                          <td className="px-3 py-2 text-slate-500">{row.sku}</td>
                          <td className="px-3 py-2 text-emerald-600 font-medium">Valid</td>
                        </tr>
                      ))}
                      {importPreview.invalid.map((entry, index) => (
                        <tr key={`invalid-${index}`} className="border-t border-slate-50 bg-red-50/40">
                          <td className="px-3 py-2 text-slate-400">{entry.rowNumber}</td>
                          <td className="px-3 py-2 text-slate-600">{entry.row.name || "—"}</td>
                          <td className="px-3 py-2 text-slate-500">{entry.row.sku || "—"}</td>
                          <td className="px-3 py-2 text-red-500 font-medium">
                            {entry.errors.join(", ")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </ModalShell>
      )}
    </div>
  );
}

// ------------------------------- Small Presentational Helpers -------------------------
// (kept below the component, still inside this same file)

const DetailRow = ({ label, value }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-xs text-slate-400">{label}</span>
    <span className="text-slate-700 font-medium">{value}</span>
  </div>
);

const FormField = ({ label, value, onChange, type = "text", span2 = false }) => (
  <div className={span2 ? "col-span-2" : ""}>
    <label className="text-xs font-medium text-slate-500 mb-1 block">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);