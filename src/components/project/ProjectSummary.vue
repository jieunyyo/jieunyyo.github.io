<template>
  <div class="box_summary">
    <div class="inner_middle">
      <div class="group_summary summary_design">
        <strong class="title_summary">디자인 요소</strong>
        <p class="desc_summary">{{ designDesc }}</p>
      </div>
      <div class="group_summary summary_color">
        <strong class="title_summary">COLORS</strong>
        <ul class="list_chip">
          <li>
            <strong class="title_color">Main Color</strong>
            <span class="chip_color" :style="{backgroundColor: colors.main}"></span>
            <span class="code_color">{{ colors.main }}</span>
          </li>
          <li v-for="(subColor, index) in colors.sub" :key="index">
            <strong class="title_color">Sub Color</strong>
            <span class="chip_color" :style="{backgroundColor: subColor}"></span>
            <span class="code_color">{{ subColor }}</span>
          </li>
        </ul>
      </div>
      <div class="group_summary summary_font">
        <strong class="title_summary">FONT</strong>
        <ul>
          <li class="group_font" v-for="(font, index) in fonts" :key="index">
            <strong class="screen_out">{{ font.name }}</strong>
            <img :class="`font${font.id}_project`" :src="require(`@/assets/images/project_${filename}_font${font.id}.png`)" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSummery',
  props: ['designDesc', 'colors', 'fonts', 'filename'],
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .box_summary {
    margin-top: 130px;
    padding: 109px 0 75px;
    background: url('../../assets/images/bg_paper.jpg');
  }
  .group_summary {
    margin-bottom: 120px;
  }
  .group_summary .title_summary {
    display: block;
    margin-bottom: 75px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 0.25px;
  }
  .summary_design {
    margin-bottom: 75px;
  }
  .summary_design .title_summary {
    margin: 0 0 40px -2px;
    font-size: 34px;
    font-weight: 700;
  }
  .group_summary .desc_summary {
    font-size: 18px;
    line-height: 30px;
    color: #666;
    white-space: pre;
  }
  .summary_color .list_chip {
    overflow: hidden;
  }
  .summary_color .list_chip li {
    position: relative;
    float: left;
    margin-right: 131px;
    padding-right: 50px;
  }
  .summary_color .list_chip .chip_color {
    display: block;
    width: 250px;
    height: 250px;
    background: #555;
    border-radius: 50%;
  }
  .summary_color .title_color,
  .summary_color .code_color {
    position: absolute;
    left: 210px;
    font-size: 18px;
    font-weight: 700;
    color: #222;
    letter-spacing: -0.5px;
  }
  .summary_color .title_color {
    top: 100px;
  }
  .summary_color .code_color {
    top: 134px;
  }
  .summary_font ul {
    overflow: hidden;
  }
  .summary_font .group_font {
    float: left;
  }
  .summary_font .group_font:last-child {
    margin-left: 140px;
  }
</style>