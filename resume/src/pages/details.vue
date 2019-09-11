<template>
  <div>
    <div>
      <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 轮播 -->
    <div>
      <van-swipe style="height: 300px;" vertical>
        <van-swipe-item v-for="(item , index) in goods_swipe" :key="index">
          <div style="width:100%;height:300px;">
            <img :src="item.img" alt />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="goods_title">{{goods_name}}</div>
    <div class="goods_introduce">简单介绍</div>
    <div class="goods_msg">{{goods_msg}}</div>
    <div class="goods_introduce">欢迎咨询</div>
    <div>
      <work-card :workData="workData"></work-card>
    </div>
    <div class="goods_introduce">商品详情</div>
    <div class="goods_List">
      <img v-for="(item,index) in goods_List" :key="index" :src="item.img" alt />
    </div>
  </div>
</template>

<script>
import { NavBar } from "vant";
import { Swipe, SwipeItem } from "vant";
import workCard from "../components/workCard.vue";
export default {
  data() {
    return {
      goods_name: "",
      goods_swipe: "",
      goods_List: "",
      goods_msg: "",
      workData: { toast: "欢迎各位小伙伴带图咨询，包邮哦~" }
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    "work-card": workCard
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "recommend" });
    }
  },
  created() {
    let list = this.$route.params.details_data;
    console.log(list);
    this.goods_name = list.name;
    this.goods_swipe = list.imgSwipe;
    this.goods_List = list.imgList;
    this.goods_msg = list.msg;
  }
};
</script>

<style scoped>
.van-nav-bar {
  width: 100%;
  height: 50px;
  background: #a52a2a;
}
.van-icon {
  color: white;
}
.van-nav-bar__left {
  bottom: 0px;
  left: 5px;
}
.van-nav-bar__text {
  font-size: 20px;
  color: white;
}
.van-nav-bar__title {
  color: white;
  font-size: 20px;
}
.van-nav-bar {
  line-height: 50px;
}
.goods_title {
  padding: 10px;
  font-weight: 600;
}
.goods_introduce {
  width: 30%;
  margin-left: 35%;
  text-align: center;
  border-top: 5px solid #a52a2a;
  border-bottom: 5px solid #a52a2a;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
}
.goods_msg {
  padding: 15px;
}

.goods_List {
  padding-top: 10px;
}
</style>