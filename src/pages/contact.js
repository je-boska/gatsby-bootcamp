import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>je-boska@example.com</p>
      <p>
        Instagram:{" "}
        <a href="http://instagram.com/joneirikboska" target="_blank">
          @joneirikboska
        </a>{" "}
      </p>
      <p>LinkedIn: @je-boska</p>
      <Footer />
    </div>
  )
}

export default Contact
