import React, { useState } from 'react';
import { MessageSquare, LifeBuoy, Sparkles, X, Send, Loader2, CheckCircle2 } from 'lucide-react';

const HelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMode, setActiveMode] = useState('ai'); // 'ai' or 'ticket'

  // AI Chat States
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', content: "Hi! I'm your Laxvira Copilot. How can I help you grow your business today?" }
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Ticketing States
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketDesc, setTicketDesc] = useState("");
  const [isSubmittingTicket, setIsSubmittingTicket] = useState(false);
  const [ticketSuccess, setTicketSuccess] = useState(false);

  const handleSendAiMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    setChatHistory(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatInput("");
    setIsAiTyping(true);

    try {
      const token = localStorage.getItem("token");
      // Replace with your actual AI endpoint
      const res = await fetch(`http://localhost:8000/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ message: userMessage })
      });
      
      const data = await res.json();
      setChatHistory(prev => [...prev, { role: 'ai', content: data.reply || "I couldn't process that request." }]);
    } catch (err) {
      setChatHistory(prev => [...prev, { role: 'ai', content: "Connection to AI engine failed." }]);
    } finally {
      setIsAiTyping(false);
    }
  };

  const handleRaiseTicket = async (e) => {
    e.preventDefault();
    if (!ticketSubject.trim() || !ticketDesc.trim()) return;

    setIsSubmittingTicket(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/tickets`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ subject: ticketSubject, description: ticketDesc })
      });

      if (!res.ok) throw new Error("Failed to raise ticket");
      
      setTicketSuccess(true);
      setTicketSubject("");
      setTicketDesc("");
      setTimeout(() => setTicketSuccess(false), 4000);
    } catch (err) {
      alert("Failed to submit ticket to IT support.");
    } finally {
      setIsSubmittingTicket(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {isOpen && (
        <div className="bg-white border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.15)] rounded-2xl w-[360px] h-[520px] mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          
          {/* Header & Tabs */}
          <div className="bg-[#0f172a] text-white p-4 shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black tracking-wide text-sm flex items-center gap-2">
                {activeMode === 'ai' ? <Sparkles size={16} className="text-[#C5A059]"/> : <LifeBuoy size={16} className="text-emerald-400"/>}
                {activeMode === 'ai' ? "Laxvira Copilot" : "IT Support Desk"}
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
            
            <div className="flex bg-slate-800 rounded-lg p-1">
              <button 
                onClick={() => setActiveMode('ai')}
                className={`flex-1 text-[11px] font-bold uppercase tracking-widest py-1.5 rounded-md transition-all ${activeMode === 'ai' ? 'bg-[#C5A059] text-[#0f172a]' : 'text-slate-400 hover:text-white'}`}
              >
                AI Assistant
              </button>
              <button 
                onClick={() => setActiveMode('ticket')}
                className={`flex-1 text-[11px] font-bold uppercase tracking-widest py-1.5 rounded-md transition-all ${activeMode === 'ticket' ? 'bg-white text-[#0f172a]' : 'text-slate-400 hover:text-white'}`}
              >
                Raise Ticket
              </button>
            </div>
          </div>

          {/* AI CHAT INTERFACE */}
          {activeMode === 'ai' && (
            <>
              <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3">
                {chatHistory.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${msg.role === 'user' ? 'bg-[#0f172a] text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isAiTyping && (
                  <div className="flex justify-start">
                    <div className="p-3 bg-white border border-slate-200 rounded-2xl rounded-bl-none text-slate-400 text-sm shadow-sm">
                      <Loader2 size={16} className="animate-spin" />
                    </div>
                  </div>
                )}
              </div>
              <form onSubmit={handleSendAiMessage} className="p-3 border-t border-slate-100 bg-white flex items-center gap-2">
                <input 
                  type="text" 
                  value={chatInput} 
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about invoices, sales..." 
                  className="flex-1 text-sm outline-none px-2 text-slate-700"
                />
                <button type="submit" disabled={!chatInput.trim() || isAiTyping} className="p-2 bg-[#0f172a] text-[#C5A059] rounded-xl hover:bg-[#C5A059] hover:text-[#0f172a] disabled:opacity-50 transition-colors">
                  <Send size={16} />
                </button>
              </form>
            </>
          )}

          {/* TICKETING INTERFACE */}
          {activeMode === 'ticket' && (
            <div className="flex-1 p-5 bg-white overflow-y-auto flex flex-col">
              <p className="text-xs text-slate-500 mb-5">Experiencing a technical issue or bug? Submit a ticket and our engineering team will investigate.</p>
              
              {ticketSuccess ? (
                <div className="flex flex-col items-center justify-center flex-1 text-emerald-500 gap-3">
                  <CheckCircle2 size={40} />
                  <p className="font-bold text-sm text-slate-800">Ticket Submitted!</p>
                  <p className="text-xs text-slate-500 text-center">Our IT team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleRaiseTicket} className="flex flex-col gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">Issue Summary</label>
                    <input 
                      type="text" 
                      required
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      placeholder="e.g., Unable to save quotation" 
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-[#0f172a] text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">Detailed Description</label>
                    <textarea 
                      required
                      value={ticketDesc}
                      onChange={(e) => setTicketDesc(e.target.value)}
                      placeholder="Please describe exactly what happened..." 
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-[#0f172a] text-slate-800 resize-none h-32"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmittingTicket}
                    className="w-full mt-2 bg-[#0f172a] text-white py-3 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-70"
                  >
                    {isSubmittingTicket ? <Loader2 size={16} className="animate-spin" /> : "Submit to IT Support"}
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0f172a] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(15,23,42,0.3)] hover:scale-105 transition-transform"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-[#C5A059]" />}
      </button>

    </div>
  );
};

export default HelpWidget;