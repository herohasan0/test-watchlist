type TableRow = {
  name: string;
  description: string;
  address: string;
  dividendYield: string;
  marketCapitalization: string;
};

type TableData = {
  fileName: string;
  AAPL: TableRow;
  MSFT: TableRow;
  IBM: TableRow;
};

export { TableRow, TableData };
