import React from "react";
import { Roboto } from "next/font/google";
import Container from "@/components/Container";
import ChartSection from "@/components/ChartSection";
import TableSection from "@/components/TableSection/TableSection";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const index = () => {
  return (
    <main
      className={`flex flex-col items-center space-y-4 mt-4 px-8 max-w-[1300px] mx-auto ${roboto.className}`}
    >
      <Container>
        <TableSection />
      </Container>
      <Container>
        <ChartSection />
      </Container>
    </main>
  );
};

export default index;
