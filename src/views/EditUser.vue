<template>
  <div class="home container">
    <div class="user-information">
      <div class="form">
        <div class="form__top">
          <div class="inputs">
            <div class="form-group">
              <label for="">Ім'я</label>
              <input v-model="$v.form.name.$model" :class="{'is-invalid': $v.form.name.$error}" type="text" pattern="^[\p{L}]+$/u">
            </div>
            <div class="form-group">
              <label for="">Прізвище</label>
              <input v-model="$v.form.lastName.$model" :class="{'is-invalid': $v.form.lastName.$error}" type="text">
            </div>
            <div class="form-group">
              <label for="">Номер посвідчення особи</label>
              <input v-model="$v.form.documentId.$model" :class="{'is-invalid': $v.form.documentId.$error}" type="text">
            </div>
            <div class="form-group">
              <label for="">Номер мобільного телефону</label>
              <input v-model="$v.form.phone.$model" :class="{'is-invalid': $v.form.phone.$error}" type="text">
            </div>
          </div>
          <div class="avatar">
            <input type="file" id="avatar">
            <label for="avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 17.4444C20 17.857 19.8468 18.2527 19.574 18.5444C19.3012 18.8361 18.9312 19 18.5455 19H5.45455C5.06878 19 4.69881 18.8361 4.42603 18.5444C4.15325 18.2527 4 17.857 4 17.4444V8.88889C4 8.47633 4.15325 8.08067 4.42603 7.78894C4.69881 7.49722 5.06878 7.33333 5.45455 7.33333H8.36364L9.81818 5H14.1818L15.6364 7.33333H18.5455C18.9312 7.33333 19.3012 7.49722 19.574 7.78894C19.8468 8.08067 20 8.47633 20 8.88889V17.4444Z" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <strong>Завантажити зображення</strong>
              <span>Максимальний розмір файлу<br>
  Це 20mb</span>
            </label>
          </div>
        </div>
        <div class="form__bottom">
          <div class="input">
            <select name="" v-model="form.weapon" id="">
              <option value="Приватна" selected>Приватна</option>
              <option value="Не Приватна">Не Приватна</option>
            </select>
            <div class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8.00098V7.25098C3.58579 7.25098 3.25 7.58676 3.25 8.00098H4ZM5 7V6.25C4.80094 6.25 4.61005 6.32913 4.46938 6.46996C4.3287 6.61079 4.24978 6.80177 4.25 7.00082L5 7ZM4.25 7.00098C4.25 7.13905 4.13807 7.25098 4 7.25098V8.75098C4.9665 8.75098 5.75 7.96747 5.75 7.00098H4.25ZM4.25 7.00082L4.25 7.00098H5.75C5.75 7.00182 5.75 6.99998 5.75 6.99918L4.25 7.00082ZM5 7.75H19.5V6.25H5V7.75ZM19.5 7.75C19.3619 7.75 19.25 7.63807 19.25 7.5H20.75C20.75 6.80964 20.1904 6.25 19.5 6.25V7.75ZM19.25 7.5V9.5H20.75V7.5H19.25ZM19.25 9.5C19.25 9.36193 19.3619 9.25 19.5 9.25V10.75C20.1904 10.75 20.75 10.1904 20.75 9.5H19.25ZM19.5 9.25H5V10.75H19.5V9.25ZM5 9.25C4.86193 9.25 4.75 9.13807 4.75 9H3.25C3.25 9.9665 4.0335 10.75 5 10.75V9.25ZM4.75 9V8.00098H3.25V9H4.75Z" fill="#929BAA"/>
                <path d="M13 12V13C13 14.1046 12.1046 15 11 15H9" stroke="#929BAA" stroke-width="1.5"/>
                <path d="M19 10L19.6709 10.3354C19.7871 10.1029 19.7747 9.82681 19.638 9.6057C19.5014 9.38459 19.26 9.25 19 9.25V10ZM18.2764 11.4472L17.6056 11.1118L17.6056 11.1118L18.2764 11.4472ZM8.77782 12V11.25C8.39566 11.25 8.07461 11.5374 8.03241 11.9172L8.77782 12ZM8.09888 18.1104L8.84429 18.1933L8.09888 18.1104ZM4.12342 17.8896L3.37801 17.8067L4.12342 17.8896ZM5.00004 10V9.25C4.61788 9.25 4.29683 9.53735 4.25463 9.91718L5.00004 10ZM9.00004 10.75H19V9.25H9.00004V10.75ZM18.3292 9.66459L17.6056 11.1118L18.9473 11.7826L19.6709 10.3354L18.3292 9.66459ZM17.6056 11.1118C17.5633 11.1965 17.4767 11.25 17.382 11.25V12.75C18.0449 12.75 18.6508 12.3755 18.9473 11.7826L17.6056 11.1118ZM17.382 11.25H8.77782V12.75H17.382V11.25ZM8.03241 11.9172L7.35347 18.0276L8.84429 18.1933L9.52323 12.0828L8.03241 11.9172ZM7.35347 18.0276C7.3394 18.1542 7.23239 18.25 7.105 18.25V19.75C7.99671 19.75 8.74582 19.0795 8.84429 18.1933L7.35347 18.0276ZM7.105 18.25H5.11731V19.75H7.105V18.25ZM5.11731 18.25C4.9683 18.25 4.85238 18.1205 4.86884 17.9724L3.37801 17.8067C3.26283 18.8434 4.07429 19.75 5.11731 19.75V18.25ZM4.86884 17.9724L5.74545 10.0828L4.25463 9.91718L3.37801 17.8067L4.86884 17.9724ZM5.00004 10.75H9.00004V9.25H5.00004V10.75Z" fill="#929BAA"/>
                <path d="M18 6V7" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M8 7L6 10" stroke="#929BAA"/>
                <path d="M10 7L8 10" stroke="#929BAA"/>
              </svg>
            </div>
          </div>
          <div class="input">
            <input type="number" v-model="$v.form.carNumber.$model" :class="{'is-invalid': $v.form.carNumber.$error}">
            <div class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="10" width="16" height="6" rx="1" stroke="#929BAA" stroke-width="1.5"/>
                <path d="M5 16H9V17C9 17.5523 8.55228 18 8 18H6C5.44772 18 5 17.5523 5 17V16Z" stroke="#929BAA" stroke-width="1.5"/>
                <path d="M15 16H19V17C19 17.5523 18.5523 18 18 18H16C15.4477 18 15 17.5523 15 17V16Z" stroke="#929BAA" stroke-width="1.5"/>
                <path d="M7.8174 6.97101C8.17884 6.3686 8.82986 6 9.53238 6H14.4676C15.1701 6 15.8212 6.3686 16.1826 6.97101L18 10H6L7.8174 6.97101Z" stroke="#929BAA" stroke-width="1.5"/>
                <path d="M10 13H14" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M6 13H7" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M17 13H18" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="btn btn-primary" @click="save">
          Далі <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12L19 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 7L19 12L14 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import {mapActions, mapGetters} from 'vuex'
import { required, maxLength, numeric, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        name: null,
        lastName: null,
        documentId: null,
        carNumber: null,
        weapon: "Приватна",
        phone: null
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(48),
        minLength: minLength(2),
        isValidName (name) {
          const regex = /^[\p{L}]+$/u
          return regex.test(name)
        }
      },
      lastName: {
        required,
        maxLength: maxLength(48),
        minLength: minLength(2)
      },
      documentId: {
        required,
        maxLength: maxLength(48),
        minLength: minLength(5),
        isValidDocument (document) {
          const regex = /^[\p{L}]+/u
          return regex.test(document)
        }
      },
      phone: {
        minLength: minLength(10),
        maxLength: maxLength(13),
        isValidPhone (phone) {
          const regex = /[2-9]{1}\d{2}/
          return regex.test(phone)
        }
      },
      carNumber: {
        minLength: minLength(4),
        maxLength: maxLength(15),
        numeric
      }
    }
  },
  methods: {
    ...mapActions({
      updateUser: 'auth/updateUser'
    }),
    save () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('Заповніть всі поля')
        return
      }
      this.updateUser(this.form).then(() => {
        this.$router.push('/')
      })
    },
    prepareData () {
      const user = this.user
      const form = this.form
      this.form = Object.assign({}, form, user)
    }
  },
  mounted () {
    this.prepareData()
  },
  mixins: [validationMixin],
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
}
</script>
<style scoped lang="scss">
.user-information {
  .form {
    border-radius: 4px;
    overflow: hidden;
    margin-top: 32px;
    background: #FFFFFF;
    box-shadow: 0px 8px 20px rgba(56, 69, 93, 0.1), 0px 4px 9px rgba(56, 69, 93, 0.08), 0px 2px 5px rgba(56, 69, 93, 0.0596107), 0px 1px 3px rgba(56, 69, 93, 0.05), 0px 0.598509px 1.5px rgba(56, 69, 93, 0.0403893), 0px 0.249053px 1px rgba(56, 69, 93, 0.03);
    .form__top {
      padding: 16px;
      display: flex;
      align-items: center;
      grid-gap: 16px;
      .inputs {
        flex-grow: 1;
        .form-group {
          margin-top: 0;
        }
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
        grid-row-gap: 5px;
        input {
          border: 1px solid #CFD3DE;
          border-radius: 4px;
          height: 40px;
          text-align: left;
          transition: 0.2s;
          padding: 0 16px;
          &.is-invalid {
            border-color: red;
          }
        }
      }
      .avatar {
        min-width: 144px;
        width: 144px;
        input {
          display: none;
        }
        label {
          display: flex;
          cursor: pointer;
          justify-content: center;
          flex-wrap: wrap;
          border: 1px dashed #CFD3DE;
          border-radius: 4px;
          padding: 21px 16px;
          padding-top: 15px;
          strong {
            font-weight: 500;
            font-size: 12px;
            display: block;
            width: 100%;
            line-height: 16px;
            text-align: center;
            letter-spacing: 0.01em;
            color: #929BAA;
          }
          span {
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            color: #CFD3DE;
          }
        }
      }
    }
    .form__bottom {
      display: flex;
      background: #F7F8FA;
      .input {
        flex: 1;
        padding: 16px;
        display: flex;
        align-items: center;
        select {
          flex-grow: 1;
          border: 1px solid #CFD3DE;
          padding: 8px;
          background-color: transparent;
          font-size: 14px;
          line-height: 24px;
          text-align: right;
          outline: none;
          cursor: pointer;
          color: #38455D;
          border-radius: 4px;
          height: 42px;
          background-image: url('~@/assets/icons/arrow.svg');
          background-repeat: no-repeat;
          background-position: left 8px center;
          appearance: none;
        }
        input {
          flex-grow: 1;
          border: 1px solid #CFD3DE;
          padding: 8px;
          background: transparent;
          font-size: 14px;
          line-height: 24px;
          text-align: right;
          color: #38455D;
          border-radius: 4px;
          &::placeholder {
            color: #38455D;
          }
          &.is-invalid {
            border-color: red;
          }
          transition: 0.2s;
        }
        .icon {
          padding-left: 20px;
        }
      }
      .input + .input {
        border-left: 1px solid #CFD3DE
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    .btn-primary {
      padding-left: 58px;
      padding-right: 21px;
      font-size: 14px;
      line-height: 24px;
      color: #fff;
      display: flex;
      align-items: center;
      padding-top: 8px;
      padding-bottom: 8px;
      svg {
        margin-left: 17px;
      }
    }
  }
}
</style>