<template>
  <div class="betterScroll" ref="bs" :style="scrollCss">
    <div class="div1">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll"

export default {
  name: "BetterScrollView",
  data(){
    return {
      scroll: null,
      // height: null,
      scrollCss: {
        height: "300px"
      }
    }
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.bs,{
      click: true,
      probeType: 3,
      pullUpLoad: true
    })
    this.scrollCss.height = (window.innerHeight - 125) + "px"
    setTimeout(()=>{
      this.scroll.refresh()
    },500)
    console.log(this.scroll)
    // this.scrol.refresh()


    this.scroll.on('scroll',position => {
      this.$emit('scroll',position)
    })

    this.scroll.on("pullingUp", ()=>{
      console.log("pooling..")

      // this.mystyle.height = window.innerHeight + "px"
      // this.scrol.refresh()
      setTimeout(()=>{
        this.scroll.finishPullUp()
        console.log("finish pull");
      },2000)
    })
  },
  methods: {
    goBack: function (){
      this.scroll.scrollTo(0,0,500)
    }
  }
}
</script>

<style scoped>
  .betterScroll {
    /*height: ;*/
    /*background-color: red;*/
    /*height: 100%;*/
    /*position: relative;*/
    /*border: 3px solid black;*/
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .div1 {
    /*overflow: hidden;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 44px;*/
    /*bottom: 49px;*/
  }
</style>
