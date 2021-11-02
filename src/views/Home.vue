<template>
  <div class="home">
    <HeaderTop></HeaderTop>
    <div class="container">
      <UserBlock></UserBlock>
      <PermissionsList></PermissionsList>
    </div>
  </div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop.vue'
import UserBlock from '@/components/user/UserBlock.vue'
import PermissionsList from '@/components/permissions/PermissionsList'
export default {
  name: 'Home',
  components: {
    HeaderTop,
    UserBlock,
    PermissionsList
  }
}
</script>
<style scoped lang="scss">
  .home {
    background: #F7F8FA;
    min-height: 100vh;
  }
</style>
