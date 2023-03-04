import * as React from "react";
import {IconButton,ListItemText} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CartContext from "../context/CarContext";

export default function CounterCart(props) {
    const {setReservedClothing, reservedClothing,totalAmount,setTotalAmount} = React.useContext(CartContext)
    const handlerRemove = ()=>{
        if(reservedClothing[props.article].amount > 1){
         setReservedClothing({...reservedClothing, [props.article]:{...reservedClothing[props.article], amount:reservedClothing[props.article].amount - 1}})
        setTotalAmount(totalAmount - 1) 
        }
        
    }
    const handlerAdd = ()=>{
        if(reservedClothing[props.article].amount < 10){
          setReservedClothing({...reservedClothing, [props.article]:{...reservedClothing[props.article], amount:reservedClothing[props.article].amount + 1}})
          setTotalAmount(totalAmount + 1) 
        }
        
    }
  return (
    < >
      <IconButton onClick={handlerRemove}>
        <RemoveIcon />
      </IconButton> 
      <ListItemText primary={reservedClothing[props.article].amount} />
      <IconButton onClick={handlerAdd}>
        <AddIcon />
      </IconButton>
    </>
  );
}
