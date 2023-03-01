import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import ModalBody from "./ModalBody";

function Product(props) {
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        sx={{ height:250}}
        component="img"
        image={props.linkImage}
        alt={props.info}
      />
      <CardContent sx={{ height: 70}}>
        <Typography variant="h5" component="div" align="center">
          {props.price}
        </Typography>
        <Typography variant="h9" component="div" align="center">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'center'}}>
        <ModalBody value={props.number}/>
      </CardActions>
    </Card>
  );
}

export default Product;

