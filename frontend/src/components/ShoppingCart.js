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
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import CounterCart from "./CounterCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges(props) {
  const { reservedClothing, totalAmount, setReservedClothing, setTotalAmount } =
    React.useContext(CartContext);
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
  const deleteArticle = (item) => () => {
    const copy = { ...reservedClothing };
    setTotalAmount(totalAmount - copy[item].amount);
    delete copy[item];
    setReservedClothing(copy);
  };
  const showArticles = () => {
    let components = [];
    for (const article in reservedClothing) {
      components = components.concat([
        <>
          <ListItem
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={deleteArticle(article)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar src={reservedClothing[article].linkImage} />
            </ListItemAvatar>
            <ListItemText primary={reservedClothing[article].infoProduct} />
            <CounterCart
              amount={reservedClothing[article].amount}
              article={article}
            />
          </ListItem>

          <Divider />
        </>,
      ]);
    }
    return components;
  };

  return (
    <>
      <IconButton aria-label="cart" sx={{ m: 2 }} onClick={toggleDrawer(true)}>
        <StyledBadge badgeContent={totalAmount} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        
        
      >
        <Box
          sx={{ width: { md:400} }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <List>{showArticles()}</List>
        </Box>
      </Drawer>
    </>
  );
}
