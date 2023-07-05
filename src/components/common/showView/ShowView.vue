<template>
  <div class="showView">
    <div v-for="item in showViews" :key="item.id" class="showViewItem">
      <a :href="item.url">
        <img v-if="item.id==1" src="~assets/img/home/sp1.jpg">
        <img v-else-if="item.id==2" src="~assets/img/home/sp2.jpg">
        <img v-else-if="item.id==3" src="~assets/img/home/sp3.jpg">
        <img v-else-if="item.id==4" src="~assets/img/home/sp4.jpg">
        <img v-else src="~assets/img/home/sp5.jpg">
      </a>
      <div>{{item.desc}}</div>
      <span style="color: red">{{"收藏：" + item.sc}}</span>
      <span>{{"价格：" + item.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowView",
  props: {
    showViews: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .showView {
    height: 100%;
    /*overflow: hidden;*/
    /*position: relative;*/
    /*width: 100%;*/
    display: flex;
    /*包裹，所有元素不会往一行塞*/
    flex-wrap: wrap;
    justify-content: space-between;
    /*position: fixed;*/
  }

  .showViewItem {
    padding-bottom: 40px;
    width: 48%;
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*overflow: hidden;*/
    /*text-align: center;*/
    /*bottom: 5px;*/
    /*flex-shrink: 0;*/
  }

  .showViewItem img {
    width: 100%;
  }

  .showViewItem span {
    /*margin: 3px;*/
    width: 49%;
    height: auto;
    padding-top: 6px;
    font-size: 14px;
  }

</style>
