<template>
  <div>
    <van-nav-bar title="兼职招聘" left-arrow @click-left="back()"></van-nav-bar>
    <div class="container">
      <div class="list">
        <PostItem :list="list"></PostItem>
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from "../components/PostItem";
export default {
  name: "Job",
  components: {PostItem},
  data() {
    return {
      list: [
        {
          title: '亿点点奶茶店招聘兼职店员',
          desc: "时薪18元，工作时间自由，薪资日结！有午餐供应！",
          time: '今天',
          view: 242
        },
        {
          title: '招聘服务员',
          desc: "时薪20元，工作时间自由，薪资日结！",
          time: '昨天',
          view: 130
        }
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