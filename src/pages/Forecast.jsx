import React, { useState, useEffect } from "react";
import { 
  Search, 
  Bell, 
  ShoppingBag, 
  Users, 
  ShoppingCart, 
  Loader2,
  AlertTriangle,
  BarChart3
} from "lucide-react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from "recharts";

const Forecast = () => {
  const [forecastData, setForecastData] = useState({ historical: [], forecast: [] });
  const [restockData, setRestockData] = useState([]);
  const [crossSellData, setCrossSellData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAllInsights = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };

        const [forecastRes, restockRes, crossSellRes] = await Promise.all([
          fetch("http://localhost:8000/api/forecast", { headers }),
          fetch("http://localhost:8000/api/forecast/restock", { headers }),
          fetch("http://localhost:8000/api/forecast/cross-sell", { headers })
        ]);

        if (forecastRes.ok) setForecastData(await forecastRes.json());
        if (restockRes.ok) setRestockData(await restockRes.json());
        if (crossSellRes.ok) setCrossSellData(await crossSellRes.json());

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllInsights();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-blue-600" size={36} />
      </div>
    );
  }

  const chartData = forecastData.historical.map((item, index) => ({
    date: item.date,
    Actual: item.actual_sales,
    Predicted: forecastData.forecast[index]?.predicted_sales || null
  }));

  return (
    <div className="w-full pb-10">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Forecast & AI Insights</h1>
          <p className="text-sm text-slate-500 mt-1">XGBoost machine learning predictions and relational database analytics.</p>
        </div>
        <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>

      {/* Global Search Bar */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search products, customers, invoice...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm outline-none"
          />
        </div>
      </div>

      {error && (
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-800">
          <AlertTriangle size={20} className="shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold">Notice</h4>
            <p className="text-xs mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Section 1: Sales Chart */}
      <div className="mb-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-blue-600" /> Revenue Prediction Model (XGBoost)
            </h2>
            <p className="text-xs text-slate-500 mt-1">Historical vs. Model Inferred Sales Trajectory</p>
          </div>
        </div>

        <div className="w-full h-80">
          {chartData.length === 0 ? (
            <div className="h-full flex items-center justify-center text-slate-400 text-sm border-2 border-dashed border-slate-100 rounded-xl">
              Insufficient data points for visualization.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} tickFormatter={(val) => `₹${val}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#ffffff", borderRadius: "0.75rem", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                  formatter={(value) => [`₹${Number(value).toFixed(2)}`, ""]}
                />
                <Area type="monotone" dataKey="Actual" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorActual)" />
                <Area type="monotone" dataKey="Predicted" stroke="#10b981" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorPredicted)" />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Section 2: Restock Suggestions */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2 text-amber-500" /> Restock Suggestions
            </h2>
            <p className="text-xs text-slate-500 mt-1">Products running low based on sales velocity</p>
          </div>
        </div>

        {restockData.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 text-center text-slate-400 text-sm">
            No restock alerts at this time.
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
            {restockData.map((item, index) => (
              <div key={item.id} className={`p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 ${index !== restockData.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <div className="flex items-center gap-4 w-full lg:w-1/4">
                  <div className={`w-10 h-12 rounded ${item.iconColor} border border-slate-100 flex-shrink-0`}></div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className={`px-3 py-1.5 rounded border w-full lg:w-1/4 ${item.urgencyColor}`}>
                  <p className="text-xs font-bold mb-0.5">Likely to run out in {item.days} days</p>
                  <p className="text-[10px] opacity-80">Current stock velocity threshold active</p>
                </div>
                <div className="w-full lg:w-1/3 text-xs text-slate-700">{item.desc}</div>
                <div className="w-full lg:w-auto flex justify-end">
                  <button className="w-full lg:w-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors shadow-sm">
                    <ShoppingCart className="w-4 h-4 mr-2" /> Create Purchase Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section 3: Cross-sell Patterns */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-500" /> Cross-sell Patterns
            </h2>
            <p className="text-xs text-slate-500 mt-1">Frequently bought together item clusters</p>
          </div>
        </div>

        {crossSellData.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 text-center text-slate-400 text-sm">
            Not enough invoice item pairings found for clustering.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {crossSellData.map((combo) => (
              <div key={combo.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4 relative">
                  <div className="flex flex-col items-center w-2/5 text-center">
                    <div className={`w-10 h-12 rounded ${combo.c1} mb-2 border border-slate-100`}></div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">{combo.item1}</span>
                  </div>
                  <div className="text-slate-400 font-bold text-lg">+</div>
                  <div className="flex flex-col items-center w-2/5 text-center">
                    <div className={`w-8 h-12 rounded ${combo.c2} mb-2 border border-slate-100`}></div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">{combo.item2}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-blue-700 mb-1">Often bought together</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <span className="font-bold text-slate-750">{combo.pct} confidence score</span> based on historical order history.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Forecast;