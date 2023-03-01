import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../context/CarContext";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Box,  
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges(props) {
  const { reservedClothing } = React.useContext(CartContext);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };
  
    
   
  return (
    <>
      <IconButton aria-label="cart" sx={{ m: 2 }} onClick={toggleDrawer(true)}>
        <StyledBadge badgeContent={reservedClothing.total} 
        color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {/* debes realizar el resumen del carrito, cantidad y articulos, con opcion de remover*/}
        <Box
          sx={{ width: { xs: 250, sm: 400 } }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
        
         { reservedClothing.allArticles.map( article => 
         <List>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar src= {article.linkImage}/> 
              </ListItemAvatar>
              <ListItemText primary={article.infoProduct}/>
            </ListItem>
            ,
          </List>
         )
          } 
        </Box>
      </Drawer>
    </>
  );
}
