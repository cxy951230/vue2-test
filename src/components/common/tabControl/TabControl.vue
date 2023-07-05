<template>
  <div class="tabControl">
    <div v-for="(item, index) in tabControlData" @click="click(index)" :key="item.id" class="tabControlItem">
      <span :class="{activate:index == currentIndex}">
        {{item.title}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    tabControlData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    click: function(index) {
      this.currentIndex = index;
      this.$emit("changeShowView",index)
    },
    changeIndex: function (index){
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .tabControl {
    display: flex;
    text-align: center;
    background-color: white;
  }

  .tabControlItem {
    flex: 1;
  }

  .activate {
    color: red;
    border-bottom: 3px solid red;
  }
</style>
