<template>
  <header :class="`inner_large${lightTheme}`">
    <h1 class="header_logo">
      <router-link to="/">
        <img v-if="menuOn" src="@/assets/images/img_logo_white.png" alt="JIEUNYYO">
        <img v-else src="@/assets/images/img_logo.png" alt="JIEUNYYO">
      </router-link>
    </h1>
    <p class="header_text">Introduce myself</p>
    <button class="btn_menu" type="button" @click="openMenu"><span class="ico_menu">Menu</span></button>
    <Nav v-show="menuOn" :menuOn="menuOn" :menuList="menuList" :closeMenu="closeMenu" />
  </header>
</template>

<script>
import Nav from './Nav'
import { menuList } from '../../data/global'
export default {
  name: 'Header',
  components: {
    Nav
  },
  data() {
    return (
      {
        menuOn: false,
        logoName: this.menuOn ? 'img_logo_white' : 'img_logo',
        menuList: menuList
      }
    )
  },
  methods: {
    closeMenu() {
      this.menuOn = false
      document.body.classList.remove('dimmed_on')
      document.querySelector('.dimmed').style.display = 'none';
      scrollTo(0, 0)
    },
    openMenu() {
      this.menuOn = true
      document.body.classList.add('dimmed_on')
      document.querySelector('.dimmed').style.display = 'block';
      scrollTo(0, 0)
    }
  },
  computed: {
    lightTheme() {
      return {
        light_theme: this.menuOn ? true : false
      }
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    height: 110px;
    padding: 0 70px;
  }

  .header_logo {
    z-index: 99;
    width: 167px;
    height: 17px;
  }
  
  .header_text {
    display: block;
    z-index: 99;
    margin-right: 120px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #bbb;
  }
  
  .light_theme .header_logo,
  .light_theme .header_text {
    color: #fff;
  }

  .ico_menu {
    display: block;
    z-index: 90;
    width: 40px;
    height: 40px;
    font-size: 0;
    background: url(../../assets/images/ico_menu.png) no-repeat left top;
  }

  .btn_menu {
    display: block;
    width: 40px;
    height: 40px;
  }

</style>
