import TableComponent from "@/components/TableComponent";
import { services } from "@/services/api";
import axios from "axios";
import { Roboto } from "next/font/google";
import React from "react";
import { useQuery } from "react-query";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const {
    isLoading,
    error,
    data,
  }: { isLoading: boolean; error: any; data: any } = useQuery(
    "overview",
    () => {
      return axios.get("/api/companies").then((res) => {
        return res.data;
      });
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-20 ${roboto.className}`}
    >
      <TableComponent tableData={data} />
    </main>
  );
}
