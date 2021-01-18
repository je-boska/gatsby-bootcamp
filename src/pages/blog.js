import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

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
      <ol>
        {posts.map(p => (
          <li key={p.node.frontmatter.id}>
            <Link to={`/blog/${p.node.fields.slug}`}>
              <h2>{p.node.frontmatter.title}</h2>
            </Link>
            <p>{p.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
