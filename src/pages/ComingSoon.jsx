const ComingSoon = ({ title = "This page" }) => {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
      <h1 className="text-3xl font-semibold text-slate-800">{title}</h1>
      <p className="mt-3 text-lg text-slate-500">Coming Soon</p>
    </div>
  );
};

export default ComingSoon;
