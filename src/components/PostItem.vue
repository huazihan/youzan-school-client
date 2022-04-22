<template>
  <div class="item" v-for="item,index in list" :key="index">
    <div class="title">{{item.title}}</div>
    <div class="desc">{{ item.desc }}</div>
    <div class="post-info">
      <span class="time">发布于 · {{item.time}}</span>
      <span class="pv">{{ item.view }}次浏览</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    list: Array,
  }
}
</script>

<style scoped>
.item {
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
  margin: 15px;
}
.item .title {
  font-size: 18px;
  font-weight: 600;
}
.item .desc {
  margin-top: 10px;
  letter-spacing: 2px;
}


.item .post-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  color: #8d8d8d;
  font-size: 13px;
}
</style>