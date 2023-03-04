import { Grid, Container } from "@mui/material";
import { articulos } from "../datos/datos";
import Product from "./Product";

export default function Products() {
  return (
    <Container sx={{ mb: 5 }}>
      <Grid spacing={2} container sx={{ justifyContent: "center", mt: 5 }}>
        {articulos.map((articulo, index) => {
          return (
            <Grid item md={3}>
              <Product
                title={articulo.infoProduct}
                linkImage={articulo.linkImage}
                info={articulo.infoProduct}
                price={"$" + articulo.price}
                number={index}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
