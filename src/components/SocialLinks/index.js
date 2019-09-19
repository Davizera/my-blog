import React from 'react'
import * as S from './styled'
import Icons from './Icons'
import links from './contents'

/*
 *  Index its used beacause react need a key to make difference between
 *  elements (thats is necessary when we use map method)
 */

const SocialLinks = () => (
  <S.SocialLinkWrapper>
    <S.SocialLinksList>
      {links.map((link, index) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={index}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            />
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinkWrapper>
)

export default SocialLinks
