import React, { useEffect } from "react";
import { graphql } from "gatsby";

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
      <h2>{frontmatter.title}</h2>
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
