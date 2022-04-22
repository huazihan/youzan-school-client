<template>
  <div>
    <van-nav-bar title="学校公告" left-arrow @click-left="back()"></van-nav-bar>
    <PostItem :list="list"/>
  </div>
</template>

<script>
import PostItem from "../components/PostItem";

export default {
  name: "SchoolNotice",
  components: {PostItem},
  data() {
    return {
      list: [
        {
          title: '2022年春季开学时间安排',
          desc: "经学校校委会商议，由于疫情的影响将开学时间改为2月20日，望悉知。",
          time: '2月10日',
          view: '999+'
        },
      ]
    }
  },
  methods: {
    back() {
      history.back();
    }
  }
}
</script>

<style scoped>

</style>