import React from 'react'
import PropTypes from 'prop-types'
import Profile from '../Profile'
import * as S from './styled.js'
import GlobaStyles from '../../style/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobaStyles />
      <aside>
        <Profile />
      </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
