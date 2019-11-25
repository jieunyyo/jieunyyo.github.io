<template>
  <div class="wrap">
    <Header />
    <router-view />
    <a href="#top" class="btn_scrolltop"><span class="ico_scrolltop">맨 위로</span></a>
    <Footer />
  </div>
</template>
<script>

import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  .wrap {
    position: relative;
    width: 1920px;
    margin: 0 auto;
  }
  .btn_scrolltop {
    position: absolute;
    right: 70px;
    bottom: 120px;
  }
  .btn_scrolltop .ico_scrolltop {
    display: block;
    width: 50px;
    height: 50px;
    background: url(../assets/images/ico_scrolltop.png) no-repeat left top;
    font-size: 0;
  }
</style>