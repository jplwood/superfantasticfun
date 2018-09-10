import React from 'react';
import Link from 'gatsby-link';

const Post = ({ node }) => {
  const { featuredImage } = node;
  return (
    <li>
      {featuredImage ? <img src={featuredImage.resolutions.src} /> : '🖕'}
      <Link to={node.slug}>{node.title}</Link>
      <div>{node.body.childMarkdownRemark.excerpt}</div>
    </li>
  );
};

const IndexPage = ({ data }) => (
  <ul>{data.allContentfulPost.edges.map(edge => <Post node={edge.node} />)}</ul>
);

export default IndexPage;

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          createdAt
          updatedAt
          featuredImage {
            resolutions(width: 50, height: 50) {
              src
            }
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
