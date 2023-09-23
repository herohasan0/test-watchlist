import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.alphavantage.co/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const services = {
  overview: async () =>
    api
      .get(
        `query?function=OVERVIEW&apikey=${process.env.NEXT_PUBLIC_TOKEN}&symbol=AAPL`
      )
      .then((res) => res.data),
};
