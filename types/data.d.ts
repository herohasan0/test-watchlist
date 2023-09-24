type TableRow = {
  name: string;
  description: string;
  address: string;
  dividendYield: string;
  marketCapitalization: string;
};

type ChartRow = {
  xAxis: string[];
  open: string[];
  low: string[];
  high: string[];
  close: string[];
};

type DataRow = {
  tableData: TableRow;
  chartData: ChartRow;
};

type TableData = {
  fileName: string;
  AAPL: {
    tableData: TableRow;
  };
  MSFT: {
    tableData: TableRow;
  };
  IBM: {
    tableData: TableRow;
  };
};

export { TableRow, TableData, DataRow, ChartRow };
