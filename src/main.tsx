import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* Need to add theme props if you want to implement Chakra theme mode */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* Need to initialize ColorModeScript if you want to implement Chakra theme mode */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
