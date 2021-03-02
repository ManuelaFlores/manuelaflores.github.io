import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import "../styles/global.css";

const NavContainer = styled.div`
  background-color: rgb(221, 221, 210);
  font-style: normal;
  padding: 0.8rem 0;
`;

const Brand = styled.h3`
  display: inline-block;
  font-style: normal;
  margin-bottom: 0px;
`;

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
  );
  return (
    <NavContainer>
      <div
        css={css`
          max-width: 1100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-left: auto;
          margin-right: auto;
          flex-wrap: wrap;
        `}
      >
        <Link to={`/`}>
          <Brand className="brand">{data.site.siteMetadata.title}</Brand>
        </Link>
        <div
          css={css`
            padding: 0.75rem 1.25rem;
            display: flex;
            flex-wrap: wrap;
          `}
        >
          <Link to={`/aboutMe/`} className="nav">
            About
          </Link>
          <Link to={`/articles/`} className="nav">
            Articles
          </Link>
          <Link to={`/contact/`} className="nav">
            Contact
          </Link>
        </div>
      </div>
    </NavContainer>
  );
}
