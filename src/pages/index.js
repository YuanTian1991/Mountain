import React, { useEffect, useState } from "react";
// import { graphql } from "gatsby";
// markup
const IndexPage = (props) => {
  return (
    <div>
      <title>Home Page</title>
      <h1>Hello World!</h1>
    </div>
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
