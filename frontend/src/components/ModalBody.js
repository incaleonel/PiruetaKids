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
import { Select, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import CartContext from "../context/CarContext";

export default function ModalBody() {
  const [open, setOpen] = React.useState(false);
  const [cant, setCant] = React.useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const {amount, setAmount} = React.useContext(CartContext)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAmount(amount + cant)
    setOpen(false);
  };

  const handleChange = (event) => {
    setCant(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{ mb: 5 }}>
        Agregar al carrito
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box sx={{ p: 3, display: "flex" }}>
          <Box sx={{ maxWidth: 400 }}>
            <img
              src="https://blog.trapitos.com.ar/uploads/2018/07/camisa-de-tela-vertical.jpg"
              width="100%"
              alt="camisa de niño"
            />
          </Box>
          <Grid container sx={{ m: 2 }}>
            <Grid item md={12}>
              <Typography variant="h4" color="initial">
              Camisa de niño
            </Typography>
            </Grid>
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
              <Button variant='outlined' color="primary" onClick={handleClose}>Añadir</Button>
              <Button variant='outlined' color="primary">Comprar</Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
