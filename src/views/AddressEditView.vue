<template>
  <van-nav-bar title="地址编辑" left-arrow @click-left="back()"/>
  <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
  />
</template>

<script>
import { areaList } from '@vant/area-data';
export default {
  name: "AddressEdit",
  data() {
    return {
     areaList
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