import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPost = () => {
  const query = useStaticQuery(graphql`
    query Post($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)

  const post = query.markdownRemark

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

// export const query = graphql`
//   query Post($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//       }
//       html
//     }
//   }
// `

export default BlogPost
