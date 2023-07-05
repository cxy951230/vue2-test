<template>
  <div class="d1">
    <div class="category" :style="mystyle" ref="testCategory">
      <ul>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
        <li>ffff</li>
      </ul>
    </div>
  </div>
</template>

<script>
import bs from "better-scroll"

export default {
  name: "Category",
  data() {
    return {
      mystyle: {
        height: '0px',
        // paddingTop: "44px"
      }
    }
  },
  mounted() {
    const betterScroll = new bs(document.querySelector(".category"),{
      click: true,
      probeType: 3,
      pullUpLoad: true
    })
    this.mystyle.height = (window.innerHeight - 150) + "px"
    betterScroll.on("pullingUp", ()=>{
      console.log("pooling..")

      // this.mystyle.height = window.innerHeight + "px"
      betterScroll.refresh()
      setTimeout(()=>{
        betterScroll.finishPullUp()
        console.log("finish pull");
      },2000)
    })

    console.log(window.innerHeight)
    console.log(typeof window.innerHeight)
    console.log(typeof '200px')
    betterScroll.refresh()
  }
}
</script>

<style scoped>
  .d1 {
    background-color: black;
    padding-top: 44px
  }

  .category {
    /*height: 100%;*/
    background-color: red;
    /*padding-top: 42px;*/
    border: 3px solid black;
  }
</style>
