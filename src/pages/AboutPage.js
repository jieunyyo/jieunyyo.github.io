import AboutTemplate from '../components/templates/AboutTemplate'
import Header from '../components/organisms/layout/Header'
import Footer from '../components/organisms/layout/Footer'
import LargeBasicText from '../components/atoms/text/LargeBasicText'
import BasicParagraph from '../components/atoms/text/BasicParagraph'
import PageTitle from '../components/atoms/text/PageTitle'
import styled from 'styled-components'
import video from '../assets/img/video_about.mp4'
import { useEffect } from 'react'

const StyledLargeText = styled(LargeBasicText)`
  display: block;
  margin: 32px 0 40px;
`
const StyledVideo = styled.video`
  display: block;
  width: 100%;
  min-width: 1920px;
`

function AboutPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const Media = () => <StyledVideo src={video} type="video/mp4" loop autoPlay muted />

  return (
    <AboutTemplate
      header={Header}
      footer={Footer}
      media={Media}>
      <PageTitle>ABOUT</PageTitle>
      <StyledLargeText>
        디자인은 소소한 일상을 양질의 순간으로 <br/>
        바꿔주는 매개체라고 생각합니다.
      </StyledLargeText>
      <BasicParagraph>
        수많은 밤을 지새웠습니다. 그럼에도 불구하고 멈추지 않았던 이유가 있습니다. <br/>
        제가 본 웹사이트들은 디자인에 대해  더 많은 열정과 호기심을
        가질 수 있도록 동기부여를 해줬습니다. 새로운 것을 만들어내기 위해 몰두하고,<br/> 현실화 하는 과정은 늘 짜릿한 일이며 가장 믿을 수 없는 경험 중 하나입니다.<br/>
        <br/>
        어린시절 그림판으로 꽃을 그려나가던 희미한 옛 기억처럼 머릿속의 팔레트를 화면으로 옮겨내는 것은 여전히 마법을 보는 듯 설렙니다. <br/>
        그 설렘과 항상 함께하고 싶은 마음이 제가 디자인을 사랑할 수 있는 이유 중 하나입니다.<br/>
        <br/>
        디자인여행에서 프로젝트 진행이 바로 저에겐 설렘과 함께하는 순간이었습니다. 보다 더 발전해나가며 끊임없이 해결책을 <br/>
        찾는 일련의 과정들은 즐거운 싸움이었으며, 멈추지 않고 일할 수 있는 원동력으로 자리했습니다. I ♡ design<br/>
      </BasicParagraph>
    </AboutTemplate>
  )
}

export default AboutPage