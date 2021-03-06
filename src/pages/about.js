import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <Head page="About" />
      <h1>About me</h1>
      <p>
        I'm a web developer and music producer, living in Berlin. I enjoy
        biking, coding, playing piano and drums. I don't enjoy learning German.
      </p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default About
