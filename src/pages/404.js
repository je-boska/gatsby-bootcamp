import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/Layout"

const FourOhFour = () => {
  return (
    <Layout>
      <Head page="404" />
      <h2>This is a 404 page. You're looking for a page that isn't there.</h2>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </Layout>
  )
}

export default FourOhFour
