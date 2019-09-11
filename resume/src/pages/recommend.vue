<template>
  <div>
    <div>
      <top-bar :topData="topData"></top-bar>
    </div>
    <div class="recommend">
      <van-notice-bar left-icon="volume-o">{{toast}}</van-notice-bar>
    </div>
    <div class="recommendList">
      <div
        class="recommendItem"
        v-for="(item,index) in List"
        :key="index"
        @click="linkToDetails(item)"
      >
        <div class="recommendImg">
          <img :src="item.imgShow" alt />
        </div>
        <div class="recommendName">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topBar.vue";
import { NoticeBar } from "vant";
export default {
  data() {
    return {
      topData: { title: "泽鹿的真心推荐" },
      toast:
        "所有商品都是我平时购买后觉得不错的，这里推荐给大家，如果大家有感兴趣的，可以加我微信进行查询。",
      List: [
        {
          imgShow: require("../images/recommend/goods1-1.jpg"),
          imgSwipe: [
            { img: require("../images/recommend/goods1-1.jpg") },
            { img: require("../images/recommend/goods1-2.jpg") }
          ],
          imgList: [
            {
              img: require("../images/goods1/goods1.png")
            },
            {
              img: require("../images/goods1/goods2.png")
            },
            {
              img: require("../images/goods1/goods3.png")
            },
            {
              img: require("../images/goods1/goods4.png")
            },
            {
              img: require("../images/goods1/goods5.png")
            },
            {
              img: require("../images/goods1/goods6.png")
            },
            {
              img: require("../images/goods1/goods7.png")
            }
          ],

          name: "现货正品NIKE Big Swoosh黑白大钩子夹克 风衣 AJ1405-010-121",
          goodsId: 1,
          msg: "这个商品好啊这个商品好啊这个商品好啊这个商品好啊这个商品好啊这个商品好啊这个商品好啊这个商品好啊这个商品好啊这个商品好啊这个商品好啊这个商品好啊"
        },
        {
          imgShow: require("../images/recommend/goods2-5.jpg"),
          imgSwipe: [
            { img: require("../images/recommend/goods2-5.jpg") },
            { img: require("../images/recommend/goods2-1.jpg") },
            { img: require("../images/recommend/goods2-2.jpg") },
            { img: require("../images/recommend/goods2-3.jpg") },
            { img: require("../images/recommend/goods2-4.jpg") }
          ],
          imgList: [
            { img: require("../images/goods2/goods1.png") },
            { img: require("../images/goods2/goods2.png") },
            { img: require("../images/goods2/goods3.png") },
            { img: require("../images/goods2/goods4.png") },
            { img: require("../images/goods2/goods5.png") },
            { img: require("../images/goods2/goods6.png") }
          ],
          name:
            "人民日报联名李宁系在中国李宁人命日报满印唯一阿云嘎同款男女情侣",
          goodsId: 2,
          msg: "这个商品也不错啊这个商品也不错啊这个商品也不错啊这个商品也不错啊这个商品也不错啊这个商品也不错啊这个商品也不错啊这个商品也不错啊"
        }
      ]
    };
  },
  components: {
    "top-bar": topBar,
    [NoticeBar.name]: NoticeBar
  },
  methods: {
    linkToDetails(item) {
      console.log(item);
      this.$router.push({ name: "details", params: { details_data: item } });
    }
  }
};
</script>

<style scoped>
.recommend {
  margin-top: 50px;
  padding: 10px;
  font-size: 20px;
}
.recommendItem {
  width: 50%;
  float: left;
  border: 2px solid #e9e9e9;
  box-sizing: border-box;
}

.recommendImg {
  width: 150px;
  margin: auto;
  margin-top: 10px;
}

.recommendName {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: black;
}
</style>