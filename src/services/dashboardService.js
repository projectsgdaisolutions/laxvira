import { dashboardSummary } from "../data/dashboard";

export const getDashboardSummary = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1200);
  });

  return dashboardSummary;
};