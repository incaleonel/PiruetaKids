import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import ViewProduct from "./ViewProduct";


function Product(props) {
  return (
    <Card sx={{ maxWidth:280, mx:'auto'}}>
      <CardMedia
        sx={{ height:{xs:120,sm:250}, width:{xs:100,sm:200}, margin:'auto'}}
        component="img"
        image={props.article.linkImage}
        alt={props.article.infoProduct}
      />
      <CardContent sx={{ height: {xs:50,md:70}}}>
        <Typography variant='h5' component="div" align="center" sx={{fontSize:{xs:'1rem', md:'1.5rem'}}}>
          {props.article.price}
        </Typography>
        <Typography variant="h9" component="div" align="center" sx={{fontSize:{xs:'0.8rem', md:'1rem'}}}>
          {props.article.infoProduct}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'center'}}>
        <ViewProduct article={props.article}/>
      </CardActions>
    </Card>
  );
}

export default Product;

