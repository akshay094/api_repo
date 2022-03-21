import React from "react";
import { Box, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const handleButtonClick = () => {};

const BurgerMenuBtn = () => {
  return (
    <Box
      height="2em"
      width="5em"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
        borderRadius: "2em",
      }}
    >
      <Grid container justifyContent="space-between" sx={{ padding: "0.7em" }}>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuIcon onClick={handleButtonClick} />
        </Grid>
        <Grid item>
          <img
            sx={{ width: "8", height: "8", borderRadius: "8" }}
            alt="u"
            src="/static/images/avatar/3.jpg"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BurgerMenuBtn;
