import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../index.css";
import StarterApp from "./StarterApp";

const queryClient = new QueryClient();
//   {
//   defaultOptions: { // global settings for catching
//     queries: {
//       retry: 3,
//       cacheTime: 300_000, //5m work like GC
//       staleTime: 10 * 1000, //10s
//       refetchOnWindowFocus: false, // to disable refetch data from server in this 3 conditions
//       refetchOnReconnect: false, // eg open new tab on browser and then  go back to react app data is refetch
//       refetchOnMount: false,
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StarterApp />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
