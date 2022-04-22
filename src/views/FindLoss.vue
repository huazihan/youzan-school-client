<template>
<div>
  <van-nav-bar title="找人找物" left-arrow @click-left="back()"></van-nav-bar>
  <div class="container">
    <PostItem :list="list"></PostItem>
  </div>
</div>
</template>

<script>
import PostItem from "../components/PostItem";
export default {
  name: "FindLoss",
  components: {PostItem},
  data() {
    return {
      list: [
        {
          title: '【找物】 寻找丢失的钥匙',
          desc: "在xxxx丢失的，大概是.................找到者请联系我：13333333333",
          time: '今天',
          view: 36
        },
        {
          title: '【找物】 寻找丢失的身份证',
          desc: "在xxxx丢失的，大概是.................找到者请联系我：13333333333",
          time: '前天',
          view: 12
        },
      ]
    }
  },
  methods: {
    back() {
      history.back()
    }
  }
}
</script>

<style scoped>

</style>