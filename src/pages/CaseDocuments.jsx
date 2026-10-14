import React from 'react';
import Sidebar from '../components/Sidebar'; // Adjust path if needed

const CaseDocuments = () => {
  return (
    <div className="flex h-screen bg-[#fbfaf8]">
      <Sidebar />
      <div className="flex-1 p-10 ml-72">
        <h1 className="text-3xl font-black text-slate-900 mb-4">Case Documents</h1>
        <p className="text-slate-500">This module is under construction.</p>
      </div>
    </div>
  );
};

export default CaseDocuments;