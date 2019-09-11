<template>
  <div>
    <div>
      <top-bar :topData="topData"></top-bar>
    </div>
    <div class="shop">
      <img :src="shopImg" alt />
    </div>
    <div class="shopName">
      <span>
        <strong>SEVEN KILL</strong>桌游剧本杀
      </span>
    </div>
    <div class="shopAddress">
      <div>
        <van-icon name="location-o" />
      </div>
      <div class="address">
        <div>
          <span style="font-weight:600;">学府三道街黑龙江大学家属楼三四高层42栋3单元101室</span>
        </div>
        <div style="margin-top:10px;">
          <span style="fong-size:15px;color:#999;">距地铁1号线理工大学站4号口步行790m</span>
        </div>
      </div>
    </div>
    <!-- 扫码 -->
    <div>
      <work-card :workData="workData"></work-card>
    </div>
    <div class="shopName">
      <span>
        <strong>小店经营类型</strong>
      </span>
    </div>
    <div v-for="(item,index) in typeList" :key="index" class="showMsg">
      <div style="font-weight:600">{{item.title}}</div>
      {{item.msg}}
    </div>
    <div class="shopName">
      <span>
        <strong>小店详情</strong>
      </span>
    </div>
    <div v-for="(item,index1) in shopList1" :key="index1">
      <img :src="item.img" alt />
    </div>
  </div>
</template>

<script>
import topBar from "../components/topBar.vue";
import workCard from "../components/workCard.vue"
import { Icon } from "vant";
export default {
  data() {
    return {
      topData: { title: "泽鹿的剧本店" },
      workData: {toast:"想玩剧本、桌游的小伙伴可以加我微信进行咨询哦~"},
      shopImg: require("../images/shop/shop.png"),
      typeList: [
        {
          title: "1.剧本杀",
          msg:
            "《剧本杀》是一款以个人为中心的辅助游戏推理的应用。每名玩家都有自己的剧本，玩家需将自己代入到剧本角色中，同时辅助玩家进行剧本杀，引导剧本杀流程，同时期间不断收集线索，与其他玩家进行交流，认真推理最终找到真相。"
        },
        {
          title: "2.各种各样桌游",
          msg:
            "桌上游戏发源于德国，在欧美地区已经风行了几十年。大家以游戏会友、交友。在国外，桌上游戏内容涉及战争、贸易、文化、艺术、城市建设、历史等多个方面，大多使用纸质材料加上精美的模型辅助。它是一种面对面的游戏，非常强调交流。因此，桌面游戏是家庭休闲、朋友聚会、甚至商务闲暇等多种场合的最佳沟通方式。21世纪初它也登陆到中国国内，风靡白领群体。"
        }
      ],
      shopList1: [
        { img: require("../images/shop/shop1.png") },
        { img: require("../images/shop/shop2.png") },
        { img: require("../images/shop/shop3.png") },
        { img: require("../images/shop/shop4.png") },
        { img: require("../images/shop/shop5.png") },
        { img: require("../images/shop/shop6.png") }
      ]
    };
  },
  components: {
    "top-bar": topBar,
    "work-card":workCard,
    [Icon.name]: Icon
  }
};
</script>

<style>
.shop {
  margin-top: 50px;
  width: 100%;
  height: 300px;
}

.shopName {
  width: 90%;
  margin-left: 5%;
  /* height: 50px; */
  font-size: 20px;
  line-height: 50px;
  /* padding:0 20px; */
  border-bottom: 1px solid #e9e9e9;
}

.shopAddress {
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
}

.address {
  width: 300px;
  padding: 10px 0;
}

.showMsg {
  width: 90%;
  margin-left: 5%;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>