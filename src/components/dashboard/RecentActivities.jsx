import { ClipboardList } from "lucide-react";

const RecentActivities = () => {
  const activities = [
    { title: "Invoice #INV-2026-045", desc: "Paid · 2 min ago" },
    { title: "New Client Added", desc: "Acme Corporation · 15 min ago" },
    { title: "Payment Received", desc: "₹1,25,000 · 1 hr ago" },
    { title: "Report Generated", desc: "Monthly Report · 2 hrs ago" }
  ];

  return (
    <div className="rounded-[31px] border border-slate-100 bg-white p-7 shadow-[0_8px_25px_rgba(15,23,42,.03)] h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-[15px] font-black text-slate-900">Recent Activities</h3>
        <button className="text-[11px] font-bold text-blue-500 hover:text-blue-600 transition-colors">View All</button>
      </div>
      
      <div className="space-y-6 flex-1">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center gap-4 group cursor-pointer">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 group-hover:bg-amber-100 group-hover:scale-105 transition-all duration-300">
              <ClipboardList size={16} strokeWidth={2.5} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-[13px] font-bold text-slate-800 truncate group-hover:text-amber-600 transition-colors">
                {activity.title}
              </h4>
              <p className="text-[11px] font-medium text-slate-400 mt-0.5 truncate">
                {activity.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;