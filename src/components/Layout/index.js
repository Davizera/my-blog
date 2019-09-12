import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../Sidebar'
import * as S from './styled.js'
import GlobaStyles from '../../style/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobaStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout