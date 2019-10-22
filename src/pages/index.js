import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                category
                background
                color
              }
              timeToRead
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            timeToRead,
            fields: { slug },
            frontmatter: {
              background,
              category,
              date,
              description,
              title,
              color,
            },
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            color={color}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
