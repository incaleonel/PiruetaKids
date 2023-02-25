import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ModalBody from './ModalBody';
function Product(props) {
    
      return (
        <Card sx={{ maxWidth: 300 ,m:2, display:'flex', flexDirection:'column', alignItems:'center'}}>
          <CardActionArea  >
            <CardMedia
              component="img"
              height="auto"
              image="https://blog.trapitos.com.ar/uploads/2018/07/camisa-de-tela-vertical.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" align='center'>
                {props.title}
              </Typography>
              <Typography gutterBottom variant="h4" component="div" align='center'>
                $2999
              </Typography>
            </CardContent>
          </CardActionArea>
          <ModalBody />
        </Card>
      );
}

export default Product;