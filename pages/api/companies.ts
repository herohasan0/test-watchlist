import { services } from "@/services/api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const symbols = ["AAPL", "MSFT", "IBM"];
  const companyData: any = {};

  const axiosPromises = symbols.map((symbol) => services.overview({ symbol }));

  await Promise.all(axiosPromises)
    .then((responses) => {
      symbols.forEach((symbol, index) => {
        companyData[symbol] = {
          name: responses[index].data.Name || "name placeholder",
          description: responses[index].data.Description || "desc placeholder",
          address: responses[index].data.Address || "address placeholder",
          dividendYield:
            responses[index].data.DividendYield || "dividedyield placeholder",
          marketCapitalization:
            responses[index].data.MarketCapitalization ||
            "marketcapital placeholder",
        };
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });

  res.status(200).json(companyData);
}
