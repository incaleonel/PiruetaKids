import * as React from "react";
import Box from "@mui/material/Box";

import "../index.css";
import ShoppingCart from "./ShoppingCart";

export default function BarRight() {
  
  return (
    <Box sx={{ flexGrow: 0 }}>
      <ShoppingCart />
      
        
    </Box>
  );
}
