import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardMedia, CardContent } from "@mui/material";
import FormModal from "./FormModal";

export default function ModalBody(prop) {
  
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: { xs: 300, md: 500 }, boxShadow: "none" }}>
        <CardMedia
          sx={{ maxWidth: { xs: 290, md: 400 }, margin: "auto" }}
          component="img"
          image={prop.article.linkImage}
          alt={prop.article.infoProduct}
        />
        <CardContent sx={{ height: 20 }}>
          <Typography variant="h7" component="div" align="center">
            {prop.article.infoProduct}
          </Typography>
        </CardContent>
      </Card>
      <FormModal setOpen={prop.setOpen} article={prop.article}/>
    </Box>
  );
}
