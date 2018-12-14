import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
            integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
            crossorigin="anonymous"
          />
          <html lang="en" />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <header>
          <h1>
            <Link to="/">devs-use</Link>
          </h1>
        </header>
        <section className="hero center">
          <div className="hero__content">
            <h1>devs-use</h1>
            <h3 className="hero__content__subtitle">
              An open source tool to share what tools, software and hardware you
              use.
            </h3>
            <button>
              <a
                href="https://github.com/boyney123/devs-use/blob/master/CONTRIBUTING.md#adding-your-configuration-to-devs-use"
                target="_blank"
              >
                Contribute your setup
              </a>
            </button>
          </div>
        </section>
        <div
          className="content"
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <footer className="nav-footer">
          <span>Built with ❤️ </span>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
