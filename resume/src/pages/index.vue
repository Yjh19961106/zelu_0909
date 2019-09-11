<template>
  <div>
    <div>
      <top-bar :topData="topData"></top-bar>
    </div>
    <!-- 轮播图 -->
    <div style="margin-top:50px;">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swipeList" :key="index">
          <div class="swipeItem">
            <img :src="item.img" alt />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="show">
      <div style="padding-bottom:10px;border-bottom:2px solid #999;">
        <div class="itemTitle">
          <span style="margin-right:10px;">个人简单资料</span>
          <van-icon name="flower-o" color="#a52a2a" />
        </div>
        <div v-for="(item,index) in List1" :key="index" class="List1">
          {{item.title}}:
          <span>{{item.msg}}</span>
        </div>
      </div>
      <div style="padding-bottom:10px;border-bottom:2px solid #999;">
        <div class="itemTitle">
          <span style="margin-right:10px;">参加过的展会</span>
          <van-icon name="flower-o" color="#a52a2a" />
        </div>
        <div v-for="(item,index) in List2" :key="index" class="List2">
          {{item.title}} ——
          <span>{{item.msg}}</span>
        </div>
      </div>
      <div style="padding-bottom:10px;border-bottom:2px solid #999;">
        <div class="itemTitle">
          <span style="margin-right:10px;">出过的cos</span>
          <van-icon name="flower-o" color="#a52a2a" />
        </div>
        <div v-for="(item,index) in List3" :key="index" class="List3">
          <div>{{item.title}}</div>
          <img :src="item.img" alt />
        </div>
      </div>
      <div style="padding-bottom:10px;border-bottom:2px solid #999;">
        <div class="itemTitle">
          <span style="margin-right:10px;">个人微信二维码</span>
          <van-icon name="flower-o" color="#a52a2a" />
        </div>
        <div>
          <work-card :workData="workData"></work-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
import { Icon } from "vant";
import topBar from "../components/topBar.vue";
import workCard from "../components/workCard.vue";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon,
    "top-bar": topBar,
    "work-card": workCard
  },
  data() {
    return {
      topData: { title: "泽鹿的个人中心" },
      // 轮播图照片
      swipeList: [
        { img: require("../images/index/swipe1.jpg") },
        { img: require("../images/index/swipe2.jpg") },
        { img: require("../images/index/swipe3.jpg") },
        { img: require("../images/index/swipe4.jpg") }
      ],
      List1: [
        { title: "名字", msg: "泽鹿  大鹿鹿" },
        {
          title: "年龄",
          msg: "1-1000中第3个水仙花数(第一位+最后一位)*第二位-3"
        },
        { title: "身高", msg: "183cm" },
        { title: "微信号", msg: "qimingqian_0912" },
        { title: "工作", msg: "剧本店老板" }
      ],
      List2: [
        { title: "西漫WJ重庆全国总决赛", msg: "嘉宾" },
        { title: "西漫WJ长春赛区决赛", msg: "嘉宾" },
        { title: "西漫WJ哈尔滨赛区决赛", msg: "评委、嘉宾" },
        { title: "Just We动漫游戏嘉年华", msg: "评委、嘉宾" },
        { title: "遇见国风亚潮Live盛典", msg: "主嘉宾" },
        { title: "蓄谋已九×Supreme装备实验室'次元重置计划'", msg: "嘉宾" }
      ],
      List3: [
        { title: "魔道祖师-蓝忘记", img: require("../images/index/show1.jpg") },
        { title: "魔道祖师-江澄", img: require("../images/index/show2.jpg") },
        { title: "李泽言", img: require("../images/index/show3.jpg") },
        { title: "其他", img: require("../images/index/show4.jpg") }
      ],
      workData: { toast: "欢迎各位志同道合的朋友加我微信聊聊天哦~" }
    };
  }
};
</script>
<style scoped>
.swipeItem {
  width: 100%;
  height: 550px;
}
.show {
  padding: 0 10px;
}
.itemTitle {
  width: 100%;
  font-size: 25px;
  font-weight: 600;
  line-height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.List1 {
  font-weight: 600;
  font-size: 20px;
}
.List1 span {
  color: #999;
  font-size: 15px;
  font-weight: normal;
}
.List2 {
  font-size: 15px;
}
.List2 span {
  color: #a52a2a;
  font-size: 20px;
  font-weight: 600;
}
.List3 div {
  font-weight: 600;
  font-size: 20px;
  height: 30px;
}
</style>