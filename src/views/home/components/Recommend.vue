<template>
  <div class="recommend">
    <div v-for="item in recommendData" :key="item.id" class="recommend-item">
      <a :href="item.url">
        <img :src="require('../../../assets/img/home/tj1.jpg')" alt="">
<!--          <img :src="require(item.imgUrl)" alt="">-->
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommendData: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    /*background-color: beige;*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }

  .recommend-item{
    flex: 1;
    text-align: center;
    /*height: 49px;*/
  }

  .recommend-item img{
    width: 60px;
    height: 60px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>
