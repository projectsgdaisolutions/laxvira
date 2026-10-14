import { useState, useEffect } from "react";

export const useIndustryPricing = (defaultPrices = { BASIC: 999, GROWTH: 2499, ENTERPRISE: 4999 }) => {
  const [pricing, setPricing] = useState(defaultPrices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    const industry = userStr ? JSON.parse(userStr)?.industry || "WHOLESALE" : "WHOLESALE";

    fetch(`http://localhost:8000/api/pricing/${industry.toUpperCase()}`)
      .then(res => res.json())
      .then(data => {
        if (data?.BASIC) setPricing(data);
      })
      .catch(err => console.error("Could not fetch vertical pricing:", err))
      .finally(() => setLoading(false));
  }, []);

  return { pricing, loading };
};