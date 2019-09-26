import React from 'react'
import links from './content'
import * as S from './styled'

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenusLinksList>
      {links.map((link, index) => (
        <S.MenuLinksItem key={index}>
          <S.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenusLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
