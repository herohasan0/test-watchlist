import "@/styles/globals.css";
import React, { FC } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

// Turn off all refetch configs to avoid exceeding the API limit
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000), //10 min
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    },
  },
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
