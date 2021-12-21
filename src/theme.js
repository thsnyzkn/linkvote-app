import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  black: "#000000",
  primary: "#ECECEC",
  secondary: "#F7F7F7",
};
const theme = extendTheme({ config, colors });

export default theme;
