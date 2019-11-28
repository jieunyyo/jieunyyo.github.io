<template>
  <div class="section_about">
    <div class="inner_middle">
      <p class="text_about">
        Why I love practicing <br/>
        design. Every day.
      </p>
      <RoundLink class="btn_more" name="자세히보기" url="/about" theme="light"/>
      <span class="img_meanless img_diagonal"></span>
    </div>
  </div>
</template>

<script>
import RoundLink from '../common/RoundLink'
export default {
  name: 'IntroAbout',
  components: {
    RoundLink
  }
}
</script>

<style scoped>
  .section_about {
    width: 100%;
    height: 540px;
    padding-top: 175px;
    background: url(../../assets/images/img_diagonal.png) no-repeat top right, linear-gradient(48deg, #e04787, #6e26fa);
  }
  .text_about {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -0.25px;
    text-transform: uppercase;
  }
  .btn_more {
    margin-top: 50px;
  }
  .btn_more:hover {
    color: #222;
  }
</style>