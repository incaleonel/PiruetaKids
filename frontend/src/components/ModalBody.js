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
  const { reservedClothing, setReservedClothing, totalAmount, setTotalAmount } =
    React.useContext(CartContext);
  const [article, setArticle] = React.useState({});
  const talles = ["s", "m", "l", "xl"];
  const handleClickOpen = (e) => {
    setArticle(articulos[e.target.value]);
    setOpen(true);
  };

  const handleClose = () => {
    
    
    if (cant) {
      if (reservedClothing) {
        setReservedClothing({
          ...reservedClothing,
          [article.article_id]:{...article, amount:article.article_id in reservedClothing ? cant + reservedClothing[article.article_id].amount : cant}
        });
      } else {
        setReservedClothing({
          [article.article_id]:{...article, amount: cant}
        });
        
      }
      setTotalAmount(totalAmount + cant);
      setCant(0);
    }
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
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Card sx={{ width: { md: 420 } }} elevation>
            <CardMedia
              sx={{ height: 250 }}
              component="img"
              image={article.linkImage}
              alt={article.infoProduct}
            />
            <CardContent sx={{ height: 70 }}>
              <Typography variant="h6" component="div" align="center">
                {article.infoProduct}
              </Typography>
            </CardContent>
          </Card>
          <Grid container sx={{ m: 2 }}>
            <Grid item xs={12}>
              <FormControl sx={{ my: 3 }} size="small" required>
                <FormLabel id="talles" color="secondary">
                  TALLES
                </FormLabel>
                <RadioGroup name="talles" row aria-labelledby="talles">
                  {talles.map((talle) => (
                    <FormControlLabel
                      value={talle}
                      control={<Radio size="small" />}
                      label={talle.toUpperCase()}
                    />
                  ))}
                </RadioGroup>
                <FormHelperText>Elige un talle</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ my: 3, width: 200 }} required>
                <InputLabel id="cantidad-de-prendas">Cantidad</InputLabel>
                <Select
                  onChange={handleChange}
                  labelId="cantidad-de-prendas"
                  label="Cantidad"
                  fullWidth
                >
                  <MenuItem value={1}>1 Unidad</MenuItem>
                  {[2, 3, 4, 5].map((element) => (
                    <MenuItem value={element}>{element} Unidades</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
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
