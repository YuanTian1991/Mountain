import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { Typography, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import SEO from "../components/note/SEO";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const theme = useTheme();
  const isSmallScreen = !useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    console.log(frontmatter);
  }, []);

  return (
    <div className="blog-post-container">
      <SEO title={frontmatter.title} />
      <Paper
        elevation={5}
        style={{
          padding: "1.5em",
          backgroundColor: "rgba(245, 245, 245, 0.2)",
          marginTop: "10px",
          // marginBottom: "50px",
          overflowY: "auto",
          maxHeight: isSmallScreen
            ? "calc(65vh - 70px)"
            : "calc(100vh - 165px)",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: 30,
              md: 30,
              xs: 20,
            },
          }}
          style={{
            fontWeight: "700",
            marginBottom: "10px",
            fontFamily:
              "Ubuntu, Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif",
          }}
        >
          {frontmatter.title}
        </Typography>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Typography variant="body2" style={{ float: "right" }}>
          {frontmatter.date}
          {frontmatter.location !== "" && (
            <> {" in " + frontmatter.location} </>
          )}
        </Typography>
      </Paper>
    </div>
  );
}
export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        icon
        location
      }
    }
  }
`;
