import {RouterProvider} from "react-router-dom"
import { ThemeProvider } from "styled-components";

import test123 from "./routes/route";
import theme from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={test123} />
    </ThemeProvider>
  );

  /*
    v5
    원래 이렇게 되는데 저게 더 편하지?
    <Routes>
      <Route path="/" eleent={<div>Hello, word!</div>} />
      <Route />
    </Routes>
  */
}

export default App;
