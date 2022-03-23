import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const LinkList = ({ heading, listItems }) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography sx={{ py: "1em" }} variant="subtitle1">
          {heading}
        </Typography>
      </Box>

      {typeof listItems == "string" && (
        <Box>
          <Typography sx={{ color: "#768C9D" }} variant="subtitle2">
            {listItems}
          </Typography>
        </Box>
      )}

      <Box>
        {Array.isArray(listItems) &&
          listItems.map((listItem, index) => {
            return (
              <Typography
                key={index}
                sx={{ py: "0.2em", textDecoration: "none" }}
                variant="subtitle2"
              >
                <Link
                  to={`/${listItem.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "#768C9D" }}
                >
                  {listItem}
                </Link>
              </Typography>
            );
          })}
      </Box>
    </>
  );
};

export default LinkList;
