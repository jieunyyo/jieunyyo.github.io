import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import CardTitle from '../../atoms/text/CardTitle';
import CardSubTitle from '../../atoms/text/CardSubTitle';
import { THEME } from '../../../data/constant';

const StyledTitle = styled(CardTitle)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 45px 43px;
` 
const StyledSubTitle = styled(CardSubTitle)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 90px 45px;
` 
const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  background: #ccc;
`
const StyledCard = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
  ${StyledTitle}, ${StyledSubTitle} {
    color: ${props => props.theme === THEME.LIGHT ? '#fff' : '#000'};
  }
`

function VisualCard(props) {
  const { 
    title,
    desc,
    to,
    imgPath,
    theme,
    children,
    ...rest
  } = props

  const [realPath, setRealPath] = useState('')

  import(`../../../assets/img${imgPath}`).then(data => {
    setRealPath(data.default);
  });

  return (
    <StyledCard to={to} theme={theme} {...rest}>
      <StyledTitle text={title} />
      <StyledSubTitle text={desc} />
      <StyledImg src={realPath} alt="" />
      { children }
    </StyledCard>
  )
}

// VisualCard.propTypes = {
//   to: PropTypes.string,
// }
// VisualCard.defaultProps = {
//   title: 'this is title',
// }

export default VisualCard