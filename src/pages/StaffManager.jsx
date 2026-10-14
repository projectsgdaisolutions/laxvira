import React, { useState, useEffect } from 'react';
import { Loader2, Plus, Shield, User, Mail, Lock, AlertTriangle } from 'lucide-react';

const StaffManager = () => {
  const [staffList, setStaffList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    hq_role: 'SALES' // Default selection
  });

  const fetchStaff = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:8000/api/hq/staff', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to load staff directory");
      const data = await res.json();
      setStaffList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateStaff = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:8000/api/hq/staff', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Failed to create staff account");
      }

      // Reset form and refresh table
      setFormData({ name: '', email: '', password: '', hq_role: 'SALES' });
      await fetchStaff();
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="text-purple-600" /> Organization Access Management
        </h1>
        <p className="text-sm text-slate-500 mt-1">Provision and manage internal employee accounts (Sales, Finance, IT).</p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 flex items-start gap-3 text-red-700">
          <AlertTriangle size={20} className="shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Creation Form Panel */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">Add New Employee</h2>
            
            <form onSubmit={handleCreateStaff} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-2.5 text-slate-400" />
                  <input 
                    type="text" required name="name"
                    value={formData.name} onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Work Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-2.5 text-slate-400" />
                  <input 
                    type="email" required name="email"
                    value={formData.email} onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="jane@yourcompany.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Temporary Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-2.5 text-slate-400" />
                  <input 
                    type="password" required name="password" minLength={8}
                    value={formData.password} onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Department Role</label>
                <select 
                  name="hq_role" required
                  value={formData.hq_role} onChange={handleInputChange}
                  className="w-full p-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white"
                >
                  <option value="SALES">Sales (Account Executive)</option>
                  <option value="FINANCE">Finance & Billing</option>
                  <option value="IT_SUPPORT">IT / Technical Support</option>
                  <option value="SUPERADMIN">Superadmin</option>
                </select>
              </div>

              <button 
                type="submit" disabled={isSubmitting}
                className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? <Loader2 size={16} className="animate-spin mr-2" /> : <Plus size={16} className="mr-2" />}
                Provision Account
              </button>
            </form>
          </div>
        </div>

        {/* Directory Data Table Panel */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-800">Active Directory</h2>
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                {staffList.length} Employees
              </span>
            </div>

            {isLoading ? (
              <div className="p-12 flex justify-center"><Loader2 className="animate-spin text-purple-600" size={32} /></div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                      <th className="p-4 font-semibold">Employee Name</th>
                      <th className="p-4 font-semibold">Email Address</th>
                      <th className="p-4 font-semibold">Access Level</th>
                      <th className="p-4 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {staffList.map((staff) => (
                      <tr key={staff.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 text-sm font-medium text-slate-900">{staff.name}</td>
                        <td className="p-4 text-sm text-slate-600">{staff.email}</td>
                        <td className="p-4">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                            staff.hq_role === 'SUPERADMIN' ? 'bg-red-100 text-red-700' :
                            staff.hq_role === 'SALES' ? 'bg-blue-100 text-blue-700' :
                            staff.hq_role === 'FINANCE' ? 'bg-emerald-100 text-emerald-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {staff.hq_role.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Active
                          </div>
                        </td>
                      </tr>
                    ))}
                    {staffList.length === 0 && (
                      <tr>
                        <td colSpan="4" className="p-8 text-center text-slate-500 text-sm">
                          No internal staff found. Create one to get started.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StaffManager;