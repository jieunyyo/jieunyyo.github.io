<template>
  <div class="box_desc2">
    <div class="group_desc2">
      <div class="inner_middle">
        <strong class="title_desc2 down">{{ desc2.title }}</strong>
        <p class="text_desc2 down">{{ desc2.text }}</p>
        <img class="img_desc2" :src="require(`@/assets/images/project_${filename}_device.png`)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDesc2',
  props: ['desc2', 'filename'],
  methods: {
    handleScroll() {
      let timer;
      const $title = document.querySelector('.title_desc2')
      const $text = document.querySelector('.text_desc2')
      if (!timer) {
        timer = setTimeout(function() {
          timer = null;
          const trigger = $title.offsetParent.offsetTop - 400
          const windowY = window.pageYOffset
          if (windowY < trigger) {
            $title.classList.add('down')
            $text.classList.add('down')
          }
          if (windowY > trigger) {
            $title.classList.remove('down')
          }
          if (windowY > trigger + 50) {
            $text.classList.remove('down')
          }
        }, 100);
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  .box_desc2 {
    position: relative;
    height: 672px;
    margin-bottom: 60px
  }
  .box_desc2 .group_desc2 {
    padding-top: 230px;
    background: #777;
    height: 600px;
  }
  .box_desc2 .title_desc2 {
    display: block;
    margin-bottom: 46px;
    font-size: 34px;
    font-weight: 700;
    color: #fff;
    transition: margin 0.5s;
  }
  .box_desc2 .text_desc2 {
    width: 570px;
    font-size: 18px;
    line-height: 30px;
    word-break: keep-all;
    color: #fff;
    transition: margin 0.7s;
  }
  .title_desc2.down {
    margin-top: 60px;
  }
  .text_desc2.down {
    margin-top: 70px;
  }
  .box_desc2 .img_desc2 {
    position: absolute;
    top: 0;
    right: 0;
    height: 672px;
  }
</style>