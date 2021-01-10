import React from 'react'
import styled from 'styled-components'
import { A } from '../../atoms/button';

const StyledFooter = styled.footer`
  padding: 54px 0;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  border-top: 1px solid #ececec;
  .eamil_footer {
    display: block;
    margin-bottom: 20px;
    font-weight: 700;
    color: #222;
  }
`

function Footer(props) {
  const { ...rest } = props
  
  return (
    <StyledFooter {...rest}>
      <A className="eamil_footer" href="mailto:JIEUNYYO@NAVER.COM">
        JIEUNYYO@NAVER.COM
      </A>
      <span>© JIEUNYYO 2020</span>
    </StyledFooter>
  )
}

Footer.propTypes = {}

export default Footer