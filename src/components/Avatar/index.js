import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled.js'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.AvataWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar
