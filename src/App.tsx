import React from "react";
import { ThemeProvider } from "styled-components";
import { theme1 } from "./styles/theme/default";
import GlobalStyle from "./styles/globals";
import { BrowserRouter } from "react-router-dom";

import { ListProvider } from "contexts/List";
import { MyRoutes } from "routes";

const App = () => {
  return (
    <ThemeProvider theme={theme1}>
      <ListProvider>
        <BrowserRouter>
          <GlobalStyle />

          <MyRoutes />
        </BrowserRouter>
      </ListProvider>
    </ThemeProvider>
  );
};

export default App;
