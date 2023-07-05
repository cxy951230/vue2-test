<template>
  <div class="tab-bar-item" @click="clickItem">
    <div v-if="isActive"><slot name="img-active"></slot></div>
    <div v-else><slot name="img"></slot></div>
    <div :class="{active: isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>

export default {
  name: "TabBarItem",
  data() {
    return {
      isActive: false
    }
  },
  props: {
    path : String
  },
  methods:{
    clickItem(){
      console.log(this.$parent)
      const children = this.$parent.$children
      console.log(children)
      for (let child of children){
        console.log(child)
        console.log(child.props)
        child.isActive = false
      }
      this.isActive = true
      this.$router.replace(this.path)
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("22222e")
    next()
  },
  activated() {
    console.log(111)
    this.isActive = true
  },
  deactivated() {
    console.log(222)
    this.isActive = false
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

  .active{
    color: red;
  }
</style>
