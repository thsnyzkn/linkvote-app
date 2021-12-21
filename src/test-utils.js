import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/provider";
import linksReducer from "./features/linkList/linkSlice";
import paginationReducer from "./features/pagination/paginationSlice";
import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from "./theme";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { linkList: linksReducer, pagination: paginationReducer },
      preloadedState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
