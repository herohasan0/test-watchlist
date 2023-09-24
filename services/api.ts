import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.alphavantage.co/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const services = {
  overview: async ({ symbol }: { symbol: string }) =>
    api
      .get(
        `query?function=OVERVIEW&apikey=${process.env.NEXT_PUBLIC_TOKEN}&symbol=${symbol}`
      )
      .then((res) => res),

  timeSeries: async ({ symbol }: { symbol: string }) =>
    api.get(
      `query?function=TIME_SERIES_DAILY&outputsize=full%20&apikey=${process.env.NEXT_PUBLIC_TOKEN}&symbol=${symbol}`
    ),
};
