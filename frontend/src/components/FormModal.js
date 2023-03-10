import * as React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Select, Grid, MenuItem, InputLabel } from "@mui/material";
import CartContext from "../context/CarContext";

export default function FormModal(prop) {
  const talles = ["s", "m", "l", "xl"];
  const [valueRadio, setValueRadio] = React.useState("");
  const [valueMenuItem, setValueMenuItem] = React.useState("");
  const [errorRadio, setErrorRadio] = React.useState(false);
  const [errorMenuItem, setErrorMenuItem] = React.useState(false);
  const [helperTextRadio, setHelperTextRadio] = React.useState(
    "Seleccione un talle"
  );
  const [helperTextMenu, setHelperTextMenu] = React.useState(
    "Elige el numero de prendas"
  );

  const { reservedClothing, setReservedClothing, totalAmount, setTotalAmount } =
    React.useContext(CartContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (valueRadio === "") {
      setHelperTextRadio("Por favor, seleccione un talle");
      setErrorRadio(true);
    } else if (valueMenuItem === "") {
      setHelperTextMenu("Por favor, seleccione el numero de prendas");
      setErrorMenuItem(true);
    } else {
      const article = prop.article;

      if (reservedClothing) {
        setReservedClothing({
          ...reservedClothing,
          [article.article_id]: {
            ...article,
            amount:
              article.article_id in reservedClothing
                ? valueMenuItem + reservedClothing[article.article_id].amount
                : valueMenuItem,
            size: valueRadio,
          },
        });
        setTotalAmount(totalAmount + valueMenuItem);
      } else {
        setReservedClothing({
          [article.article_id]: {
            ...article,
            amount: valueMenuItem,
            size: valueRadio,
          },
        });
        setTotalAmount(valueMenuItem);
      }
      prop.setOpen(false);
    }
  };
  const handleRadioChange = (event) => {
    setValueRadio(event.target.value);
    setHelperTextRadio("");
    setErrorRadio(false);
  };
  const handleMenuItemChange = (event) => {
    setValueMenuItem(event.target.value);
    setHelperTextMenu("");
    setErrorMenuItem(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        sx={{ my: { xs: 1, md: 5 }, mx: 3, maxWidth: { xs: 190, md: 290 } }}
        align="center"
      >
        <Grid item xs={12}>
          <FormControl sx={{ my: 3 }} size="small" error={errorRadio}>
            <FormLabel id="talles" color="secondary">
              TALLES
            </FormLabel>
            <RadioGroup
              name="talles"
              row
              aria-labelledby="talles"
              align="center"
              value={valueRadio}
              onChange={handleRadioChange}
            >
              {talles.map((talle) => (
                <FormControlLabel
                  key={talle}
                  labelPlacement="bottom"
                  value={talle}
                  control={<Radio size="small" />}
                  label={talle.toUpperCase()}
                />
              ))}
            </RadioGroup>
            <FormHelperText>{helperTextRadio}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            sx={{ my: 3, width: 200 }}
            size="small"
            error={errorMenuItem}
          >
            <InputLabel id="cantidad-de-prendas">Cantidad</InputLabel>
            <Select
              labelId="cantidad-de-prendas"
              label="Cantidad"
              fullWidth
              name="Cantidad"
              value={valueMenuItem}
              onChange={handleMenuItemChange}
            >
              <MenuItem value={1}>1 Unidad</MenuItem>
              {[2, 3, 4, 5].map((element) => (
                <MenuItem key={element} value={element}>
                  {element} Unidades
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{helperTextMenu}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={6} align="center">
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem" } }}
            >
              Añadir
            </Button>
          </Grid>
          <Grid item xs={6} align="center">
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem" } }}
            >
              Comprar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
