import * as React from "react";
import Button from "@mui/material/Button";
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

export default function ModalBody(prop) {
  const [cant, setCant] = React.useState(0);

  const { reservedClothing, setReservedClothing, totalAmount, setTotalAmount } =
    React.useContext(CartContext);
  const talles = ["s", "m", "l", "xl"];

  const handleClose = () => {
    if (cant) {
      if (reservedClothing) {
        setReservedClothing({
          ...reservedClothing,
          [prop.article.article_id]: {
            ...prop.article,
            amount:
              prop.article.article_id in reservedClothing
                ? cant + reservedClothing[prop.article.article_id].amount
                : cant,
          },
        });
      } else {
        setReservedClothing({
          [prop.article.article_id]: { ...prop.article, amount: cant },
        });
      }
      setTotalAmount(totalAmount + cant);
      setCant(0);
    }
    prop.setOpen(false);
  };

  const handleChange = (event) => {
    setCant(event.target.value);
  };

  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems:'center'
      }}
    >
      <Card sx={{ maxWidth: { xs:300, md: 500 }, boxShadow: "none" }}>
        <CardMedia
          sx={{ maxWidth:{xs:290,md:400}, margin:'auto'}}
          component="img"
          image={prop.article.linkImage}
          alt={prop.article.infoProduct}
        />
        <CardContent sx={{ height: 20 }}>
          <Typography variant="h7" component="div" align="center">
            {prop.article.infoProduct}
          </Typography>
        </CardContent>
      </Card>
      <Grid container sx={{ my: {xs:1,md:5}, mx:3 ,maxWidth:{xs:190 , md:290}}} align="center">
        <Grid item xs={12}>
          <FormControl sx={{ my: 3 }} size="small" required >
            <FormLabel id="talles" color="secondary">
              TALLES
            </FormLabel>
            <RadioGroup name="talles" row aria-labelledby="talles" align="center">
              {talles.map((talle) => (
                <FormControlLabel
                  key={talle}
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
          <FormControl sx={{ my: 3, width: 200 }} required size="small">
            <InputLabel id="cantidad-de-prendas">Cantidad</InputLabel>
            <Select
              onChange={handleChange}
              labelId="cantidad-de-prendas"
              label="Cantidad"
              fullWidth
            >
              <MenuItem value={1}>1 Unidad</MenuItem>
              {[2, 3, 4, 5].map((element) => (
                <MenuItem key={element} value={element}>
                  {element} Unidades
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={12} spacing={1} >
          <Grid item xs={6} align='center'>
            <Button variant="outlined" color="primary" onClick={handleClose} sx={{ fontSize: {xs:"0.5rem", sm:"0.8rem"}}}>
              Añadir
            </Button>
          </Grid>
          <Grid item xs={6} align='center'>
            <Button variant="outlined" color="primary" sx={{ fontSize: {xs:"0.5rem", sm:"0.8rem"}}}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
