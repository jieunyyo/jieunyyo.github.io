<template>
  <div class="box_summary" v-if="summaryList" :style="backgroundStyle">
    <div class="inner_middle">
      <div v-for="(item, index) in summaryList" :key="index" class="group_summary">
        <strong class="title_summary">{{ item.title }}</strong>
        <img :src="require(`@/assets/images/${item.imgPath}`)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSummary',
  props: ['summaryBack', 'summaryList', 'filename'],
  data() {
    return {
      backgroundStyle: {
        background: this.summaryBack ? `url(${require(`@/assets/images/${this.summaryBack}`)})` : ''
      }
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
  .group_summary:nth-child(1) .title_summary {
    font-weight: 700;
  }
  .group_summary:nth-child(2) .title_summary {
    transition: padding 0.9s;
  }
  .group_summary:nth-child(2) .desc_summary {
    transition: padding 1.1s;
  }
  .group_summary:nth-child(3) .title_summary {
    transition: padding 1.3s;
  }
  .group_summary:nth-child(3) .desc_summary {
    transition: padding 1.6s;
  }
</style>