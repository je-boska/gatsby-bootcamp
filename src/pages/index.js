import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import "../styles/index.scss"
import Head from "../components/head"

const indexPage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <div>
        <h1>Hello.</h1>
        <h2>
          I'm Jon Eirik, a full-stack developer living in beautiful Berlin.
        </h2>
        <p>
          Need a developer? <Link to="/contact">Contact Me</Link>
        </p>
      </div>
    </Layout>
  )
}

export default indexPage
