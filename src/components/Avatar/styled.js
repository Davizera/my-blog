import Img from 'gatsby-image'
import styled from 'styled-components'
import media from 'styled-media-query'

export const AvataWrapper = styled(Img)`
  border-radius: 50%;
  margin: auto;
  height: 6.85rem;
  width: 6.85rem;

  ${media.lessThan('large')`
    width:1.875rem;
    height:1.875rem;
  `}
`
