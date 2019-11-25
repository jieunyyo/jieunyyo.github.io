<template>
  <header :class="`inner_wrap${lightTheme}`">
    <h1 class="header_logo">
      <router-link to="/">
        <img src="@/assets/images/img_logo.png" alt="JIEUNYYO">
      </router-link>
    </h1>
    <p class="header_text">Introduce myself</p>
    <button class="btn_menu" type="button" @click="openMenu"><span class="ico_menu">Menu</span></button>
    <Nav v-show="menuOn"  :menuOn="menuOn" :menuList="menuList" :closeMenu="closeMenu" />
  </header>
</template>

<script>
import Nav from './Nav'
export default {
  name: 'Header',
  components: {
    Nav
  },
  props: {
    // menuList: Array // TODO 메뉴리스트 props에서 받아오기
  },
  data() {
    return (
      {
        menuOn: false,
        menuList: [ // TODO 메뉴리스트 props에서 받아오기
          { order: 1, title: 'home', url: '/'},
          { order: 2, title: 'my project', url: '/#project_list'},
          { order: 3, title: 'about', url: '/about'},
        ]
      }
    )
  },
  methods: {
    closeMenu() {
      this.menuOn = false
      console.log('close ~!')
    },
    openMenu() {
      this.menuOn = true
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
    font-weight: bold;
    color: #bbb;
  }
  
  .light_theme .header_logo {
    color: #fff;
  }

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
