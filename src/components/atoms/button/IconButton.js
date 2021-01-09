import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

import ico_menu from '../../../assets/img/ico_menu.png'
import ico_close from '../../../assets/img/ico_close.png'
import ico_blog from '../../../assets/img/ico_blog.png'

export const ICON_TYPE = {
  MENU: 'MENU', 
  CLOSE: 'CLOSE', 
  BLOG: 'BLOG', 
}
export const ICON_PATH = {
  MENU: ico_menu,
  CLOSE: ico_close,
  BLOG: ico_blog,
}

const StyledA = styled.a`
  display: block;
  overflow: hidden;
  position: relative;
  width: 40px;
  height: 40px;
  font-size: 1px;
  line-height: 0;
  text-indent: -9999px;
  border: none;
  border-radius: 0;
  background: none;
  .ico_btn {
    display: block;
    width: 40px;
    height: 40px;
    background: url(${props => ICON_PATH[props.iconType]}) center bottom / 40px auto no-repeat;
  }
`

function IconButton(props) {
  const { iconType, href, onClick, children, ...rest} = props

  const onClickButton = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    href ? 
    <StyledA 
      iconType={iconType}
      href={href}
      {...rest}
      >
        <span className="ico_btn">{children}</span>
      </StyledA>
    :
    <StyledA 
      iconType={iconType}
      onClick={onClickButton}
      {...rest}
      >
        <span className="ico_btn">{children}</span>
      </StyledA>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func,
}

IconButton.defaultProps = {
  iconType: ICON_TYPE.MENU
}

export default IconButton