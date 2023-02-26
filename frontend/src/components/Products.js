import { Grid, Container } from "@mui/material";
import { articulos } from "../datos/datos";
import Product from "./Product";

export default function Products() {
  return (
    <Container>
      <Grid spacing={2} container sx={{ justifyContent: "center", mt: 5 }}>
     
        { articulos.map((articulo)=>{
        return(<Grid item md={3}>
           <Product 
           title={articulo.infoProducto} 
           linkImage={articulo.linkImagen}
           info={articulo.infoProducto}
           precio={"$" + articulo.precio}/>
         </Grid>);
        })}
      </Grid>
    </Container>
  );
}
