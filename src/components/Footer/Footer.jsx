import React from "react";
import { styled, Grid, Box } from "@mui/material";
import AAPILogo from "../Header/AAPILogo";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { about } from "../../constants/about";
import LinkList from "../utility/listComponent/LinkList";

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerWrapper>
        <FooterUpper>
          <AAPILogo height={50} width={80} />
          <Grid container justifyContent="flex-end">
            <Grid item sx={{ paddingLeft: "8px" }}>
              <FacebookIcon />
            </Grid>
            <Grid item sx={{ paddingLeft: "8px" }}>
              <TwitterIcon />
            </Grid>
            <Grid item sx={{ paddingLeft: "8px" }}>
              <LinkedInIcon />
            </Grid>
            <Grid item sx={{ paddingLeft: "8px" }}>
              <InstagramIcon />
            </Grid>
          </Grid>
        </FooterUpper>

        <Box sx={{ height: "60%", width: "100%" }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={3} sx={{ paddingRight: "2em" }}>
              <LinkList heading="AAPI USA" listItems={about} />
            </Grid>

            <Grid item xs={12} md={3} sx={{ paddingRight: "2em" }}>
              <LinkList
                heading="Community"
                listItems={["Networks", "Chat", "Events", "Region", "Director"]}
              />
            </Grid>

            <Grid item xs={12} md={3} sx={{ paddingRight: "2em" }}>
              <LinkList
                heading="AAPI"
                listItems={[
                  "Education",
                  "Benefits",
                  "Projects",
                  "Newsletters",
                  "Journals",
                ]}
              />
            </Grid>

            <Grid item xs={12} md={3} sx={{ paddingRight: "2em" }}>
              <LinkList
                heading="About"
                listItems={["About", "Bylaws", "Careers", "Member", "Contact"]}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ height: "10%", width: "100%" }}>
          <Grid></Grid>
        </Box>
      </InnerWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled("div")({
  backgroundColor: "darkblue",
  color: "white",
  width: "100%",
  height: "25em",
  position: "absolute",
  bottom: 0,
});

const InnerWrapper = styled("div")({
  height: "100%",
  width: "80%",
  margin: "auto",
});

const FooterUpper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "30%",
  borderBottom: "1px solid white",
});

export default Footer;
