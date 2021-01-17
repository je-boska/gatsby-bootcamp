import { Link } from "gatsby"
import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const About = () => {
  return (
    <div>
      <Header />
      <h1>About me</h1>
      <p>
        I'm a web developer and music producer, living in Berlin. I enjoy
        biking, coding, playing piano and drums. I don't enjoy learning German.
      </p>
      <Link to="/contact">Contact Me</Link>
      <Footer />
    </div>
  )
}

export default About
