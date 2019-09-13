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

export default Profile
