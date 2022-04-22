<template>
  <div>
    <van-nav-bar title="我的地址" left-arrow @click-left="back()"/>
    <van-address-list
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onAdd"
    />
  </div>
</template>

<script>
export default {
  name: "MyAddress",
  data() {
    return {
      chosenAddressId: '1',

      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '湖北省武汉市洪山区狮子山街野芷湖1号 湖北生物科技职业学院',
          isDefault: true,
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '西伯利亚',
        },
      ]
    }
  },
  methods: {
    back() {
      history.back()
    },
    onAdd() {
      this.$router.push('/address-edit')
    }
  }
}
</script>

<style scoped>

</style>