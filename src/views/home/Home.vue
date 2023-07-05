<template>
  <div id="home">
    <NavBar class="navBar">
      <div slot="center">购物车</div>
    </NavBar>
    <TabControl ref="tabControlTop" class="tabControlTop" v-show="!showTabControl" :tab-control-data="tabControlData" @changeShowView="changeShowView"></TabControl>
    <BetterScrollView ref="scroll" @scroll="scroll">
      <SwiperView></SwiperView>
      <Recommend :recommend-data="recommendData"></Recommend>
      <feature-view></feature-view>
      <TabControl ref="tabControl" class="tabControl" :class="{fixed:!showTabControl}" :tab-control-data="tabControlData" @changeShowView="changeShowView"></TabControl>
      <ShowView :showViews="currentShowView"></ShowView>
    </BetterScrollView>
    <BackTop class="backTop" @clickBackTop="clickBackTop" v-show="showBackTop"></BackTop>
    <ul>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import SwiperView from "@/views/home/components/SwiperView";
import Recommend from "@/views/home/components/Recommend";
import FeatureView from "@/views/home/components/FeatureView";
import TabControl from "@/components/common/tabControl/TabControl";
import ShowView from "@/components/common/showView/ShowView";
import BetterScrollView from "@/components/common/Scroll/BetterScrollView";
import BackTop from "@/components/common/Scroll/BackTop";
import {get} from "@/utils/request";
// import {post} from "@/utils/request";

export default {
  name: "Home",
  data() {
    return {
      showBackTop: false,
      tabControlScrollTop: 0,
      showTabControl: true,
      recommendData: [
        {
          id: 1,
          url: "",
          // imgUrl: "../../../assets/img/home/tj1.jpg",
          title: "十点抢劵"
        },{
          id: 2,
          url: "",
          // imgUrl: "../../../assets/img/home/tj1.jpg",
          title: "十点抢劵"
        },{
          id: 3,
          url: "",
          // imgUrl: "../../../assets/img/home/tj1.jpg",
          title: "十点抢劵"
        },{
          id: 4,
          url: "",
          // imgUrl: "../../../assets/img/home/tj1.jpg",
          title: "十点抢劵"
        }
      ],
      tabControlData: [
        {
          id: 1,
          title: "流行"
        },
        {
          id: 2,
          title: "新款"
        },
        {
          id: 3,
          title: "精选"
        }
      ],
      showViews: {
        "pop": [
          {
            "id": 1,
            "url": "",
            "sc": 10,
            "price": 19.8,
            "desc": "2023夏季服装流行款"
          },
          {
            "id": 2,
            "url": "",
            "sc": 11,
            "price": 36.7,
            "desc": "2023夏季服装流行款"
          },
          {
            "id": 3,
            "url": "",
            "sc": 2,
            "price": 28.0,
            "desc": "2023夏季服装流行款"
          },
          {
            "id": 4,
            "url": "",
            "sc": 44,
            "price": 14,
            "desc": "2023夏季服装流行款"
          },
          {
            "id": 5,
            "url": "",
            "sc": 44,
            "price": 14,
            "desc": "2023夏季服装流行款"
          }
        ],
        "new": [
          {
            "id": 3,
            "url": "",
            "sc": 2,
            "price": 28.0,
            "desc": "2023夏季服装流行款"
          },
          {
            "id": 4,
            "url": "",
            "sc": 44,
            "price": 14,
            "desc": "2023夏季服装流行款"
          },
          {
            "id": 1,
            "url": "",
            "sc": 10,
            "price": 19.8,
            "desc": "2023夏季服装流行款"
          },
          {
            "id": 2,
            "url": "",
            "sc": 11,
            "price": 36.7,
            "desc": "2023夏季服装流行款"
          },
          {
            "id": 5,
            "url": "",
            "sc": 44,
            "price": 14,
            "desc": "2023夏季服装流行款"
          }
        ]
      },
      currentShowViewIndex: 0
    }
  },
  components:{
    NavBar,
    SwiperView,
    Recommend,
    FeatureView,
    TabControl,
    ShowView,
    BetterScrollView,
    BackTop
  },
  created() {
    get("", null,
        (res)=>{
          console.log(res)
        },
        (err)=>{
          console.log(err)
        }
    )
  },
  methods: {
    changeShowView: function (index){
      console.log(index)
      this.currentShowViewIndex = index
      this.$refs.tabControl.changeIndex(index)
      this.$refs.tabControlTop.changeIndex(index)
    },
    clickBackTop: function (){
      console.log("click back top")
      console.log(this.$refs.scroll)
      this.$refs.scroll.goBack()
    },
    scroll: function (pos){
      // console.log("scroll")
      // console.log(pos)
      if (pos.y <0){
        this.showBackTop = true
      }else {
        this.showBackTop = false
      }

      if((-pos.y) > this.tabControlScrollTop){
        this.showTabControl = false
      }else {
        this.showTabControl = true
      }


    },
  },
  computed: {
    currentShowView: function (){
      if (this.currentShowViewIndex ==0){
        return this.showViews.pop
      }else if(this.currentShowViewIndex ==1){
        return this.showViews.new
      }else {
        return this.showViews.pop
      }
    }
  },
  activated() {
    // this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // this.$refs.scroll.refresh();
  },
  mounted() {
    setTimeout(()=>{
      console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabControlScrollTop=this.$refs.tabControl.$el.offsetTop
    },500)
  }
}
</script>

<style scoped>
  #home {
    position: relative;
    padding-top: 42px;
  }

  .navBar {
    background-color: #ff8198;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 9;
  }

  .tabControlTop {
    /*停止滚动*/
    position: relative;
    z-index: 9;
    width: 100%;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    /*top: 44px;*/
  }

  .backTop {
    position: fixed;
    bottom: 55px;
    right: 10px;
  }

  .backTop img {
    width: 30px;
    height: 30px;
  }

  .fixed {
    position: fixed;
  }
</style>
