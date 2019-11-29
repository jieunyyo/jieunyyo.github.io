<template>
  <div>
    <SectionTitle class="title_section" title="About Me" description="안녕하세요. 흔한 지은이 입니다." />
    <AboutVisual />
    <div class="section_about inner_middle">
      <strong class="box_title">
        디자인은 소소한 일상을<br />
        양질의 순간으로 바꿔주는<br />
        매개체라고 생각합니다.
      </strong>
      <div class="box_text">
        <p>
          수많은 밤을 지새웠습니다. 그럼에도 불구하고 멈추지 않았던 이유가 있습니다.
          제가 본 웹사이트들은 저로 하여금 디자인에 대해 더 많은 열정과 호기심을 가질 수 있도록
          동기부여를 해 주었습니다. 새로운 것을 만들어내기 위해 몰두하고, 그것을 현실화 하는 과정은
          늘 짜릿한 일이며 지금까지 겪어온 것 중 가장 믿을 수 없는 경험 중 하나입니다.
        </p>
        <p>
          어린시절 그림판으로 꽃을 그려나가던 희미한 옛 기억처럼 머릿속의 팔레트를 화면으로
          옮겨내는 것은 여전히 마법을 보는 듯 설렙니다. 그리고 그 설렘과 항상 함께하고 싶은 마음이
          제가 디자인을 사랑할 수 있는 이유 중 하나겠지요.
        </p>
        <p>
          이번 디자인여행에서 프로젝트 진행이 바로 저에겐 설렘과 함께하는 순간이었습니다.
          보다 더 발전해나가며 끊임없이 해결책을 찾는 일련의 과정들은 즐거운 싸움이었습니다.
          저에게는 그러한 도전들이 깊어가는 불면의 밤에서 멈추지 않고 일할 수 있는 원동력으로
          자리했습니다. 그리고 나는 그 모든 순간을 사랑합니다.  I ♡ design
        </p>
        <RoundLink class="btn_more" name="이력서보기" url="jieunResume.pdf" target="_blank"/>
      </div>
    </div>
    <div class="section_summary inner_middle">
      <AboutSummary class="box_work" :title="`Work\nExperience`" :list="['2014-2015\n복사기 화면 ui 디자인,유지 보수관리\n신도리코','2017-2019\n반응형 웹 디자인,유지 보수관리\n헬로웹']" />
      <AboutSummary class="box_skills" :title="`Software\nSkills`" :list="['Adobe Photoshop','Adobe Illustrator','HTML / CSS']" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '../components/common/SectionTitle'
import AboutVisual from '../components/about/AboutVisual'
import AboutSummary from '../components/about/AboutSummary'
import RoundLink from '../components/common/RoundLink'

export default {
  name: 'About',
  components: {
    SectionTitle,
    AboutVisual,
    AboutSummary,
    RoundLink
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>

<style scoped>
  .title_section {
    margin: 50px 0 78px;
  }
  .section_about {
    overflow: hidden;
    padding: 70px 0 100px;
  }
  .box_title {
    float: left;
    width: 570px;
    font-size: 34px;
    font-weight: 700;
    color: #000;
    line-height: 1.7;
  }
  .box_text {
    float: left;
    width: 630px;
  }
  .box_text p {
    margin: 0 0 30px;
    font-size: 16px;
    color: #666;
    line-height: 30px;
  }
  .btn_more {
    margin-top: 25px
  }
    .btn_more:hover {
    margin-top: 25px;
    background-color: #222;
    color: #fff;
  }
  .section_summary {
    margin-bottom: 90px;
    padding-top: 70px;
    border-top: 2px solid #222;
  }
  .box_work {
    margin-right: 180px;
  }
</style>