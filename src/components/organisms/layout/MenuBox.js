import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import styled from 'styled-components';
import { menuList } from '../../../data/global'
import { A, IconButton } from '../../atoms/button';
import { ICON_TYPE } from '../../atoms/button/IconButton';

const StyledMenuBox = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
  height: 960px;
  padding: 0 0 80px 90px;
  background: #f8f9fa;
`
const StyledNav = styled.nav`
  display: block;
  margin: 315px 0 180px 19%;
  li {
    margin-top: 60px;
    &:first-child {
      margin-top: 0;
    }
  }
`
const StyledLink = styled(Link)`
  height: 56px;
  font-size: 80px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.3px;
`
const StyledEmail = styled(A)`
  display: inline-block;
  margin-top: 30px;
  font-size: 18px;
`

function MenuBox(props) {
  const { isOpen } = props
  
  return (
    <StyledMenuBox isOpen={isOpen}>
      <StyledNav>
        <ul>
          {menuList.map(({id, title, url}) => (
            <li key={id}>
              <StyledLink to={url}>{title}</StyledLink>
            </li>
          ))}
        </ul>
      </StyledNav>
      <IconButton iconType={ICON_TYPE.BLOG} href="https://blog.naver.com/j_jieun_" target="_blank">
        블로그
      </IconButton>
      <StyledEmail href="mailto:JIEUNYYO@NAVER.COM">
        JIEUNYYO@NAVER.COM
      </StyledEmail>
    </StyledMenuBox>
  )
}

export default MenuBox