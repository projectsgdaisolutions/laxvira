import React, { useState, useEffect } from 'react';
import { Plus, Building2, Phone, Mail, ArrowRight, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

const STAGES = [
  { id: 'LEAD', label: 'New Leads', color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { id: 'CONTACTED', label: 'Contacted', color: 'bg-amber-50 border-amber-200 text-amber-800' },
  { id: 'PROPOSAL', label: 'Proposal Sent', color: 'bg-purple-50 border-purple-200 text-purple-800' },
  { id: 'WON', label: 'Deal Won', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' }
];

const CRM = () => {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ contact_name: '', company_name: '', phone: '', email: '', estimated_value: '', notes: '' });

  const fetchLeads = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:8000/api/leads', { headers: { Authorization: `Bearer ${token}` }});
      setLeads(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchLeads(); }, []);

  const handleCreateLead = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:8000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(formData)
      });
      setIsModalOpen(false);
      setFormData({ contact_name: '', company_name: '', phone: '', email: '', estimated_value: '', notes: '' });
      fetchLeads();
    } catch (err) {
      console.error(err);
    }
  };

  const moveLead = async (leadId, currentStage) => {
    const currentIndex = STAGES.findIndex(s => s.id === currentStage);
    if (currentIndex >= STAGES.length - 1) return;
    
    const nextStage = STAGES[currentIndex + 1].id;
    
    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:8000/api/leads/${leadId}/stage`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ stage: nextStage })
      });
      fetchLeads();
    } catch (err) {
      console.error(err);
    }
  };

  const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString('en-IN')}`;

  if (isLoading) return <div className="min-h-screen flex justify-center items-center"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Sales Pipeline</h1>
            <p className="text-sm text-slate-500 mt-1">Track prospects from lead to closed deal.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 flex items-center shadow-sm">
            <Plus size={16} className="mr-2" /> Add Lead
          </button>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max h-full">
            {STAGES.map(stage => (
              <div key={stage.id} className="w-80 flex flex-col h-full">
                <div className={`px-4 py-2 rounded-t-xl border font-bold text-sm flex justify-between items-center ${stage.color}`}>
                  {stage.label}
                  <span className="bg-white/50 px-2 py-0.5 rounded-full text-xs">
                    {leads.filter(l => l.stage === stage.id).length}
                  </span>
                </div>
                
                <div className="flex-1 bg-slate-100 border-x border-b border-slate-200 rounded-b-xl p-3 space-y-3 min-h-[500px]">
                  {leads.filter(l => l.stage === stage.id).map(lead => (
                    <div key={lead.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-900 text-sm">{lead.contact_name}</h4>
                        {lead.estimated_value > 0 && <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{formatCurrency(lead.estimated_value)}</span>}
                      </div>
                      
                      {lead.company_name && <div className="flex items-center text-xs text-slate-600 mb-1"><Building2 size={12} className="mr-1.5" /> {lead.company_name}</div>}
                      {lead.phone && <div className="flex items-center text-xs text-slate-600 mb-1"><Phone size={12} className="mr-1.5" /> {lead.phone}</div>}
                      {lead.email && <div className="flex items-center text-xs text-slate-600"><Mail size={12} className="mr-1.5" /> {lead.email}</div>}
                      
                      {stage.id !== 'WON' && (
                        <button 
                          onClick={() => moveLead(lead.id, stage.id)}
                          className="mt-4 w-full flex items-center justify-center gap-1 py-1.5 bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:text-indigo-600 hover:border-indigo-200 rounded transition-colors"
                        >
                          Move to next stage <ArrowRight size={14} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Lead Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
              <div className="px-6 py-4 border-b bg-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Add New Lead</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600"><XCircle size={20} /></button>
              </div>
              <form onSubmit={handleCreateLead} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Contact Name *</label>
                  <input required type="text" value={formData.contact_name} onChange={e => setFormData({...formData, contact_name: e.target.value})} className="w-full border rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                  <input type="text" value={formData.company_name} onChange={e => setFormData({...formData, company_name: e.target.value})} className="w-full border rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                    <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Est. Deal Value (₹)</label>
                    <input type="number" value={formData.estimated_value} onChange={e => setFormData({...formData, estimated_value: e.target.value})} className="w-full border rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 mt-2">Save Lead</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CRM;