import React from 'react'
import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="yellow" color="black">
        JS
      </S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          11 de Outubro de 2019 • 4 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>Por que criar um blog?</S.PostItemTitle>
        <S.PostItemDescription>
          Algumas razões para você ter sua própria plataforma ao invés de
          soluções como o Medium.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
