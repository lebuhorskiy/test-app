<template>
  <div class="confirmation">
    <div class="form">
      <h2>Андрій Андрійович</h2>
      <p>На ваш електронний лист надсилається одноразовий код.</p>
      <br>
      <div class="form-group">
        <label for="">Код підтвердження</label>
        <div class="input-list">
          <input type="text" @input="nextFocus($event, 1)" autofocus maxlength="1">
          <div class="separator">-</div>

          <input type="text" @input="nextFocus($event, 2)" ref="code2" maxlength="1">
          <div class="separator">-</div>

          <input type="text" @input="nextFocus($event, 3)" ref="code3" maxlength="1">
          <div class="separator">-</div>

          <input type="text" @input="nextFocus($event, 4)" ref="code4" maxlength="1">
          <div class="separator">-</div>

          <input type="text" @input="nextFocus($event, 5)" ref="code5" maxlength="1">
        </div>
      </div>
      <div class="form__buttons">
        <button @click="cancelAuth" class="btn btn-cancel">Скасувати</button>
        <button class="btn btn-accent" type="submit" @click="login">Підтвердити</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      parts: {
        part_1: null,
        part_2: null,
        part_3: null,
        part_4: null,
        part_5: null
      }
    }
  },
  methods: {
    ...mapActions({
      makeLogin: 'auth/login',
      cancelAuth: 'auth/cancelAuth'
    }),
    nextFocus ($event, step) {
      this.parts[`part_${step}`] = $event.target.value
      const reference = this.$refs[`code${step + 1}`]
      if (reference) {
        this.$refs[`code${step + 1}`].focus()
      }
    },
    login () {
      if (this.code.length < 5) {
        alert('input code')
        return
      }
      this.makeLogin(this.code).then(() => {
        this.$router.push('/')
      }).catch((err) => {
        alert(err.message)
      })
    }
  },
  computed: {
    code () {
      return `${this.parts.part_1}${this.parts.part_2}${this.parts.part_3}${this.parts.part_4}${this.parts.part_5}`
    }
  },
}
</script>
<style scoped lang="scss">
.form {
  .form-group {
    .input-list {
      margin-top: 7px;
      display: flex;
      align-items: center;
      input, .separator {
        flex: 1;
      }
      input {
        border: 1px solid #409FFF;
        padding: 8px 0;
        text-align: center;
        font-size: 14px;
        line-height: 24px;
        color: #38455D;
        border-radius: 4px;
      }
      .separator {
        color: #929BAA;
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }
  }
  .form__buttons {
    display: flex;
    grid-gap: 16px;
    margin-top: 32px;
    button {
      flex: 1;
      padding: 8px 0;
    }
  }
}
</style>