import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import 'normalize.css';

import Header from '../components/Header';
// import './index.css';

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <style jsx>
      {`
      font-family: 'Open Sans', Arial, sans-serif;

      .content {
        margin: 0 auto;
        max-width: 960;
        padding: 0px 1.0875rem 1.45rem;
        paddingTop: 0;
      }
      `}
    </style>
    <Header data={data} siteTitle={data.site.siteMetadata.title} location={location} />
    <div className="content">
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        desc: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Layout;

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
      desc
    }
  }
  background: imageSharp(id: {regex: "/bg.jpeg/"}) {
    sizes(maxWidth: 1240) {
      ...GatsbyImageSharpSizes
    }
  }
}
`;
