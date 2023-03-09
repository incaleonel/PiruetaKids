import { Grid, Container } from "@mui/material";
import { articulos } from "../datos/datos";
import Product from "./Product";

export default function Products() {
  return (
    <Container sx={{ my: 5 }} maxWidth="lg">
      <Grid spacing={2} container >
        {articulos.map((articulo) => {
          return (
            <Grid key={articulo.article_id} item xs={6} sm={4} md={3} >
              <Product
                article={articulo}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
