import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1> About me</h1>
      <p>
        Hi 👋🏼, I'm Manuela Flores, an Android Developer 💚 and an enthusiastic self-taught from Lima-Perú.
      </p>
      <p>
        Aprendí sobre programación en el 2017, en una comunidad para mujeres llamada Laboratoria 💛,
        actualmente trabajo como Software Enginner en B89. 
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`