import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direcion: column;
`
export const ProfileLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transation: color 0.7s;

  &hover {
    color: #1fa1f2;
  }
`
