import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { CartProvider } from "./context/CarContext";

import Products from "./components/Products";

const theme = createTheme({
  palette: {
    primary: {
      main: teal["A100"],
      contrastText: "#ff5252",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "white",
    },
  },
});
function App() {
  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider theme={theme}>
        <ResponsiveAppBar color="primary" />
      </ThemeProvider>
      <Products/>
      </CartProvider>
      
      
    </div>
  );
}

export default App;
