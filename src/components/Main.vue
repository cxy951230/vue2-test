<template>
  <div id="app">
    <router-view/>
    <tab-bar>
      <TabBarItem path="/home">
        <img slot="img-active" src="~/assets/img/tabbar/2.jpg">
        <img slot="img" src="~/assets/img/tabbar/1.jpg">
        <div slot="text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="img-active" src="~/assets/img/tabbar/2.jpg">
        <img slot="img" src="~/assets/img/tabbar/1.jpg">
        <div slot="text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="img-active" src="~/assets/img/tabbar/2.jpg">
        <img slot="img" src="~/assets/img/tabbar/1.jpg">
        <div slot="text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="img-active" src="~/assets/img/tabbar/2.jpg">
        <img slot="img" src="~/assets/img/tabbar/1.jpg">
        <div slot="text">我的</div>
      </TabBarItem>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar";
  import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "Main",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
