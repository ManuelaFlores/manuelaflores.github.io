import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import "../styles/global.css"

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin-bottom: ${rhythm(2)};
        width: 100%;
        background-color: rgb(221, 221, 210);
        font-style: normal;
        padding: 0.5rem 0;
      `}
    >
      <div
        css={css`
          max-width: 1100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              display: inline-block;
              font-style: normal;
              margin-bottom: 0px;
              padding: 0.75rem 1.25rem;
            `}
            className="brand"
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <div
          css={css`
            padding: 0.75rem 1.25rem;
            justify-content: space-between;
          `}
        >
          <Link
            to={`/aboutMe/`}
            css={css`
              padding: 0.75rem 1.25rem;
            `}
            className="nav"
          >
            About
          </Link>
          <Link
            to={`/articles/`}
            css={css`
              padding: 0.75rem 1.25rem;
            `}
            className="nav"
          >
            Articles
          </Link>
          <Link
            to={`/contact/`}
            css={css`
              padding: 0.75rem 1.25rem;
            `}
            className="nav"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
