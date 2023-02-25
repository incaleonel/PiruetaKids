import { Grid , Container} from "@mui/material";
import Product from "./Product";
export default function Products () {
    return(
        <Container>
            {}
        <Grid spacing={3} container sx={{ justifyContent:'center', mt:5}}>
          <Grid item md={3}>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
          <Grid item md={3}>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
          <Grid item md={3}>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
          <Grid item md={3}>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
          <Grid item md={3}>
            <Product title="CAMISA DE NIÑO" />
          </Grid>
        </Grid>
      </Container>
    );
}