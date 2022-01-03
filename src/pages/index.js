import React, { useEffect, useState } from "react";
import { Typography, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { StaticImage } from "gatsby-plugin-image";
// import { graphql } from "gatsby";
// markup
const IndexPage = (props) => {
  const theme = useTheme();
  const isSmallScreen = !useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Paper
      elevation={5}
      style={{
        padding: "1.5em",
        backgroundColor: "rgba(245, 245, 245, 0.2)",
        marginTop: "10px",
        // marginBottom: "50px",
        overflowY: "auto",
        maxHeight: isSmallScreen ? "calc(65vh - 70px)" : "calc(100vh - 185px)",
        fontFamily:
          "Ubuntu, Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif",
      }}
    >
      <title>Mountain's Space</title>
      <Typography
        variant="h6"
        gutterBottom
        style={{ fontWeight: "700", fontFamily: "inherit" }}
      >
        Hi, this is Mountain's space.
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        style={{ fontFamily: "inherit", lineHeight: "1.8" }}
      >
        Mountain is our lovely westie, who is living in beautiful Bath city in
        England, born in 27th December of 2019. We are lucky to have such a cute
        creature in our life.
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        style={{ fontFamily: "inherit", lineHeight: "1.8" }}
      >
        life is short, which is especially true for a dog. Thus, we decided to
        make this website for Mountain, to record lovely moments we go through.
      </Typography>

      <StaticImage
        src="../images/HomePhoto.png"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Mountain"
        style={{
          marginBottom: `1.45rem`,
          backgroundColor: "rgba(255,255,255,0)",
        }}
      />
    </Paper>
  );
};

export default IndexPage;

// export const pageQuery = graphql`
//   {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 1000
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             slug
//             date(formatString: "MMMM DD, YYYY")
//             icon
//             location
//           }
//         }
//       }
//     }
//   }
// `;
