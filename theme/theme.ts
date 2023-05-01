import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
};

const colors = {
  brand: {
    primary: "#CC359F",
    secondary: "#171737",
    tertiary: "#0F0F24",
  },
};
export const theme = extendTheme({ config, colors });
