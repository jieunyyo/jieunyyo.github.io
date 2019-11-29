<template>
  <div class="section_mainv inner_large">
    <div class="inner_middle">
      <div class="group_content">
        <strong class="title_mainv">흔한 지은입니다.</strong>
        <span class="img_meanless ico_slash"></span>
        <p class="desc_mainv">
          제 이름은 흔하지만, 매일 밤 사용자의 편리함을 추구하고 <br/>
          보는이의 눈을 즐겁게하는 웹사이트를 제작하는 여행중입니다.
        </p>
        <span class="img_meanless ico_below"></span>
      </div>
    </div>
    <div class="group_img">
      <img src="@/assets/images/img_mainv.jpg" alt="">
      <span class="img_meanless img_mainv_el"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainVisual'
}
</script>

<style scoped>
  .section_mainv {
    height: 850px;
  }
  .inner_middle {
    position: relative; 
  }
  .group_content {
    position: absolute;
    top: 245px;
    left: 0;
    z-index: 11;
  }
  .title_mainv {
    font-size: 90px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.25px;
  }
  .desc_mainv {
    font-size:34px;
    color: #fff;
    line-height:46px;
  }
  .group_img {
    position: relative;
    z-index: 10;
    height: 850px;
  }
  .ico_slash {
    display: block;
    width: 22px;
    height: 30px;
    margin: 20px 0 10px;
    background-image: url(../../assets/images/ico_slash.png);
  }
  .img_mainv_el {
    position: absolute;
    right: 45px;
    bottom: -60px;
    width: 719px;
    height: 722px;
    background-image: url(../../assets/images/img_mainv_el.png);
  }
  .ico_below {
    display: block;
    width: 28px;
    height: 30px;
    margin-top: 215px;
    background-image: url(../../assets/images/ico_below.png);
    animation-name: scrollPlease;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    -webkit-animation-timing-function: ease;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease;
  }

  @-webkit-keyframes scrollPlease {
    from {
      margin-top: 215px;
    }
    to {
      margin-top: 200px;
    }
  }
  @keyframes scrollPlease {
    from {
      margin-top: 215px;
    }
    to {
      margin-top: 200px;
    }
  }
</style>