<template>
  <div>
    <MainVisual />
    <IntroProject />
    <IntroAbout />
  </div>
</template>

<script>

import MainVisual from '../components/main/MainVisual'
import IntroProject from '../components/main/IntroProject'
import IntroAbout from '../components/main/IntroAbout'

export default {
  name: 'Main',
  components: {
    MainVisual,
    IntroProject,
    IntroAbout,
  },
  mounted() {
    const center = (document.body.scrollWidth - document.body.clientWidth) / 2
    let top = 0
    if (this.$route.hash === '#projects') {
      top = 1020
    }
    window.scrollTo(center, top)
  },
  watch: {
    '$route' (to) {
      const center = (document.body.scrollWidth - document.body.clientWidth) / 2
      let top = 0
      if (to.hash === '#projects') {
        top = 1020
      }
      window.scrollTo(center, top)
    }
  }
}
</script>