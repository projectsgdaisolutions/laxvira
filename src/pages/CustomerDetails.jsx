// =====================================================================================
// CustomerDetails.jsx
// Customer Details Page
// -------------------------------------------------------------------------------------
// Frontend-only implementation. Every point where a real backend call will eventually
// replace local logic is marked with "API PLACEHOLDER" / "TODO" comments.
// =====================================================================================

// ------------------------------- Imports --------------------------------------------
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Pencil,
  Printer,
  ShoppingBag,
  Wallet,
  TrendingUp,
  CalendarClock,
  Phone,
  Mail,
  MapPin,
  BadgePercent,
  Star,
  Loader2,
} from "lucide-react";

// Current data source — a static dummy dataset.
// API PLACEHOLDER: replace this import with a network call.
// Future:
//   const { data } = await axios.get(`/customers/${id}`);
//   setCustomer(data);
import { customers as ALL_CUSTOMERS } from "../data/customers";

// ------------------------------- Constants -------------------------------------------
const VIP_SPEND_THRESHOLD = 20000;

// ------------------------------- API Placeholder Functions ---------------------------

// API PLACEHOLDER: GET /customers/:id
// Future: return (await axios.get(`/customers/${id}`)).data;
const fetchCustomerFromServer = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return ALL_CUSTOMERS.find((customer) => customer.id === id) || null;
};

// API PLACEHOLDER: PUT /customers/:id
// Future: return (await axios.put(`/customers/${id}`, payload)).data;
const updateCustomerOnServer = async (id, payload) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  console.log("Customer update submitted to backend:", id, payload);
  // TODO PUT /customers/:id
  return { success: true };
};

// API PLACEHOLDER: DELETE /customers/:id
// Future: return (await axios.delete(`/customers/${id}`)).data;
const deleteCustomerOnServer = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  console.log("Customer delete submitted to backend:", id);
  // TODO DELETE /customers/:id
  return { success: true };
};

// ------------------------------- Utility / Helper Functions ---------------------------

const isVIPCustomer = (customer) => customer.totalSpent >= VIP_SPEND_THRESHOLD;

const formatCurrency = (value) =>
  `₹${Number(value || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const formatDisplayDate = (isoDate) => {
  if (!isoDate) return "—";
  return new Date(isoDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// ------------------------------- Small Reusable Sub-Components ------------------------

const StatusBadge = ({ status }) => {
  const styles = {
    Active: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Inactive: "bg-slate-100 text-slate-500 border-slate-200",
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

const PurchaseStatusBadge = ({ status }) => {
  const styles = {
    Completed: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Pending: "bg-amber-50 text-amber-600 border-amber-100",
    Refunded: "bg-red-50 text-red-600 border-red-100",
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

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 flex items-center gap-3">
    <div className={`w-11 h-11 flex items-center justify-center rounded-xl ${accent}`}>
      <Icon size={20} />
    </div>
    <div>
      <p className="text-xs text-slate-400">{label}</p>
      <p className="text-lg font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

const DetailRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-2.5">
    <Icon size={15} className="text-slate-400 mt-0.5 shrink-0" />
    <div>
      <p className="text-xs text-slate-400">{label}</p>
      <p className="text-sm font-medium text-slate-700">{value || "—"}</p>
    </div>
  </div>
);

// ------------------------------- Component ---------------------------------------------

export default function CustomerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ------------------------------- State ------------------------------------------------

  const [customer, setCustomer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // ------------------------------- Effects ------------------------------------------------

  useEffect(() => {
    let isMounted = true;

    const loadCustomer = async () => {
      setIsLoading(true);
      setLoadError(null);
      try {
        const data = await fetchCustomerFromServer(id);
        if (isMounted) {
          if (data) {
            setCustomer(data);
          } else {
            setLoadError("Customer not found.");
          }
        }
      } catch (error) {
        if (isMounted) setLoadError("Failed to load customer. Please try again.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadCustomer();
    return () => {
      isMounted = false;
    };
  }, [id]);

  // ------------------------------- Memoized Values ------------------------------------------

  const sortedPurchaseHistory = useMemo(() => {
    if (!customer) return [];
    return [...customer.purchaseHistory].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [customer]);

  // ------------------------------- Event Handlers -------------------------------------------

  const handleBack = useCallback(() => navigate(-1), [navigate]);

  const handleEditCustomer = useCallback(() => {
    if (!customer) return;
    // API PLACEHOLDER: PUT /customers/:id
    // Replace this stub with a real edit form/modal that collects updated fields.
    console.log("Edit customer clicked:", customer);
    updateCustomerOnServer(customer.id, customer);
  }, [customer]);

  const handlePrintSummary = useCallback(() => {
    // Renders the current page via the browser's print dialog.
    // API PLACEHOLDER: for a formatted PDF, replace with a call like
    // GET /customers/:id/summary-pdf and open/download the returned file.
    window.print();
  }, []);

  // ------------------------------- JSX ---------------------------------------------------

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 size={28} className="text-blue-500 animate-spin" />
      </div>
    );
  }

  if (loadError || !customer) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-3 p-6">
        <p className="text-sm text-red-500">{loadError || "Customer not found."}</p>
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
        >
          <ArrowLeft size={15} /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-6 flex flex-col gap-5">
      {/* ============================= TOP BUTTONS ============================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 w-fit px-3.5 py-2 rounded-xl text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm transition"
        >
          <ArrowLeft size={15} /> Back
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrintSummary}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm transition"
          >
            <Printer size={15} /> Print Customer Summary
          </button>
          <button
            onClick={handleEditCustomer}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100 transition"
          >
            <Pencil size={15} /> Edit Customer
          </button>
        </div>
      </div>

      {/* ============================= PROFILE CARD ============================= */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="w-16 h-16 flex items-center justify-center text-3xl bg-slate-50 rounded-2xl shrink-0">
          {customer.avatar}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-xl font-bold text-slate-800">{customer.name}</h1>
            {isVIPCustomer(customer) && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
                <Star size={12} className="fill-amber-500 text-amber-500" /> VIP
              </span>
            )}
            <StatusBadge status={customer.status} />
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{customer.customerCode}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <DetailRow icon={Phone} label="Phone" value={customer.mobile} />
            <DetailRow icon={Mail} label="Email" value={customer.email} />
            <DetailRow
              icon={MapPin}
              label="Address"
              value={`${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}`}
            />
            <DetailRow icon={BadgePercent} label="GST Number" value={customer.gstNumber || "Not provided"} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-blue-50 rounded-2xl px-5 py-4 shrink-0">
          <p className="text-xs text-blue-500 font-medium">Loyalty Points</p>
          <p className="text-2xl font-bold text-blue-700">{customer.loyaltyPoints}</p>
        </div>
      </div>

      {/* ============================= STATISTICS CARDS ============================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={ShoppingBag}
          label="Total Orders"
          value={customer.totalOrders}
          accent="bg-blue-50 text-blue-600"
        />
        <StatCard
          icon={Wallet}
          label="Total Spent"
          value={formatCurrency(customer.totalSpent)}
          accent="bg-emerald-50 text-emerald-600"
        />
        <StatCard
          icon={TrendingUp}
          label="Average Order Value"
          value={formatCurrency(customer.averageOrderValue)}
          accent="bg-violet-50 text-violet-600"
        />
        <StatCard
          icon={CalendarClock}
          label="Last Purchase"
          value={formatDisplayDate(customer.lastPurchase)}
          accent="bg-amber-50 text-amber-600"
        />
      </div>

      {/* ============================= PURCHASE HISTORY ============================= */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">Purchase History</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Complete record of past invoices for this customer
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                <th className="px-5 py-3">Invoice Number</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Items</th>
                <th className="px-5 py-3">Payment Method</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedPurchaseHistory.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-sm text-slate-400">
                    No purchase history available for this customer
                  </td>
                </tr>
              ) : (
                sortedPurchaseHistory.map((order) => (
                  <tr
                    key={order.invoiceId}
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60 transition"
                  >
                    <td className="px-5 py-3 font-medium text-slate-700">{order.invoiceId}</td>
                    <td className="px-5 py-3 text-slate-500">{formatDisplayDate(order.date)}</td>
                    <td className="px-5 py-3 text-slate-500">{order.items}</td>
                    <td className="px-5 py-3 text-slate-500">{order.paymentMethod}</td>
                    <td className="px-5 py-3 font-medium text-slate-700">
                      {formatCurrency(order.amount)}
                    </td>
                    <td className="px-5 py-3">
                      <PurchaseStatusBadge status={order.status} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}