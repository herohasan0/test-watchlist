import TableComponent from "@/components/TableComponent";
import { services } from "@/services/api";
import { Inter } from "next/font/google";
import React from "react";
import { useQuery } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    isLoading,
    error,
    data,
  }: { isLoading: boolean; error: any; data: any } = useQuery(
    "overview",
    () => {
      services.overview().then((res) => {
        console.log("res", res);
      });
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <TableComponent />
    </main>
  );
}
