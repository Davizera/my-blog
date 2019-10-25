import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import { graphql } from 'gatsby'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges
  const {currentPage, numPages} = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`
  //eletrica

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
      <Pagination isFirst={isFirst} isLast={isLast} currentPage={currentPage} numPages={numPages} prevPage={prevPage} nextPage={nextPage}/>
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
