import { Dispatch, SetStateAction } from "react";

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

export interface LeftSideProps {
  dataLength: number;
}

export interface TableComponentProps {
  data: TableRow[] | undefined;
}

export interface TableBodyProps {
  table: any;
  flexRender: any;
}

export interface TableCellProps {
  value: string | number;
}

export interface TableHeadProps {
  table: any;
  flexRender: any;
}

export interface TableTopSectionProps {
  data: any;
  setSearchText: Dispatch<SetStateAction<any>>;
  searchText: string;
}
