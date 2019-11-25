<template>
  <div class="box_desc2">
    <div class="group_desc2">
      <div class="inner_middle">
        <strong class="title_desc2">{{ desc2.title }}</strong>
        <p class="text_desc2">{{ desc2.text }}</p>
        <img class="img_desc2" :src="require(`@/assets/images/project_${filename}_device.png`)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDesc2',
  props: ['desc2', 'filename'],
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
  }
  .box_desc2 .text_desc2 {
    width: 570px;
    font-size: 18px;
    line-height: 30px;
    word-break: keep-all;
    color: #fff;
  }
  .box_desc2 .img_desc2 {
    position: absolute;
    top: 0;
    right: 0;
    height: 672px;
  }
</style>