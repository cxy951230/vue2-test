<template>
  <div class="backTop">
    <img src="~assets/img/home/backtop.jpg" @click="clickBackTop">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    clickBackTop: function (){
      this.$emit("clickBackTop")
    }
  }
}
</script>

<style scoped>

</style>
