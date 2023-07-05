<template>
  <div>
    <Swiper>
      <SwiperItem>
        <a href="http://www.baidu.com">
          <img src="~/assets/img/home/lbt1.jpg" alt="">
        </a>
      </SwiperItem>
      <SwiperItem>
        <a href="http://www.baidu.com">
          <img src="~/assets/img/home/lbt2.jpg" alt="">
        </a>
      </SwiperItem>
      <SwiperItem>
        <a href="http://www.baidu.com">
          <img src="~/assets/img/home/lbt3.jpg" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper/index"

export default {
  name: "SwiperView",
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
