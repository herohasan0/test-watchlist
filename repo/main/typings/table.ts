export interface TableRow {
  name: string;
  description: string;
  address: string;
  dividendYield: string;
  marketCapitalization: string;
}

export interface ChartRow {
  xAxis: string[];
  open: string[];
  low: string[];
  high: string[];
  close: string[];
}

export interface DataRow {
  tableData: TableRow;
  chartData: ChartRow;
}

export interface TableData {
  AAPL: {
    tableData: TableRow;
  };
  MSFT: {
    tableData: TableRow;
  };
  IBM: {
    tableData: TableRow;
  };
}
