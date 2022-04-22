<template>
  <div>
    <van-nav-bar title="社团活动" left-arrow @click-left="back()"/>
    <van-empty image="search" description="暂无活动" />
  </div>
</template>

<script>
export default {
  name: "Activity",
  methods: {
    back() {
      history.back()
    }
  }
}
</script>

<style scoped>

</style>