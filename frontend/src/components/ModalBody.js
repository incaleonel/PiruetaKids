import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Select, Grid, Card, CardMedia, CardContent } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import CartContext from "../context/CarContext";
import { articulos } from "../datos/datos";

export default function ModalBody(prop) {
  const [open, setOpen] = React.useState(false);
  const [cant, setCant] = React.useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { amount, setAmount } = React.useContext(CartContext);
  const [article, setArticle] = React.useState("null");
  const handleClickOpen = (e) => {
    setArticle(articulos[e.target.value]);
    setOpen(true);
  };

  const handleClose = () => {
    setAmount(amount + cant);
    setOpen(false);
  };

  const handleChange = (event) => {
    setCant(event.target.value);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} value={prop.value}>
        Agregar al carrito
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <Box sx={{ p: 3, display: "flex" }}>
          <Card sx={{ width: 420 }} elevation>
            <CardMedia
              sx={{ height: 250 }}
              component="img"
              image={article.linkImagen}
              alt={article.infoProducto}
            />
            <CardContent sx={{ height: 70 }}>
              <Typography variant="h6" component="div" align="center">
                {article.infoProducto}
              </Typography>
            </CardContent>
          </Card>
          <Grid container sx={{ m: 2 }}>
            <Grid item md={12}>
              <FormControl sx={{ my: 3 }} size="small" required>
                <FormLabel id="talles" color="secondary">
                  TALLES
                </FormLabel>
                <RadioGroup name="talles" row aria-labelledby="talles">
                  <FormControlLabel
                    value="xl"
                    control={<Radio size="small" />}
                    label="XL"
                  />
                  <FormControlLabel
                    value="s"
                    control={<Radio size="small" />}
                    label="S"
                  />
                  <FormControlLabel
                    value="m"
                    control={<Radio size="small" />}
                    label="M"
                  />
                  <FormControlLabel
                    value="l"
                    control={<Radio size="small" />}
                    label="L"
                  />
                  <FormControlLabel
                    value="xxl"
                    control={<Radio size="small" />}
                    label="XXL"
                  />
                </RadioGroup>
                <FormHelperText>Elige un talle</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={12}>
              <FormControl sx={{ my: 3, width: 200 }} required>
                <InputLabel id="cantidad-de-prendas">Cantidad</InputLabel>
                <Select
                  onChange={handleChange}
                  value={cant}
                  labelId="cantidad-de-prendas"
                  label="Cantidad"
                >
                  <MenuItem value={1}>1 Unidad</MenuItem>
                  <MenuItem value={2}>2 Unidades</MenuItem>
                  <MenuItem value={3}>3 Unidades</MenuItem>
                  <MenuItem value={4}>4 Unidades</MenuItem>
                  <MenuItem value={5}>5 Unidades</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12}>
              <Button variant="outlined" color="primary" onClick={handleClose}>
                Añadir
              </Button>
              <Button variant="outlined" color="primary">
                Comprar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
