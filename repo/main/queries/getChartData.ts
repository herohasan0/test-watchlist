import axios from "axios";

export const getChartData = () => {
  return {
    queryKey: "chartData",
    queryFn: () =>
      axios.get<any>("/api/companies").then((data) => {
        return data.data;
      }),
    cacheTime: 5 * 60 * 1000,
  };
};
