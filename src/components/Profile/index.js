import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'
import * as S from './styled'
// import { StaticQuery, graphql } from "gatsby"

/**
 * This is another way that we're using useStaticQuery instead of StaticQuery, useStaticQuery is a react compenent and using it we are able to separate the data 'request' from the rendering part
 */
const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          position
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.ProfileAuthor>
        {title}
        <S.ProfilePosition> {position} </S.ProfilePosition>
      </S.ProfileAuthor>
      <S.ProfileDescription> {description} </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

/**
 * here we're using the desctructuring assignment to render our profile componet
 */
// const Profile = () => (
//   <StaticQuery
// query={graphql`
//   query MySiteMetadata {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//         position
//       }
//     }
//   }
// `}
//     render={({
//       site: {
//         siteMetadata: { title, author, description, position },
//       },
//     }) => (
//   <div className="Profile-wrapper">
//     <h1>{author}</h1>
//     <h2>{title}</h2>
//     <h2> Um cara que faz programas de compiuter </h2>
//     <h2> {position} </h2>
//     <p> {description} </p>
//   </div>
//     )}
//   />
// )

/**
 * this way we're use static query to fetch data from graphql and render 'dinamically' without using desctructuring assignment
 */
// const Profile = () => (
//     <StaticQuery
//         query=
//         {graphql
//             `query MySiteMetadata {
//                 site{
//                     siteMetadata {
//                         title
//                         description
//                         author
//                         position
//                     }
//                 }
//             }`
//         }
//         render={data => (
//             <div className="Profile-wrapper" >
//                 <h1>{data.site.siteMetadata.author}</h1>
//                 <h2> {data.site.siteMetadata.position} </h2>
//                 <h2> Um cara que faz programas de compiuter </h2>
//                 <p> {data.site.siteMetadata.description} </p>
//             </div>
//         )}
//     />
// )

export default Profile
