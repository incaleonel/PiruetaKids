import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import ModalBody from "./ModalBody";

export default function ViewProduct(prop) {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = (e) => {
    setOpen(true);
  };

  return (
    <>
      
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ fontSize: {xs:"0.5rem", md:"0.8rem"}}}
      >
        Agregar al carrito
      </Button>
      <Dialog
        maxWidth="false"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <ModalBody setOpen={setOpen} article={prop.article} />
      </Dialog>
    </>
  );
}
