// // import React, { useState, useRef, useEffect } from 'react';
// // import { MessageSquare, X, Send, Bot } from 'lucide-react';

// // const ChatbotWidget = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [inputValue, setInputValue] = useState('');
// //   const [messages, setMessages] = useState([
// //     { role: 'bot', text: 'Hello! I am the Laxvira Assistant. How can I help you today?' }
// //   ]);
  
// //   const messagesEndRef = useRef(null);

// //   // Auto-scroll to the latest message
// //   useEffect(() => {
// //     if (messagesEndRef.current) {
// //       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   }, [messages]);

// //   // --- Rule-Based Processing Engine ---
// //   const generateBotResponse = (userText) => {
// //     const lowerText = userText.toLowerCase();

// //     if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
// //       return 'Hi there! What can I assist you with?';
// //     }
    
// //     if (lowerText.includes('quotation') || lowerText.includes('quote')) {
// //       if (lowerText.includes('change') || lowerText.includes('edit') || lowerText.includes('update')) {
// //         return 'To change a quotation, navigate to the Quotations tab, select your draft, and click edit. Note: Converted quotations cannot be altered.';
// //       }
// //       return 'Quotations can be managed in the "Quotations" tab. You can create drafts, send them to clients, or convert them directly to invoices.';
// //     }

// //     if (lowerText.includes('invoice') || lowerText.includes('bill')) {
// //       return 'You can view, print, and track payments for all invoices in the "Invoices" section of your dashboard.';
// //     }

// //     return 'For this request, our help team will provide the further services. Please reach out to support@laxvira.com.';
// //   };

// //   const handleSendMessage = (e) => {
// //     e.preventDefault();
// //     if (!inputValue.trim()) return;

// //     const newMessages = [...messages, { role: 'user', text: inputValue.trim() }];
// //     setMessages(newMessages);
// //     setInputValue('');

// //     setTimeout(() => {
// //       const botReply = generateBotResponse(inputValue);
// //       setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
// //     }, 600);
// //   };

// //   return (
// //     <>
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className={`fixed bottom-6 right-6 w-14 h-14 bg-[#0A1128] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(10,17,40,0.3)] z-50 hover:scale-105 active:scale-95 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
// //         aria-label="Open Chat"
// //       >
// //         <MessageSquare size={24} />
// //       </button>

// //       <div 
// //         className={`fixed bottom-6 right-6 w-[340px] sm:w-[380px] bg-white border border-slate-200 shadow-2xl rounded-2xl flex flex-col z-50 overflow-hidden transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
// //       >
// //         <div className="bg-[#0A1128] p-4 flex justify-between items-center text-white">
// //           <div className="flex items-center gap-2">
// //             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
// //               <Bot size={18} className="text-[#C5A059]" />
// //             </div>
// //             <div>
// //               <h3 className="font-bold text-sm">Laxvira Support</h3>
// //               <p className="text-[10px] text-slate-300 flex items-center gap-1">
// //                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
// //               </p>
// //             </div>
// //           </div>
// //           <button 
// //             onClick={() => setIsOpen(false)}
// //             className="text-slate-300 hover:text-white transition-colors"
// //           >
// //             <X size={20} />
// //           </button>
// //         </div>

// //         <div className="flex-1 p-4 bg-slate-50 overflow-y-auto h-80 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-200">
// //           {messages.map((msg, index) => (
// //             <div 
// //               key={index} 
// //               className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
// //             >
// //               <div 
// //                 className={`max-w-[80%] p-3 text-sm leading-relaxed shadow-sm ${
// //                   msg.role === 'user' 
// //                     ? 'bg-[#0A1128] text-white rounded-2xl rounded-tr-sm' 
// //                     : 'bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-sm'
// //                 }`}
// //               >
// //                 {msg.text}
// //               </div>
// //             </div>
// //           ))}
// //           <div ref={messagesEndRef} />
// //         </div>

// //         <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center">
// //           <input
// //             type="text"
// //             value={inputValue}
// //             onChange={(e) => setInputValue(e.target.value)}
// //             placeholder="Type your question..."
// //             className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all"
// //           />
// //           <button
// //             type="submit"
// //             disabled={!inputValue.trim()}
// //             className="w-10 h-10 rounded-xl bg-[#0A1128] flex items-center justify-center text-white shrink-0 hover:bg-[#1a2952] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
// //           >
// //             <Send size={16} className={inputValue.trim() ? "translate-x-0.5 -translate-y-0.5 transition-transform" : ""} />
// //           </button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // };

// // export default ChatbotWidget;


// // import React, { useState, useRef, useEffect } from 'react';
// // import { MessageSquare, X, Send, Bot } from 'lucide-react';

// // const ChatbotWidget = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [inputValue, setInputValue] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [messages, setMessages] = useState([
// //     { role: 'bot', text: 'Hello! I am the Laxvira Assistant. How can I help you today?' }
// //   ]);
  
// //   const messagesEndRef = useRef(null);

// //   // Auto-scroll to the latest message
// //   useEffect(() => {
// //     if (messagesEndRef.current) {
// //       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   }, [messages]);

// //   const handleSendMessage = async (e) => {
// //     e.preventDefault();
// //     if (!inputValue.trim()) return;

// //     const userText = inputValue.trim();
    
// //     // 1. Immediately append the user's message to the chat
// //     setMessages(prev => [...prev, { role: 'user', text: userText }]);
// //     setInputValue('');
// //     setIsLoading(true);

// //     try {
// //       // 2. Grab the JWT token to authenticate the request
// //       const token = localStorage.getItem('token'); // Ensure this matches your auth storage key
      
// //       // 3. Call your FastAPI backend
// //       const res = await fetch('http://localhost:8000/api/ai/chat', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ${token}`
// //         },
// //         // Must match the schemas.ChatMessage payload shape { message: string }
// //         body: JSON.stringify({ message: userText }) 
// //       });

// //       if (res.ok) {
// //         const data = await res.json();
// //         // 4. Append the AI's reply
// //         setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
// //       } else {
// //         const errData = await res.json();
// //         console.error("Chatbot API Error:", errData);
// //         setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I am having trouble connecting to the server right now.' }]);
// //       }
// //     } catch (err) {
// //       console.error("Network Error:", err);
// //       setMessages(prev => [...prev, { role: 'bot', text: 'Network error. Please check your connection and try again.' }]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className={`fixed bottom-6 right-6 w-14 h-14 bg-[#0A1128] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(10,17,40,0.3)] z-50 hover:scale-105 active:scale-95 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
// //         aria-label="Open Chat"
// //       >
// //         <MessageSquare size={24} />
// //       </button>

// //       <div 
// //         className={`fixed bottom-6 right-6 w-[340px] sm:w-[380px] bg-white border border-slate-200 shadow-2xl rounded-2xl flex flex-col z-50 overflow-hidden transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
// //       >
// //         <div className="bg-[#0A1128] p-4 flex justify-between items-center text-white">
// //           <div className="flex items-center gap-2">
// //             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
// //               <Bot size={18} className="text-[#C5A059]" />
// //             </div>
// //             <div>
// //               <h3 className="font-bold text-sm">Laxvira Support</h3>
// //               <p className="text-[10px] text-slate-300 flex items-center gap-1">
// //                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
// //               </p>
// //             </div>
// //           </div>
// //           <button 
// //             onClick={() => setIsOpen(false)}
// //             className="text-slate-300 hover:text-white transition-colors"
// //           >
// //             <X size={20} />
// //           </button>
// //         </div>

// //         <div className="flex-1 p-4 bg-slate-50 overflow-y-auto h-80 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-200">
// //           {messages.map((msg, index) => (
// //             <div 
// //               key={index} 
// //               className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
// //             >
// //               <div 
// //                 className={`max-w-[80%] p-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
// //                   msg.role === 'user' 
// //                     ? 'bg-[#0A1128] text-white rounded-2xl rounded-tr-sm' 
// //                     : 'bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-sm'
// //                 }`}
// //               >
// //                 {msg.text}
// //               </div>
// //             </div>
// //           ))}
// //           {isLoading && (
// //             <div className="flex w-full justify-start">
// //                <div className="max-w-[80%] p-3 text-sm leading-relaxed shadow-sm bg-white border border-slate-100 text-slate-400 rounded-2xl rounded-tl-sm animate-pulse">
// //                  Thinking...
// //                </div>
// //             </div>
// //           )}
// //           <div ref={messagesEndRef} />
// //         </div>

// //         <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center">
// //           <input
// //             type="text"
// //             value={inputValue}
// //             onChange={(e) => setInputValue(e.target.value)}
// //             disabled={isLoading}
// //             placeholder={isLoading ? "Please wait..." : "Type your question..."}
// //             className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all disabled:opacity-50"
// //           />
// //           <button
// //             type="submit"
// //             disabled={!inputValue.trim() || isLoading}
// //             className="w-10 h-10 rounded-xl bg-[#0A1128] flex items-center justify-center text-white shrink-0 hover:bg-[#1a2952] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
// //           >
// //             <Send size={16} className={inputValue.trim() ? "translate-x-0.5 -translate-y-0.5 transition-transform" : ""} />
// //           </button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // };

// // export default ChatbotWidget;

// import React, { useState, useRef, useEffect } from 'react';
// import { MessageSquare, X, Send, Bot } from 'lucide-react';

// const ChatbotWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: 'bot', text: 'Hello! I am the Laxvira Assistant. How can I help you today?' }
//   ]);
  
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [messages]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;

//     const userText = inputValue.trim();
    
//     setMessages(prev => [...prev, { role: 'user', text: userText }]);
//     setInputValue('');
//     setIsLoading(true);

//     try {
//       const token = localStorage.getItem('token'); 
      
//       // Conditionally build headers so we don't send 'Bearer null' for guests
//       const headers = {
//         'Content-Type': 'application/json'
//       };
      
//       if (token && token !== 'null') {
//         headers['Authorization'] = `Bearer ${token}`;
//       }

//       const res = await fetch('http://localhost:8000/api/ai/chat', {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify({ message: userText }) 
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
//       } else {
//         const errData = await res.json();
//         console.error("Chatbot API Error:", errData);
//         setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I am having trouble connecting to the server right now.' }]);
//       }
//     } catch (err) {
//       console.error("Network Error:", err);
//       setMessages(prev => [...prev, { role: 'bot', text: 'Network error. Please check your connection and try again.' }]);
//     } finally {
//       setIsLoading(false);
//     }

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`fixed bottom-6 right-6 w-14 h-14 bg-[#0A1128] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(10,17,40,0.3)] z-50 hover:scale-105 active:scale-95 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
//         aria-label="Open Chat"
//       >
//         <MessageSquare size={24} />
//       </button>

//       <div 
//         className={`fixed bottom-6 right-6 w-[340px] sm:w-[380px] h-[550px] max-h-[calc(100vh-100px)] bg-white border border-slate-200 shadow-2xl rounded-2xl flex flex-col z-50 overflow-hidden transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
//       >
//         <div className="bg-[#0A1128] p-4 flex justify-between items-center text-white shrink-0">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
//               <Bot size={18} className="text-[#C5A059]" />
//             </div>
//             <div>
//               <h3 className="font-bold text-sm">Laxvira Support</h3>
//               <p className="text-[10px] text-slate-300 flex items-center gap-1">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
//               </p>
//             </div>
//           </div>
//           <button 
//             onClick={() => setIsOpen(false)}
//             className="text-slate-300 hover:text-white transition-colors"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="flex-1 p-4 bg-slate-50 overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-200">
//           {messages.map((msg, index) => (
//             <div 
//               key={index} 
//               className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div 
//                 className={`max-w-[80%] p-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
//                   msg.role === 'user' 
//                     ? 'bg-[#0A1128] text-white rounded-2xl rounded-tr-sm' 
//                     : 'bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-sm'
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//           {isLoading && (
//             <div className="flex w-full justify-start">
//                <div className="max-w-[80%] p-3 text-sm leading-relaxed shadow-sm bg-white border border-slate-100 text-slate-400 rounded-2xl rounded-tl-sm animate-pulse">
//                  Thinking...
//                </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>

//         <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center shrink-0">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             disabled={isLoading}
//             placeholder={isLoading ? "Please wait..." : "Type your question..."}
//             className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all disabled:opacity-50"
//           />
//           <button
//             type="submit"
//             disabled={!inputValue.trim() || isLoading}
//             className="w-10 h-10 rounded-xl bg-[#0A1128] flex items-center justify-center text-white shrink-0 hover:bg-[#1a2952] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//           >
//             <Send size={16} className={inputValue.trim() ? "translate-x-0.5 -translate-y-0.5 transition-transform" : ""} />
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };
// }
// export default ChatbotWidget;

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am the Laxvira Assistant. How can I help you today?' }
  ]);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const token = localStorage.getItem('token'); 
      
      // Conditionally build headers so we don't send 'Bearer null' for guests
      const headers = {
        'Content-Type': 'application/json'
      };
      
      if (token && token !== 'null') {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const res = await fetch('http://localhost:8000/api/ai/chat', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ message: userText }) 
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
      } else {
        const errData = await res.json();
        console.error("Chatbot API Error:", errData);
        setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I am having trouble connecting to the server right now.' }]);
      }
    } catch (err) {
      console.error("Network Error:", err);
      setMessages(prev => [...prev, { role: 'bot', text: 'Network error. Please check your connection and try again.' }]);
    } finally {
      setIsLoading(false);
    }
  }; // <-- ADDED: Closing brace for handleSendMessage was missing here

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-[#0A1128] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(10,17,40,0.3)] z-50 hover:scale-105 active:scale-95 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
      </button>

      <div 
        className={`fixed bottom-6 right-6 w-[340px] sm:w-[380px] h-[550px] max-h-[calc(100vh-100px)] bg-white border border-slate-200 shadow-2xl rounded-2xl flex flex-col z-50 overflow-hidden transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        <div className="bg-[#0A1128] p-4 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Bot size={18} className="text-[#C5A059]" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Laxvira Support</h3>
              <p className="text-[10px] text-slate-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-4 bg-slate-50 overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-200">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-[#0A1128] text-white rounded-2xl rounded-tr-sm' 
                    : 'bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex w-full justify-start">
               <div className="max-w-[80%] p-3 text-sm leading-relaxed shadow-sm bg-white border border-slate-100 text-slate-400 rounded-2xl rounded-tl-sm animate-pulse">
                 Thinking...
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center shrink-0">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            placeholder={isLoading ? "Please wait..." : "Type your question..."}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="w-10 h-10 rounded-xl bg-[#0A1128] flex items-center justify-center text-white shrink-0 hover:bg-[#1a2952] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={16} className={inputValue.trim() ? "translate-x-0.5 -translate-y-0.5 transition-transform" : ""} />
          </button>
        </form>
      </div>
    </>
  );
};

// REMOVED: The extra trailing '}' that was here
export default ChatbotWidget;