import Container from "@/components/Container";
import Chart from "@/components/Chart";
import TableComponent from "@/components/TableComponent";
import axios from "axios";
import { Roboto } from "next/font/google";
import React from "react";
import { useQuery } from "react-query";
import { LoadingComponent } from "@/components/LoadingComponent";

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

  if (isLoading)
    return (
      <div className="grid h-screen place-items-center bg-custom-gray-50">
        <LoadingComponent />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <main
      className={`flex flex-col items-center space-y-4 mt-4 px-8 max-w-[1300px] mx-auto ${roboto.className}`}
    >
      <Container>
        <TableComponent tableData={data} />
      </Container>
      <Container>
        <Chart chartData={data} />
      </Container>
    </main>
  );
}
