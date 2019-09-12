import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled.js'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.AvataWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
