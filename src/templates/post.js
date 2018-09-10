import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    const { title, body } = this.props.data.contentfulPost;

    return (
      <div>
        <h1>{title}</h1>
        <main
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
