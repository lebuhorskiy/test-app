<template>
  <div class="create-permission container">
    <div class="logo">
      Logo
    </div>
    <div class="form">
      <div class="type">
        <input type="radio" v-model="$v.permission.type.$model" name="type" id="walk" :value="IS_WALK">
        <label for="walk">
          <svg width="24" class="default" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5Z" stroke="#929BAA" stroke-width="2" stroke-miterlimit="2"/>
            <path d="M12.5 8.5V13L13 17L14.5 20" stroke="#929BAA" stroke-width="1.5" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 13L9.5 17.5L9 20" stroke="#929BAA" stroke-width="1.5" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5 13L15 10.5L12.5 8.5L10.5 11.5L8 13" stroke="#929BAA" stroke-width="1.5" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg width="24" class="hover" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5Z" stroke="#409FFF" stroke-width="2" stroke-miterlimit="2"/>
            <path d="M12.5 8.5V13L13 17L14.5 20" stroke="#409FFF" stroke-width="1.5" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 13L9.5 17.5L9 20" stroke="#409FFF" stroke-width="1.5" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5 13L15 10.5L12.5 8.5L10.5 11.5L8 13" stroke="#409FFF" stroke-width="1.5" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </label>
        <input type="radio" v-model="$v.permission.type.$model" name="type" :value="IS_CAR" id="car">
        <label for="car">
          <svg width="24" class="default" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="10" width="16" height="6" rx="1" stroke="#929BAA" stroke-width="1.5"/>
            <path d="M5 16H9V17C9 17.5523 8.55228 18 8 18H6C5.44772 18 5 17.5523 5 17V16Z" stroke="#929BAA" stroke-width="1.5"/>
            <path d="M15 16H19V17C19 17.5523 18.5523 18 18 18H16C15.4477 18 15 17.5523 15 17V16Z" stroke="#929BAA" stroke-width="1.5"/>
            <path d="M7.8174 6.97101C8.17884 6.3686 8.82986 6 9.53238 6H14.4676C15.1701 6 15.8212 6.3686 16.1826 6.97101L18 10H6L7.8174 6.97101Z" stroke="#929BAA" stroke-width="1.5"/>
            <path d="M10 13H14" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6 13H7" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M17 13H18" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <svg width="24" class="hover" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="10" width="16" height="6" rx="1" stroke="#409FFF" stroke-width="1.5"/>
            <path d="M5 16H9V17C9 17.5523 8.55228 18 8 18H6C5.44772 18 5 17.5523 5 17V16Z" stroke="#409FFF" stroke-width="1.5"/>
            <path d="M15 16H19V17C19 17.5523 18.5523 18 18 18H16C15.4477 18 15 17.5523 15 17V16Z" stroke="#409FFF" stroke-width="1.5"/>
            <path d="M7.8174 6.97101C8.17884 6.3686 8.82986 6 9.53238 6H14.4676C15.1701 6 15.8212 6.3686 16.1826 6.97101L18 10H6L7.8174 6.97101Z" stroke="#409FFF" stroke-width="1.5"/>
            <path d="M10 13H14" stroke="#409FFF" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6 13H7" stroke="#409FFF" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M17 13H18" stroke="#409FFF" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </label>
        <input type="number" class="carNumber" :class="{'is-invalid': $v.permission.carNumber.$error}" v-model="$v.permission.carNumber.$model" v-if="permission.type === IS_CAR">
      </div>
      <div class="period">
        <div class="dates">
          <label for="">Виберіть дату</label>
          <div class="inputs-list">
            <input type="date" :class="{'is-invalid': $v.permission.dateFrom.$error }" v-model="$v.permission.dateFrom.$model">
            <div class="separator"></div>
            <input type="date" :class="{'is-invalid': $v.permission.dateTo.$error }" v-model="$v.permission.dateTo.$model">
          </div>
        </div>
        <div class="times">
          <label for="">Виберіть час</label>
          <div class="inputs-list">
            <input type="time" v-model="$v.permission.timeFrom.$model" :class="{'is-invalid': $v.permission.timeFrom.$error }">
            <div class="separator"></div>
            <input type="time" v-model="$v.permission.timeTo.$model" :class="{'is-invalid': $v.permission.timeTo.$error }">
          </div>
        </div>
      </div>
      <div class="purpose form-group">
        <label for="">Мета візиту</label>
        <textarea name="" v-model="$v.permission.purpose.$model" id="" ></textarea>
      </div>
      <div class="weapon">
        <div class="checkbox">
          <input type="checkbox" id="withWeapon" v-model="permission.withWeapon">
          <label for="withWeapon">Вхід зі зброєю</label>
        </div>
        <div class="alert">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#CFD3DE"/>
            <path d="M7.49327 10.5171L7 5.21692V3H9V5.21692L8.53363 10.5171H7.49327ZM7.07175 13V11.6016H8.92825V13H7.07175Z" fill="#929BAA"/>
          </svg>
        </div>
        <select v-if="permission.withWeapon" :class="{'is-invalid': $v.permission.weapon.$error }" v-model="$v.permission.weapon.$model" id="">
          <option value="Приватна" selected>Приватна</option>
          <option value="Не Приватна">Не Приватна</option>
        </select>
      </div>
      <div class="comment form-group">
        <label for="">Коментар</label>
        <textarea name="" v-model="permission.description" id="" ></textarea>
      </div>
    </div>
    <div class="conditions">
      <div class="checkbox">
        <input type="checkbox" v-model="$v.agreement_1.$model"  id="one">
        <label :class="{'is-invalid': $v.agreement_1.$error }" for="one">Цілісність даних підтверджує</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" v-model="$v.agreement_2.$model" id="two">
        <label :class="{'is-invalid': $v.agreement_2.$error }" for="two">З правилами поведінки в школи погоджуються</label>
      </div>
    </div>
    <div class="buttons">
      <button class="btn btn-cancel" @click="$router.push('/')">Повернутись</button>

      <div class="btn btn-accent" @click="save">Зберегти
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7222 20H6.27778C5.80628 20 5.3541 19.8127 5.0207 19.4793C4.6873 19.1459 4.5 18.6937 4.5 18.2222V5.77778C4.5 5.30628 4.6873 4.8541 5.0207 4.5207C5.3541 4.1873 5.80628 4 6.27778 4H16.0556L20.5 8.44444V18.2222C20.5 18.6937 20.3127 19.1459 19.9793 19.4793C19.6459 19.8127 19.1937 20 18.7222 20Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.5 20V13H8.5V20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.5 4V8H15.5V4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import PermissionModel from '../models/PermissionModel'
import { IS_CAR, IS_WALK } from '../definitions/permission-types'
import { required, sameAs, requiredIf } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      agreement_1: false,
      agreement_2: false,
      IS_WALK,
      IS_CAR,
      permission: {}
    }
  },
  validations: {
    agreement_1: {
      sameAs: sameAs(() => true)
    },
    agreement_2: {
      sameAs: sameAs(() => true)
    },
    permission: {
      type: {
        required
      },
      carNumber: {
        required: requiredIf(function () {
          return this.permission.type === this.IS_CAR
        })
      },
      dateFrom: {
        required,
        isValid (date) {
          const b = String(date).split(/\D/);
          const currentDate = new Date(b[0], --b[1], b[2]);
          const now = new Date()
          return currentDate > now
        }
      },
      dateTo: {
        required,
        isValid (dateTo) {
          const date = this.permission.dateFrom;
          const b = String(date).split(/\D/);
          const currentDate = new Date(b[0], --b[1], b[2]);

          const c = String(dateTo).split(/\D/);
          const dateToOffset = new Date(c[0], --c[1], c[2]);
          return currentDate <= dateToOffset
        },
      },
      timeFrom: {
        required
      },
      timeTo: {
        required,
        isValid (timeTo) {
          const timeFrom = this.permission.timeFrom
          return timeTo > timeFrom
        }
      },
      purpose: {},
      weapon: {},
    }
  },
  mixins: [validationMixin],
  methods: {
    ...mapActions({
      addPermission: 'permissions/addPermission'
    }),
    save () {
      this.$v.$touch()
      if (this.$v.$invalid) return
      this.addPermission(this.permission).then(() => {
        this.$router.push('/')
      })
    }
  },
  mounted () {
    this.permission = new PermissionModel()
  }
}
</script>
<style scoped lang="scss">
.logo {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  display: block;
  margin: 32px 0;
  color: #409FFF;
}
.form {
  background: #FFFFFF;
  padding: 16px;
  overflow: hidden;
  box-shadow: 0px 3px 8px rgba(56, 69, 93, 0.03), 0px 1.5px 3px rgba(56, 69, 93, 0.04), 0px 0.5px 1px rgba(56, 69, 93, 0.1);
  border-radius: 4px;
  .type {
    display: flex;
    grid-gap: 7px;
    input[type="radio"] {
      display: none;
    }
    .carNumber {
      width: 101px;
      border: 1px solid #CFD3DE;
      padding: 8px;
      border-radius: 4px;
      &.is-invalid {
        border: 1px solid red;
      }
    }
    label {
      width: 40px;
      height: 40px;
      display: flex;
      border-radius: 4px;
      overflow: hidden;
      transition: 0.2s;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      svg.hover {
        display: none;
      }
      &:hover {
        background: #E5F2FF;
        svg.hover {
          display: block;
        }
        svg.default {
          display: none;
        }
      }
    }
    input:checked + label {
      background: #E5F2FF;
      svg.hover {
        display: block;
      }
      svg.default {
        display: none;
      }
    }
  }
  .period {
    margin-top: 16px;
    display: flex;
    grid-gap: 32px;
    & > div {
      flex: 1;
      label {
        line-height: 24px;
        color: #929BAA;
      }
      .inputs-list {
        display: flex;
        align-items: center;
        input {
          flex-grow: 1;
          overflow: hidden;
          border: 1px solid #CFD3DE;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          &.is-invalid {
            border: 1px solid red;
          }
        }
        .separator {
          margin: 0 8px;
          height: 1px;
          width: 16px;
          background: #929BAA;
        }
      }
    }
  }
  .purpose {
    textarea {
      resize: none;
      height: 64px;
      width: 100%;
      border: 1px solid #CFD3DE;
      border-radius: 4px;
      outline: none;
      padding: 8px;
    }
  }
  .weapon {
    margin-top: 16px;
    display: flex;
    align-items: center;
    .checkbox {
      display: flex;
      align-items: center;
      input {
        width: 16px;
        height: 16px;
      }
      label {
        cursor: pointer;
        margin-left: 3px;
        &.is-invalid {
          color: red;
        }
      }
    }
    .alert {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-left: 12px;
    }
    select {
      margin-left: 10px;
      padding: 8px 12px;
      border: 1px solid #CFD3DE;
      outline: none;
      font-size: 14px;
      line-height: 24px;
      color: #38455D;
      cursor: pointer;
      border-radius: 4px;
      &.is-invalid {
        border: 1px solid red;
      }
    }
  }
  .comment {
    textarea {
      width: 272px;
      border: 1px solid #CFD3DE;
      min-height: 40px;
      resize: none;
      outline: none;
      padding: 5px;
      font-size: 14px;
      border-radius: 4px;
    }
  }
}
.conditions {
  margin-top: 16px;
  margin-bottom: 32px;
  .checkbox {
    display: flex;
    align-items: center;
    input {
      cursor: pointer;
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }
    label {
      cursor: pointer;
      line-height: 24px;
      color: #38455D;
      &.is-invalid {
        color: red;
      }
    }
  }
  .checkbox + .checkbox {
    margin-top: 8px;
  }
}
.buttons {
  display: flex;
  justify-content: center;
  grid-gap: 16px;
  .btn-cancel {
    padding: 8px 25px;
  }
  .btn-accent {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 8px 24.5px;
    svg {
      margin-left: 12px;
    }
  }
}
</style>