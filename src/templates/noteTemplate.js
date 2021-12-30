import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { Typography, Paper } from "@mui/material";

import SEO from "../components/note/SEO";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  useEffect(() => {
    console.log(frontmatter);
  }, []);

  return (
    <div className="blog-post-container">
      <SEO title={frontmatter.title} />
      <Paper
        elevation={5}
        style={{ padding: "2em", backgroundColor: "rgba(245, 245, 245, 0.5)" }}
      >
        <Typography variant="body2">{frontmatter.date}</Typography>

        <Typography
          sx={{
            fontSize: {
              lg: 30,
              md: 30,
              xs: 20,
            },
          }}
          style={{ fontWeight: "900", marginTop: "20px" }}
        >
          {frontmatter.title}
        </Typography>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
