import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../context/CarContext";
import { Popover } from "@mui/material";
import CartContent from "./CartContent";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges(props) {
  const { amount } = React.useContext(CartContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handlerClick = (event) =>{
    setAnchorElUser(event.currentTarget);
  }
  const handlerClose = () => {
    setAnchorElUser(null);
  }
  const open = Boolean(anchorElUser);
  return (
    <>
      <IconButton aria-label="cart" sx={{ m: 2 }} onClick={handlerClick}>
        <StyledBadge badgeContent={amount} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorElUser}
        onClose={handlerClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right', 
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
          {/* debes realizar el resumen del carrito, cantidad y articulos, con opcion de remover*/}
        <CartContent/>
      </Popover>
    </>
  );
}
