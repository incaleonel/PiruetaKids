import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import Product from "./components/Product";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

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
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar color="primary" />
      </ThemeProvider>
        <Grid spacing={3} container sx={{ justifyContent:'center', mt:5}}>
          <Grid item>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
          <Grid item>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
          <Grid item>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
          <Grid item>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
          <Grid item>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
        </Grid>
      
    </div>
  );
}

export default App;
