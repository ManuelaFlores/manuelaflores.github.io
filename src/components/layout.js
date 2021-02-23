import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div
        css={css`
          margin: 0 auto;
          max-width: 60%;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        {children}
      </div>
    </div>
  )
}
