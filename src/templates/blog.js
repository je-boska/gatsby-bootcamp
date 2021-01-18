import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            fluid(maxWidth: 750) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data: { contentfulBlogPost: post } }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { title } = node.data.target

        return <Img {...node.data.target} alt={title} />
      },
    },
  }
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.publishedDate}</p>
      {renderRichText(post.body, options)}
    </Layout>
  )
}

export default Blog
