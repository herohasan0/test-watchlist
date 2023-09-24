import { services } from "@/services/api";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const createJsonFileName = (): string => {
  const ms = Date.now();
  return `${ms}.json`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const symbols = ["AAPL", "MSFT", "IBM"];
  const companyData: any = {};

  const rootFolder = process.cwd();
  const folderPath = path.join(rootFolder, "datafile");
  const fileName = createJsonFileName();
  const filePath = path.join(folderPath, fileName);

  function removeFolderRecursive(folderPath: string) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        removeFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }

  const handleServiceCallForOverview = async () => {
    const promisesForOverview = symbols.map((symbol) =>
      services.overview({ symbol })
    );
    console.log("handleServiceCallForOverview");

    await Promise.all(promisesForOverview)
      .then((responses) => {
        symbols.forEach((symbol, index) => {
          companyData[symbol] = {
            ...companyData[symbol],
            tableData: {
              name: responses[index].data.Name || "name placeholder",
              description:
                responses[index].data.Description || "desc placeholder",
              address: responses[index].data.Address || "address placeholder",
              dividendYield:
                responses[index].data.DividendYield ||
                "dividedyield placeholder",
              marketCapitalization:
                responses[index].data.MarketCapitalization ||
                "marketcapital placeholder",
            },
          };
        });
      })
      .then(() => {
        setTimeout(() => handleServiceCallForTimeSeries(), 60000);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const handleServiceCallForTimeSeries = async () => {
    const promisesForTimeSeries = symbols.map((symbol) =>
      services.timeSeries({ symbol })
    );
    console.log("handleServiceCallForTimeSeries");

    await Promise.all(promisesForTimeSeries)
      .then((response: any) => {
        console.log("response", response);
        symbols.forEach((symbol, index) => {
          const xAxis = Object?.keys(
            response[index]?.data["Time Series (Daily)"]
          );
          const values = Object?.values(
            response[index]?.data["Time Series (Daily)"]
          );
          const open = values.map((e: any) => e["1. open"]);
          const high = values.map((e: any) => e["2. high"]);
          const low = values.map((e: any) => e["3. low"]);
          const close = values.map((e: any) => e["4. close"]);

          companyData[symbol] = {
            ...companyData[symbol],
            chartData: {
              xAxis,
              open,
              high,
              low,
              close,
            },
          };
        });
      })
      .then(() => {
        createDataFile();
      });
  };

  const createDataFile = () => {
    if (!fs.existsSync(folderPath)) {
      Object.assign(companyData, { fileName });
      const jsonData = JSON.stringify(companyData, null, 2);

      try {
        if (fs.existsSync(folderPath)) {
          removeFolderRecursive(folderPath);
        }

        fs.mkdirSync(folderPath, { recursive: true });
        fs.writeFileSync(filePath, jsonData);
      } catch (error) {
        console.error("Error creating JSON file:", error);
        res.status(500).json({ error: `Error creating JSON file: ${error}` });
      }
    }
  };
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      res.status(500).end("Internal Server Error");
      return;
    }
    if (files.length === 0) {
      res.status(404).end("No files found in the folder");
      return;
    }
    const chosenFile = files[0];
    const filePath = path.join(folderPath, chosenFile);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return res.status(200).send(fileContent);
  });

  // handleServiceCallForOverview();
}
