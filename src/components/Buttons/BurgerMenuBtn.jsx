import React from "react";
import { Box, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import {
  showPopupMenu,
  hidePopupMenu,
} from "../../redux/actions/toggleMenuAction";

const BurgerMenuBtn = () => {
  const showMenu = useSelector((state) => state.showPopup.showMenu);
  const dispatch = useDispatch();

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
          <MenuIcon
            onClick={() => {
              if (showMenu) {
                dispatch(hidePopupMenu());
                return;
              }
              dispatch(showPopupMenu());
            }}
          />
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
