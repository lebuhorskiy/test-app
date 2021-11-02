<template>
  <div class="login container">
    <div class="body">
      <div class="logo">Logo</div>
      <Request v-if="!tempUser"></Request>
      <Confirmation v-else></Confirmation>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Request from '@/components/login/Request.vue'
import Confirmation from '@/components/login/Confirmation.vue'
export default {
  computed: {
    ...mapGetters({
      tempUser: 'auth/tempUser'
    })
  },
  components: {
    Request,
    Confirmation
  }
}
</script>
<style lang="scss">
.login {
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  .form {
    max-width: 368px;
  }
  .logo {
    width: 100%;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: #409FFF;
    text-align: center;
    margin-bottom: 138px;
  }
}

</style>