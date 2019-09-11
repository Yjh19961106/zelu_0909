<template>
  <div>
    <div class="topBar">
      <!-- 点击按钮 变形 -->
      <div @click="showPopup" class="check">
        <div class="checkLine"></div>
        <div class="checkLine"></div>
        <div class="checkLine"></div>
      </div>
      <!-- 标题 -->
      <div class="barTitle">
        <!-- 传入的值 -->
        <span>{{topData.title}}</span>
      </div>
    </div>
    <div>
      <van-popup v-model="show" position="left" :style="{ width: '50%' ,height:'100%'}">
        <div class="routeList">
          <div class="headImg">
            <img :src="headImg" alt />
          </div>
          <div v-for="(item,index) in routeList" :key="index" class="routeItem">
            <span @click="goPage(item.id)">{{item.title}}</span>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { Popup } from "vant";
export default {
  data() {
    return {
      show: false,
      headImg: require("../images/index/headImg.jpg"),
      routeList: [
        { title: "我的介绍", id: "1" },
        { title: "我的推荐", id: "2" },
        { title: "我的店铺", id: "3" },
        { title: "我的行程", id: "4" }
      ]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    goPage: function(id) {
      if (id == 1) {
        this.$router.push({
          name: "index"
        });
      }
      if (id == 2) {
        this.$router.push({
          name: "recommend"
        });
      }
      if (id == 3) {
        this.$router.push({
          name: "shop"
        });
      }
      if (id == 4) {
        this.$router.push({
          name: "poster"
        });
      }
    }
  },
  components: {
    [Popup.name]: Popup
  },
  props: {
        topData: Object,
  }
};
</script>

<style scoped>
.topBar {
  width: 100%;
  height: 50px;
  background: #a52a2a;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  z-index: 99;
}
.check {
  height: 50px;
  width: 50px;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
}
.checkLine {
  width: 30px;
  height: 4px;
  background: white;
  margin-bottom: 7px;
}
.barTitle {
  line-height: 50px;
  color: white;
  font-size: 20px;
  margin: auto;
}

.van-popup--left {
  background: #a52a2a;
}

.headImg {
  width: 70px;
  height: 70px;
  margin: auto;
  margin-bottom: 18px;
}
.headImg img {
  border-radius: 50%;
}
.routeList {
  padding-top: 50px;
  padding-bottom: 130px;
  font-size: 30px;
  color: white;
  text-align: center;
}

.routeItem {
  width: 100%;
  height: 100px;
}
</style>