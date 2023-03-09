import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { CartProvider } from "./context/CarContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
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
      <BrowserRouter>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar color="primary" />
          </ThemeProvider>
          
        
        <Routes>
          <Route path="/Productos" element={<Products />} />
          <Route path="/Quiénes somos" element={<AboutUs />} />
          <Route path="/Contacto" element={<ContactUs />} />
          
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
