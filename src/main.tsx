import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";

const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <ChakraProvider theme={theme}>
//       {/* Need to add theme props if you want to implement Chakra theme mode */}
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       {/* Need to initialize ColorModeScript if you want to implement Chakra theme mode */}
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
