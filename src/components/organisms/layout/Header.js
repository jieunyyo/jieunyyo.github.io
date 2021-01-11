import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import H1 from '../../atoms/text/H1';
import { IconButton } from '../../atoms/button/index';
import { ICON_TYPE } from '../../atoms/button/IconButton';
import MenuBox from './MenuBox';

import logo from '../../../assets/img/img_logo.png'

const StyledHeader = styled.header`
  position: relative;
  padding-top: 36px;
`
const LogoLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 167px;
  height: 40px;
  margin: 36px 0 0 90px;
  padding-top: 13px;
  z-index: 999;
  img {
    width: 100%;
  }
  `
  const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 36px 90px 0 0;
  z-index: 999;
`

const OPEN_INFO = {
  OPEN: {
    text: '메뉴 열기',
    ico: ICON_TYPE.MENU
  },
  CLOSE: {
    text: '메뉴 닫기',
    ico: ICON_TYPE.CLOSE
  },
}

function Header(props) {
  const { ...rest } = props
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  const openInfo = isOpen ? OPEN_INFO.CLOSE : OPEN_INFO.OPEN

  return (
    <StyledHeader {...rest}>
      <LogoLink to="/">
        <H1>
          <img src={logo} alt="Jieunnyo" />
        </H1>
      </LogoLink>

      <StyledIconButton iconType={openInfo.ico} onClick={toggleMenu}>
        { openInfo.text }
      </StyledIconButton>
      
      <MenuBox isOpen={isOpen} />
    </StyledHeader>
  )
}

Header.propTypes = {}

export default Header