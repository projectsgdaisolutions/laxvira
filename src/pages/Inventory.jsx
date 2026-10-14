import { useState, useEffect } from "react";
import { Package, Plus, Loader2, AlertTriangle, Box } from "lucide-react";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Form State
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "General",
    price: "",
    stock: "",
    barcode: "",
  });

  // Fetch Inventory on Component Mount
  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8000/api/inventory", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch inventory");

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      
      // Convert price and stock to numbers before sending
      const payload = {
        ...newProduct,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock, 10),
      };

      const response = await fetch("http://localhost:8000/api/inventory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || "Failed to add product");
      }

      const addedProduct = await response.json();
      
      // Update UI immediately with the new product
      setProducts((prev) => [...prev, addedProduct]);
      
      // Reset form
      setNewProduct({ name: "", category: "General", price: "", stock: "", barcode: "" });

    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-indigo-600" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Package className="text-indigo-600" /> Inventory Management
          </h1>
          <p className="text-gray-500 mt-1">Add new products and monitor your stock levels.</p>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
            <AlertTriangle size={20} className="shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Add Product Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Product</h2>
          <form onSubmit={handleAddProduct} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="lg:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                required
                value={newProduct.name}
                onChange={handleInputChange}
                className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                placeholder="e.g. Wireless Mouse"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
                className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                placeholder="Electronics"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Price (₹)</label>
              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                required
                value={newProduct.price}
                onChange={handleInputChange}
                className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Initial Stock</label>
              <input
                type="number"
                name="stock"
                min="0"
                required
                value={newProduct.stock}
                onChange={handleInputChange}
                className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                placeholder="10"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-5 flex justify-end mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 h-11 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Plus size={18} />}
                Save Product
              </button>
            </div>
          </form>
        </div>

        {/* Current Stock Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Current Stock</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="bg-gray-50/50 text-xs text-gray-700 uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Stock Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-12 text-center text-gray-400">
                      <Box className="mx-auto mb-3 text-gray-300" size={32} />
                      No products in inventory yet. Add your first product above.
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">₹{product.price.toLocaleString("en-IN")}</td>
                      <td className="px-6 py-4">
                        <span className={`font-medium ${product.stock < 10 ? 'text-orange-600' : 'text-green-600'}`}>
                          {product.stock} units
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Inventory;