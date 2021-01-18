import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              id
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {posts.map(p => (
          <li key={p.node.frontmatter.id} className={blogStyles.post}>
            <Link to={`/blog/${p.node.fields.slug}`}>
              <h2>{p.node.frontmatter.title}</h2>
              <p>{p.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
