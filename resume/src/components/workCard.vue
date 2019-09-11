<template>
  <div class="workCard">
    <div class="erweima">
      <img :src="erweima" alt />
    </div>
    <!-- 传入的值 -->
    <div class="toast">{{workData.toast}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      erweima: require("../images/shop/erweima.png"),
    //   toast: "想玩剧本、桌游的小伙伴可以加我微信进行咨询哦~"
    };
  },
  props: {
    workData: Object
  }
};
</script>

<style scoped>
.workCard {
  padding: 10px;
  text-align: center;
  /* border-top: 10px solid #e9e9e9;
  border-bottom: 10px solid #e9e9e9; */
}
.erweima {
  width: 120px;
  height: 120px;
  margin: auto;
}
.toast {
  width: 200px;
  margin: auto;
  margin-top: 10px;
}
</style>