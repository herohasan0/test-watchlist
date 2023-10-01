import React, { FC } from "react";
import Search from "../Search";
import LeftSide from "./LeftSide";
import { TableTopSectionProps } from "@/repo/main";

const TableTopSection: FC<TableTopSectionProps> = ({
  data,
  searchText,
  setSearchText,
}) => (
  <div className="flex items-center justify-between">
    <LeftSide dataLength={data?.length ?? 0} />
    <Search searchText={searchText} setSearchText={setSearchText} />
  </div>
);

export default TableTopSection;
