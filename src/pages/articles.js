import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import "../styles/global.css";

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const DescriptionTitle = styled.p`
  text-align: center;
`;

const ItemContainer = styled.div`
  padding: 0.75rem;
  margin-bottom: 0.8rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
`;

const Item = ({ node, tags }) => {
  const date = node.frontmatter.date;
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  let isNew = false;

  if (date > oneMonthAgo) {
    isNew = true;
  }
  return (
    <ItemContainer key={node.id} className="itemContainer">
      <Link
        to={node.fields.slug}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(1 / 4)};
          `}
        >
          {node.frontmatter.title}{" "}
        </h3>
        <p>
          <span
            css={css`
              text-decoration: none;
              font-size: 0.9rem;
            `}
          >
            {node.frontmatter.date}
          </span>
        </p>
        <p>{node.excerpt}</p>
        {
          /*node.frontmatter.tags.map(({category}) =>(
            <span
            css={css`
              text-decoration: none;
              font-size: 0.8rem;
              background: red
            `}
          >
            {category}
          </span>

          ))**/
        }
      </Link>
    </ItemContainer>
  );
};

export default function About({ data }) {
  return (
    <Layout>
      <div>
        <div
          css={css`
            padding: 3rem 0;
          `}
        >
          <PageTitle>Articles</PageTitle>
          <DescriptionTitle>
            Here you can find: Posts, tutorials, productivity and more{" "}
            <span role="img" aria-label="hands up">
              🙌🏼
            </span>
          </DescriptionTitle>
        </div>

        <h4 className="divider">{data.allMarkdownRemark.totalCount} Posts</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Item node={node} />
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { categories: { in: "development" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
