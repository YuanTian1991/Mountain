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
} from "@mui/material";

import "./index.css";

import Footer from "../components/layout/footer";
import TimeLine from "../components/TimeLine";

const Layout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = !useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    console.log("Reload");
  }, []);

  return (
    <Container maxWidth="lg">
      <Box my={1}>
        <Toolbar>
          <Grid container spacing="1" alignItems="center">
            <Grid item>
              {" "}
              <Link
                to="/"
                style={{
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
                  style={{ fontWeight: 500 }}
                >
                  Mountain the Westie
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <div></div>
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
          style={{
            // height: isSmallScreen ? "calc(65vh - 64px)" : "calc(100vh - 128px)",
            overflowY: "auto",
          }}
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

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/notes/The-Two-Year-Birthday">Test</Link>
      </li>
    </ul>
  );
};
