import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/Layout"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const {
    allContentfulBlogPost: { edges: posts },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head page="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {posts.map(p => (
          <li key={p.node.id} className={blogStyles.post}>
            <Link to={`/blog/${p.node.slug}`}>
              <h2>{p.node.title}</h2>
              <p>{p.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
