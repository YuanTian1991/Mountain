import React, { useState } from "react";
import { Link } from "gatsby";
import { Container, Box, Toolbar, Grid } from "@mui/material";
import { Helmet } from "react-helmet";

import TimeLine from "../components/TimeLine";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
                Mountain
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
          id="container1"
          style={{
            maxHeight: "90vh",
            // overflowY: "scroll",
            // "&::-webkit-scrollbar": {
            //   display: "none",
            //   width: "0px",
            //   background: "transparent",
            // },
          }}
        >
          <div id="container2">
            <TimeLine />
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <Container>
            <main>{children}</main>
          </Container>
        </Grid>
      </Grid>

      {/* <Copyright /> */}
      {/* <StickyFooter /> */}
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
