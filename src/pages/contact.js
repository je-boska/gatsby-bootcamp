import React from "react"
import Head from "../components/head"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <Head page="Contact" />
      <h1>Contact Me</h1>
      <p>je-boska@example.com</p>
      <p>
        Instagram:{" "}
        <a
          href="http://instagram.com/joneirikboska"
          rel="noreferrer"
          target="_blank"
        >
          @joneirikboska
        </a>{" "}
      </p>
      <p>LinkedIn: @je-boska</p>
    </Layout>
  )
}

export default Contact
