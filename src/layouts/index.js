import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "gatsby";
import {
  Container,
  Box,
  Toolbar,
  Grid,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";

import "./index.css";

import Footer from "../components/layout/footer";
import TimeLine from "../components/TimeLine";
import { fontFamily } from "@mui/system";

const Layout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = !useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    console.log("Reload");
  }, []);

  return (
    <Container maxWidth="lg">
      <Box my={1}>
        <Toolbar variant="dense">
          <div>{/* <Button>Link</Button> */}</div>
          <Link
            to="/"
            style={{
              flexGrow: 1,
              textAlign: "center",
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              "&:hover ": {
                color: "black",
                textDecoration: "none",
              },
            }}
          >
            <Typography
              variant="h6"
              component="span"
              style={{
                fontWeight: 500,
                fontFamily:
                  "Ubuntu, Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif",
              }}
            >
              Mountain the Westie
            </Typography>
          </Link>

          <div>{/* <Button>Link</Button> */}</div>
        </Toolbar>
      </Box>

      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={3}
          id="parentDiv"
          style={{
            height: isSmallScreen ? "calc(35vh - 64px)" : "calc(100vh - 128px)",
          }}
        >
          <div id="childDiv">
            <TimeLine />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          style={
            {
              // height: isSmallScreen ? "calc(65vh - 64px)" : "calc(100vh - 128px)",
            }
          }
        >
          <Container>
            <main>{children}</main>
          </Container>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default Layout;
