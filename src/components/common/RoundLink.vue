<template>
  <a :class="themeClass" :href="url">{{ name }}</a>
</template>

<script>
export default {
  name: 'RoundLink',
  props: {
    name: String,
    url: String,
    theme: String
  },
  computed: {
    themeClass() {
      return this.theme ? this.theme : ''
    }
  }
}
</script>

<style scoped>
  a {
    display: inline-block;
    padding: 25px 56px 23px;
    font-size: 15px;
    font-weight: bold;
    color: #222;
    line-height: 1;
    border: 2px solid #222;
    border-radius: 33px;
    text-decoration: none;
  }
  .light {
    border-color: #fff;
    color: #fff;
  }
</style>