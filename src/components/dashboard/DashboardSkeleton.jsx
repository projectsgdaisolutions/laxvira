// const DashboardSkeleton = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="mb-8 h-8 w-64 animate-pulse rounded bg-gray-200" />
//       <div className="mb-6 h-4 w-48 animate-pulse rounded bg-gray-200" />
//       <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//         {Array.from({ length: 4 }).map((_, index) => (
//           <div key={index} className="h-40 animate-pulse rounded-2xl bg-gray-200" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DashboardSkeleton;

// const DashboardSkeleton = () => {
//   return (
//     <div className="min-h-screen bg-[#EEF1F8] p-4 sm:p-8">
//       <div className="max-w-[1400px] mx-auto">
//         <div className="mb-4 h-10 w-72 animate-pulse rounded-lg bg-slate-200" />
//         <div className="mb-8 h-5 w-48 animate-pulse rounded-lg bg-slate-200" />
        
//         <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mb-8">
//           {Array.from({ length: 4 }).map((_, index) => (
//             <div key={index} className="h-40 animate-pulse rounded-2xl bg-white border border-slate-100 shadow-sm" />
//           ))}
//         </div>

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
//            <div className="xl:col-span-2 h-96 animate-pulse rounded-2xl bg-white border border-slate-100 shadow-sm"></div>
//            <div className="xl:col-span-1 h-96 animate-pulse rounded-2xl bg-white border border-slate-100 shadow-sm"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardSkeleton;

const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#f7f9fc] p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="h-10 w-48 animate-pulse rounded-lg bg-slate-200" />
            <div className="mt-2 h-4 w-32 animate-pulse rounded-lg bg-slate-200" />
          </div>
          <div className="flex gap-4">
            <div className="h-10 w-48 animate-pulse rounded-full bg-slate-200" />
            <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200" />
            <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200" />
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mb-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-[150px] animate-pulse rounded-[24px] bg-white border border-slate-100 shadow-sm" />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.55fr_.8fr] gap-6">
           <div className="h-[450px] animate-pulse rounded-[31px] bg-white border border-slate-100 shadow-sm"></div>
           <div className="h-[450px] animate-pulse rounded-[31px] bg-white border border-slate-100 shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;