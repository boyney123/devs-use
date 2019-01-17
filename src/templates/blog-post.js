import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import './blog-post.css'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const { frontmatter } = post
  return (
    <Layout className="blog-post-container">
      <Helmet title={`Devs-Use - ${frontmatter.author}`} />
      <div className="blog-post">
        <h1>{frontmatter.author}</h1>
        <p>{frontmatter.bio}</p>
        <a
          href={`https://www.github.com/${frontmatter.github}`}
          target="_blank"
        >
          <i class="fab fa-github fa-2x" />
        </a>
        <a
          href={`https://www.twitter.com/${frontmatter.twitter}`}
          target="_blank"
        >
          <i class="fab fa-twitter fa-2x" />
        </a>

        {frontmatter.website && (
          <a href={`${frontmatter.website}`} target="_blank">
            <i class="fas fa-globe-europe fa-2x" />
          </a>
        )}

        <hr />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        author
        bio
        github
        twitter
        website
      }
    }
  }
`
