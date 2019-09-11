<template>
  <div>
    <div>
      <top-bar :topData="topData"></top-bar>
    </div>
    <div class="poster">
      <div class="posterImg">
        <van-icon name="smile-o" size="200" />
      </div>
      <div class="posterToast">暂未开放,敬请期待</div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topBar.vue";
import { Icon } from "vant";
export default {
  data() {
    return {
      topData: { title: "泽鹿的近期行程" }
    };
  },
  components: {
    "top-bar": topBar,
    [Icon.name]: Icon
  }
};
</script>

<style>
.poster {
  margin-top: 50px;
}

.posterImg {
    width: 200px;
    height: 200px;
    margin: auto;
    margin-top:200px;
}

.posterToast {
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    color: #a52a2a;
}
</style>