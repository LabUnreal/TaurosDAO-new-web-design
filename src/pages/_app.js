import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
      heading: "Rufina, serif",
      body: "PT Serif, sans-serif"
    },
    fontSizes: {
      '7xl': '4.5rem',
      '8xl': '5rem',
      '9xl': '6rem',
    },
  });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
