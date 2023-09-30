import TableCell from "./TableCell";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<TableRow>();
import { TableData, TableRow } from "@/types/data";
import HoverContext from "../HoverContext";

// // Cell: ({ cell }: { cell: { value: TableCell } }) => <CustomComponent data={cell.value} />,

const deneme = <div>sadfasf</div>;

const Columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (props: any) => <TableCell value={props.getValue()} />,
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (props) => (
      <HoverContext hoverText={props.getValue()}>
        <TableCell value={`${props.getValue()?.substring(0, 15)}..`} />
      </HoverContext>
    ),
  }),
  columnHelper.accessor("address", {
    header: "Address",
    cell: (props) => <TableCell value={props.getValue()} />,
  }),
  columnHelper.accessor("dividendYield", {
    header: "Dividend Yield",
    cell: (props) => <TableCell value={props.getValue()} />,
  }),
  columnHelper.accessor("marketCapitalization", {
    header: "Market Capitalization",
    cell: (props) => <TableCell value={props.getValue()} />,
  }),
];

export default Columns;
