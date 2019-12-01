<template>
  <div class="box_summary">
    <div class="inner_middle">
      <div v-if="designDesc" class="group_summary summary_design">
        <strong class="title_summary">디자인 요소</strong>
        <p class="desc_summary">{{ designDesc }}</p>
      </div>
      <div v-if="colors" class="group_summary summary_color">
        <strong class="title_summary">COLORS</strong>
        <ul class="desc_summary list_chip">
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
      <div v-if="fonts" class="group_summary summary_font">
        <strong class="title_summary">FONT</strong>
        <ul class="desc_summary">
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
  name: 'ProjectSummary',
  props: ['designDesc', 'colors', 'fonts', 'filename'],
  data() {
    return {
    }
  },
  methods: {
    handleScroll() {
      let timer;
      const $box = document.querySelector('.box_summary')
      const trigger = $box.offsetTop - 400
      if (!timer) {
        timer = setTimeout(function() {
          timer = null;
          if (window.pageYOffset < trigger - 500) {
            $box.classList.add('down')
          }
          if (window.pageYOffset > trigger) {
            $box.classList.remove('down')
          }
        }, 100);
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll, false)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  .box_summary {
    padding: 109px 0 75px;
    background: url('../../assets/images/bg_paper.jpg');
  }
  .box_summary.down .title_summary {
    padding-top: 30px;
  }
  .box_summary.down .desc_summary {
    padding-top: 50px;
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
    transition: padding 0.5s;
  }
  .group_summary .desc_summary {
    transition: padding 0.7s;
  }
  .summary_design {
    margin-bottom: 75px;
  }
  .summary_design .title_summary {
    margin: 0 0 40px -2px;
    font-size: 34px;
    font-weight: 700;
  }
  .summary_design .desc_summary {
    font-size: 18px;
    line-height: 30px;
    color: #666;
    white-space: pre;
  }
  .summary_color .title_summary {
    transition: padding 0.9s;
  }
  .summary_color .desc_summary {
    transition: padding 1.1s;
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
  .summary_font .title_summary {
    transition: padding 1.3s;
  }
  .summary_font .desc_summary {
    transition: padding 1.6s;
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