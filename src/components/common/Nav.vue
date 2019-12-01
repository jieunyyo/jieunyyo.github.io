<template>
  <div class="inner_large box_nav">
    <button class="btn_close" @click="closeMenu">
      <span class="ico_close">Close Menu</span>
    </button>
    <nav>
      <ul>
        <li v-for="item in menuList" :key="item.id" @click="closeMenu">
          <router-link class="link_item" :to="item.url">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="inner_large group_link">
      <a href="https://blog.naver.com/j_jieun_" target="_blank" class="link_blog">blog</a>
      <a href="mailto:jieunyyo@naver.com" class="link_email">jieunyyo@naver.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: ['menuList', 'closeMenu'],
  methods: {
    moveProjectList() {
      this.closeMenu()
      const center = (document.body.scrollWidth - document.body.clientWidth) / 2
      const top = 1020
      window.scrollTo(center, top)
    }
  }

}
</script>

<style scoped>
  .box_nav {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 90;
    height: 960px;
    background-image: url(../../assets/images/nav_back.jpg);
  }
  .btn_close {
    position: absolute;
    z-index: 99;
    top: 35px;
    right: 70px;
  }
  .ico_close {
    display: block;
    width: 40px;
    height: 40px;
    font-size: 0;
    color: transparent;
    background: url(../../assets/images/ico_close.png) no-repeat left top;
  }
  .group_link {
    position: absolute;
    bottom: 80px;
    left: 0;
  }
  nav {
    margin: 312px 0 0 465px;
  }
  .link_item {
    display: block;
    margin-bottom: 45px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 80px;
    color: #fff;
    letter-spacing: 0.25;
    text-transform: uppercase;
  }
  nav li:nth-child(1) .link_item:hover {
    color: #00f7b8;
  }
  nav li:nth-child(2) .link_item:hover {
    color: #0166ff;
  }
  nav li:nth-child(3) .link_item:hover {
    color: #d9458f;
  }
    
  .group_link .link_blog {
    display: block;
    z-index: 99;
    width: 30px;
    height: 30px;
    margin-bottom: 40px;
    font-size: 0;
    color: transparent;
    background: url(../../assets/images/ico_blog.png) no-repeat left top;
  }
  .group_link .link_email {
    z-index: 99;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.25;
  }
</style>