<template>
  <div class="box_summary">
    <strong>{{ title }}</strong>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutSummary',
  props: {
    title: String,
    list: Array
  }
}
</script>

<style scoped>
  .box_summary {
    display: inline-block;
    vertical-align: top;
  }
  strong {
    float: left;
    margin-right: 120px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1.25px;
    line-height: 30px;
    text-transform: uppercase;
    white-space: pre;
  }
  ul {
    float: left;
  }
  li {
    display: block;
    font-size: 16px;
    line-height: 30px;
    white-space: pre;
  }
  .box_work ul li {
    margin-bottom: 28px;
  }
</style>