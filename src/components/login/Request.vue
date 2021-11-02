<template>
  <div class="form">
    <form @submit.prevent="goRequestCode" class="form__body">
      <h2>Увійти</h2>
      <p>Для того, щоб ідентифікувати себе в системі, потрібно ввести номер свого мобільного телефону або email</p>
      <div class="form-group">
        <label for="">Телефон або email:</label>
        <input type="text" v-model="payload" required placeholder="Телефон або email">
      </div>
      <div class="form__buttons">
        <button class="btn btn-link">Забули пароль</button>
        <button class="btn btn-primary" type="submit">Подати заявку</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      payload: null
    }
  },
  methods: {
    ...mapActions({
      callSendCode: 'auth/callSendCode'
    }),
    goRequestCode () {
      if (!this.payload) {
        alert('Please, input phone number or email')
        return
      }
      this.callSendCode(this.payload)
    }
  }
}
</script>
<style scoped lang="scss">
.form {
  .form__buttons {
    display: flex;
    margin-top: 32px;
    grid-gap: 16px;
    button {
      padding: 8px 0;
      flex: 1;
    }
  }
}
</style>