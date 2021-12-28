import React, { useState } from "react";
import { Link } from "gatsby";
import { Container, Box, Toolbar, Grid } from "@mui/material";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container maxWidth="xl">
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
                  fontFamily: "Roboto",
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

      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
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
