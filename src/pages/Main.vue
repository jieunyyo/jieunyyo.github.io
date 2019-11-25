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
    window.scrollTo(0,0);
  }
}
</script>