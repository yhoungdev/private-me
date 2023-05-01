import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../theme/theme";
import "@/styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
