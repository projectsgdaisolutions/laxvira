// =====================================================================================
// AddProduct.jsx
// Add Product Page
// -------------------------------------------------------------------------------------
// Frontend-only implementation. Every point where a real backend call will eventually
// replace local logic is marked with "API PLACEHOLDER" / "TODO" comments. The backend
// developer should only need to swap the body of `createProductOnServer` and
// `uploadProductImage` — the UI, state, and validation stay untouched.
// =====================================================================================

// ------------------------------- Imports --------------------------------------------
import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  UploadCloud,
  X,
  ImagePlus,
  RotateCcw,
  Loader2,
  Save,
} from "lucide-react";

// ------------------------------- Constants -------------------------------------------
const CATEGORY_OPTIONS = [
  "Staples",
  "Dairy",
  "Vegetables",
  "Fruits",
  "Snacks",
  "Beverages",
  "Personal Care",
  "Household",
  "Bakery",
  "Frozen",
];

const UNIT_OPTIONS = ["pcs", "kg", "g", "L", "ml", "pack", "dozen", "box"];

const STATUS_OPTIONS = ["In Stock", "Out Of Stock", "Inactive"];

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

const BLANK_FORM_DATA = {
  name: "",
  category: "",
  brand: "",
  sku: "",
  barcode: "",
  costPrice: "",
  sellingPrice: "",
  mrp: "",
  gst: "",
  discount: "",
  stock: "",
  unit: "",
  lowStockThreshold: "",
  status: "In Stock",
};

// ------------------------------- API Placeholder Functions ---------------------------

// API PLACEHOLDER: POST /products
// Future: return (await axios.post("/products", product)).data;
const createProductOnServer = async (product) => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  console.log("Product submitted to backend:", product);
  // TODO POST /products
  return { success: true, productId: `P-${Date.now()}` };
};

// API PLACEHOLDER: POST /upload/image
// Future: const formData = new FormData(); formData.append("file", file);
//         return (await axios.post("/upload/image", formData)).data.url;
const uploadProductImage = async (file) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  console.log("Image ready for upload:", file.name);
  // TODO POST /upload/image
  return { success: true, url: null };
};

// ------------------------------- Validation -------------------------------------------

// Pure validation function — kept outside JSX so business rules never live inline
// in markup and can be unit-tested independently later.
const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) errors.name = "Product name is required";
  if (!formData.category.trim()) errors.category = "Category is required";

  if (formData.costPrice === "" || isNaN(Number(formData.costPrice)) || Number(formData.costPrice) < 0) {
    errors.costPrice = "Valid cost price is required";
  }
  if (formData.sellingPrice === "" || isNaN(Number(formData.sellingPrice)) || Number(formData.sellingPrice) < 0) {
    errors.sellingPrice = "Valid selling price is required";
  }
  if (formData.stock === "" || isNaN(Number(formData.stock)) || Number(formData.stock) < 0) {
    errors.stock = "Valid current stock is required";
  }
  if (
    formData.lowStockThreshold === "" ||
    isNaN(Number(formData.lowStockThreshold)) ||
    Number(formData.lowStockThreshold) < 0
  ) {
    errors.lowStockThreshold = "Valid low stock threshold is required";
  }

  return errors;
};

// ------------------------------- Small Reusable Sub-Components ------------------------
// Kept inside this file (not extracted) purely to avoid repeated JSX below.

const FieldLabel = ({ children, required }) => (
  <label className="text-sm font-medium text-slate-600 mb-1.5 block">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

const FieldError = ({ message }) =>
  message ? <p className="text-xs text-red-500 mt-1">{message}</p> : null;

const inputClasses = (hasError) =>
  `w-full text-sm border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 transition ${
    hasError
      ? "border-red-300 focus:ring-red-400"
      : "border-slate-200 focus:ring-blue-500 focus:border-transparent"
  }`;

const Card = ({ title, description, children }) => (
  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex flex-col gap-4">
    <div>
      <h2 className="font-semibold text-slate-800">{title}</h2>
      {description && <p className="text-xs text-slate-400 mt-0.5">{description}</p>}
    </div>
    {children}
  </div>
);

export default function AddProduct() {
  const navigate = useNavigate();

  // ------------------------------- Form State --------------------------------------------

  const [formData, setFormData] = useState(BLANK_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Image upload state
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRef = useRef(null);

  // ------------------------------- Event Handlers -----------------------------------------

  const handleFieldChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }, []);

  const validateAndSetImageFile = useCallback((file) => {
    if (!file) return;

    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setImageError("Unsupported format. Please use JPG, PNG, or WEBP.");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setImageError("File is too large. Maximum size is 5MB.");
      return;
    }

    setImageError(null);
    setImageFile(file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreviewUrl(previewUrl);

    // API PLACEHOLDER: upload the image as soon as it's selected, or defer until submit.
    // TODO POST /upload/image
    uploadProductImage(file);
  }, []);

  const handleImageInputChange = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      validateAndSetImageFile(file);
    },
    [validateAndSetImageFile]
  );

  const handleBrowseClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  }, []);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    setIsDraggingOver(false);
  }, []);

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      setIsDraggingOver(false);
      const file = event.dataTransfer.files?.[0];
      validateAndSetImageFile(file);
    },
    [validateAndSetImageFile]
  );

  const handleRemoveImage = useCallback(() => {
    if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    setImageFile(null);
    setImagePreviewUrl(null);
    setImageError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [imagePreviewUrl]);

  const handleReset = useCallback(() => {
    setFormData(BLANK_FORM_DATA);
    setErrors({});
    handleRemoveImage();
  }, [handleRemoveImage]);

  const handleCancel = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const validationErrors = validateForm(formData);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) return;

      setIsSubmitting(true);

      // Product object — exact shape the backend product-creation endpoint expects.
      const product = {
        name: formData.name,
        category: formData.category,
        brand: formData.brand,
        sku: formData.sku,
        barcode: formData.barcode,
        costPrice: Number(formData.costPrice) || 0,
        sellingPrice: Number(formData.sellingPrice) || 0,
        mrp: Number(formData.mrp) || 0,
        gst: Number(formData.gst) || 0,
        discount: Number(formData.discount) || 0,
        stock: Number(formData.stock) || 0,
        unit: formData.unit,
        lowStockThreshold: Number(formData.lowStockThreshold) || 0,
        status: formData.status,
        image: imageFile ? imageFile.name : null,
      };

      try {
        // TODO POST /products
        const response = await createProductOnServer(product);
        if (response.success) {
          navigate("/products");
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, imageFile, navigate]
  );

  // ------------------------------- JSX ---------------------------------------------------

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-6">
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition"
          >
            <ArrowLeft size={17} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Add Product</h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Fill in the details below to add a new product to your inventory
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* ============================= LEFT COLUMN ============================= */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Card 1: Add Product */}
            <Card title="Product Details" description="Basic information about the product">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <FieldLabel required>Product Name</FieldLabel>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) => handleFieldChange("name", event.target.value)}
                    placeholder="e.g. Basmati Rice 5kg"
                    className={inputClasses(errors.name)}
                  />
                  <FieldError message={errors.name} />
                </div>

                <div>
                  <FieldLabel required>Category</FieldLabel>
                  <select
                    value={formData.category}
                    onChange={(event) => handleFieldChange("category", event.target.value)}
                    className={inputClasses(errors.category)}
                  >
                    <option value="">Select category</option>
                    {CATEGORY_OPTIONS.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.category} />
                </div>

                <div>
                  <FieldLabel>Brand</FieldLabel>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(event) => handleFieldChange("brand", event.target.value)}
                    placeholder="e.g. Tata Sampann"
                    className={inputClasses(false)}
                  />
                </div>

                <div>
                  <FieldLabel>SKU</FieldLabel>
                  <input
                    type="text"
                    value={formData.sku}
                    onChange={(event) => handleFieldChange("sku", event.target.value)}
                    placeholder="e.g. SKU-1001"
                    className={inputClasses(false)}
                  />
                </div>

                <div>
                  <FieldLabel>Barcode</FieldLabel>
                  <input
                    type="text"
                    value={formData.barcode}
                    onChange={(event) => handleFieldChange("barcode", event.target.value)}
                    placeholder="e.g. 8901030001"
                    className={inputClasses(false)}
                  />
                </div>
              </div>
            </Card>

            {/* Card 2: Pricing */}
            <Card title="Pricing" description="Set cost, selling price, and applicable tax">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <FieldLabel required>Cost Price</FieldLabel>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.costPrice}
                    onChange={(event) => handleFieldChange("costPrice", event.target.value)}
                    placeholder="0.00"
                    className={inputClasses(errors.costPrice)}
                  />
                  <FieldError message={errors.costPrice} />
                </div>

                <div>
                  <FieldLabel required>Selling Price</FieldLabel>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.sellingPrice}
                    onChange={(event) => handleFieldChange("sellingPrice", event.target.value)}
                    placeholder="0.00"
                    className={inputClasses(errors.sellingPrice)}
                  />
                  <FieldError message={errors.sellingPrice} />
                </div>

                <div>
                  <FieldLabel required>MRP</FieldLabel>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.mrp}
                    onChange={(event) => handleFieldChange("mrp", event.target.value)}
                    placeholder="0.00"
                    className={inputClasses(errors.mrp)}
                  />
                  <FieldError message={errors.mrp} />
                </div>

                <div>
                  <FieldLabel>GST %</FieldLabel>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.gst}
                    onChange={(event) => handleFieldChange("gst", event.target.value)}
                    placeholder="e.g. 5"
                    className={inputClasses(false)}
                  />
                </div>

                <div>
                  <FieldLabel>Discount %</FieldLabel>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.discount}
                    onChange={(event) => handleFieldChange("discount", event.target.value)}
                    placeholder="e.g. 10"
                    className={inputClasses(false)}
                  />
                </div>
              </div>
            </Card>

            {/* Card 3: Stock Information */}
            <Card title="Stock Information" description="Track current stock and reorder levels">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <FieldLabel required>Current Stock</FieldLabel>
                  <input
                    type="number"
                    min="0"
                    value={formData.stock}
                    onChange={(event) => handleFieldChange("stock", event.target.value)}
                    placeholder="e.g. 50"
                    className={inputClasses(errors.stock)}
                  />
                  <FieldError message={errors.stock} />
                </div>

                <div>
                  <FieldLabel>Unit</FieldLabel>
                  <select
                    value={formData.unit}
                    onChange={(event) => handleFieldChange("unit", event.target.value)}
                    className={inputClasses(false)}
                  >
                    <option value="">Select unit</option>
                    {UNIT_OPTIONS.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <FieldLabel required>Low Stock Threshold</FieldLabel>
                  <input
                    type="number"
                    min="0"
                    value={formData.lowStockThreshold}
                    onChange={(event) => handleFieldChange("lowStockThreshold", event.target.value)}
                    placeholder="e.g. 10"
                    className={inputClasses(errors.lowStockThreshold)}
                  />
                  <FieldError message={errors.lowStockThreshold} />
                </div>

                <div>
                  <FieldLabel>Status</FieldLabel>
                  <select
                    value={formData.status}
                    onChange={(event) => handleFieldChange("status", event.target.value)}
                    className={inputClasses(false)}
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Card>
          </div>

          {/* ============================= RIGHT COLUMN ============================= */}
          <div className="flex flex-col gap-5">
            <Card title="Product Image" description="Upload a clear image of the product">
              {imagePreviewUrl ? (
                <div className="relative">
                  <img
                    src={imagePreviewUrl}
                    alt="Product preview"
                    className="w-full h-56 object-cover rounded-xl border border-slate-200"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-red-500 shadow-md hover:bg-white transition"
                  >
                    <X size={15} />
                  </button>
                </div>
              ) : (
                <div
                  onClick={handleBrowseClick}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl py-12 px-4 text-center cursor-pointer transition ${
                    isDraggingOver
                      ? "border-blue-400 bg-blue-50/60"
                      : "border-slate-200 hover:border-blue-300 hover:bg-blue-50/30"
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-500">
                    <UploadCloud size={22} />
                  </div>
                  <p className="text-sm font-medium text-slate-600">
                    Drag &amp; Drop image here
                  </p>
                  <p className="text-xs text-slate-400">or</p>
                  <span className="text-sm font-medium text-blue-600 flex items-center gap-1.5">
                    <ImagePlus size={14} /> Click to Browse
                  </span>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Supported: JPG, PNG, WEBP · Max size: 5MB
                  </p>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageInputChange}
                className="hidden"
              />
              <FieldError message={imageError} />
            </Card>
          </div>
        </div>

        {/* ============================= BOTTOM ACTIONS ============================= */}
        <div className="flex flex-col sm:flex-row sm:justify-end gap-2 bg-white border border-slate-200 rounded-2xl shadow-sm p-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
          >
            <RotateCcw size={15} /> Reset
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white shadow-md shadow-blue-100 transition"
          >
            {isSubmitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Save size={16} />
            )}
            {isSubmitting ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}