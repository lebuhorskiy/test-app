<template>
  <div class="permissions-list">
    <div class="top">
      <h3>Дозвіл на в’їзд</h3>
      <div class="controls">
        <router-link :to="{ name: 'permission.create' }" class="btn btn-primary">Новий дозвіл
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 4H7.5C7.10218 4 6.72064 4.16857 6.43934 4.46863C6.15804 4.76869 6 5.17565 6 5.6V18.4C6 18.8243 6.15804 19.2313 6.43934 19.5314C6.72064 19.8314 7.10218 20 7.5 20H16.5C16.8978 20 17.2794 19.8314 17.5607 19.5314C17.842 19.2313 18 18.8243 18 18.4V8.8L13.5 4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 4V9H18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 17V11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 14H15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </router-link>
      </div>
    </div>
    <div class="list">
      <div class="list-item" v-for="(permission, k) in permissions" :key="k">
        <div class="status">
          <strong>Перевірка</strong>
          <span>9231</span>
        </div>
        <div class="time">
          <strong>{{ permission.timeFrom }}</strong>
          <span>до</span>
          <strong>{{ permission.timeTo }}</strong>
        </div>
        <div class="date">
          <strong>{{ permission.dateFrom }}</strong>
          <span>до</span>
          <strong>{{ permission.dateTo }}</strong>
        </div>
        <div class="weapon">
          <svg width="24" v-if="permission.withWeapon" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8.00098V7.25098C3.58579 7.25098 3.25 7.58676 3.25 8.00098H4ZM5 7V6.25C4.80094 6.25 4.61005 6.32913 4.46938 6.46996C4.3287 6.61079 4.24978 6.80177 4.25 7.00082L5 7ZM4.25 7.00098C4.25 7.13905 4.13807 7.25098 4 7.25098V8.75098C4.9665 8.75098 5.75 7.96747 5.75 7.00098H4.25ZM4.25 7.00082L4.25 7.00098H5.75C5.75 7.00182 5.75 6.99998 5.75 6.99918L4.25 7.00082ZM5 7.75H19.5V6.25H5V7.75ZM19.5 7.75C19.3619 7.75 19.25 7.63807 19.25 7.5H20.75C20.75 6.80964 20.1904 6.25 19.5 6.25V7.75ZM19.25 7.5V9.5H20.75V7.5H19.25ZM19.25 9.5C19.25 9.36193 19.3619 9.25 19.5 9.25V10.75C20.1904 10.75 20.75 10.1904 20.75 9.5H19.25ZM19.5 9.25H5V10.75H19.5V9.25ZM5 9.25C4.86193 9.25 4.75 9.13807 4.75 9H3.25C3.25 9.9665 4.0335 10.75 5 10.75V9.25ZM4.75 9V8.00098H3.25V9H4.75Z" fill="#38455D"/>
            <path d="M13 12V13C13 14.1046 12.1046 15 11 15H9" stroke="#38455D" stroke-width="1.5"/>
            <path d="M19 10L19.6709 10.3354C19.7871 10.1029 19.7747 9.82681 19.638 9.6057C19.5014 9.38459 19.26 9.25 19 9.25V10ZM18.2764 11.4472L17.6056 11.1118L17.6056 11.1118L18.2764 11.4472ZM8.77782 12V11.25C8.39566 11.25 8.07461 11.5374 8.03241 11.9172L8.77782 12ZM8.09888 18.1104L8.84429 18.1933L8.09888 18.1104ZM4.12342 17.8896L3.37801 17.8067L4.12342 17.8896ZM5.00004 10V9.25C4.61788 9.25 4.29683 9.53735 4.25463 9.91718L5.00004 10ZM9.00004 10.75H19V9.25H9.00004V10.75ZM18.3292 9.66459L17.6056 11.1118L18.9473 11.7826L19.6709 10.3354L18.3292 9.66459ZM17.6056 11.1118C17.5633 11.1965 17.4767 11.25 17.382 11.25V12.75C18.0449 12.75 18.6508 12.3755 18.9473 11.7826L17.6056 11.1118ZM17.382 11.25H8.77782V12.75H17.382V11.25ZM8.03241 11.9172L7.35347 18.0276L8.84429 18.1933L9.52323 12.0828L8.03241 11.9172ZM7.35347 18.0276C7.3394 18.1542 7.23239 18.25 7.105 18.25V19.75C7.99671 19.75 8.74582 19.0795 8.84429 18.1933L7.35347 18.0276ZM7.105 18.25H5.11731V19.75H7.105V18.25ZM5.11731 18.25C4.9683 18.25 4.85238 18.1205 4.86884 17.9724L3.37801 17.8067C3.26283 18.8434 4.07429 19.75 5.11731 19.75V18.25ZM4.86884 17.9724L5.74545 10.0828L4.25463 9.91718L3.37801 17.8067L4.86884 17.9724ZM5.00004 10.75H9.00004V9.25H5.00004V10.75Z" fill="#38455D"/>
            <path d="M18 6V7" stroke="#38455D" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 7L6 10" stroke="#38455D"/>
            <path d="M10 7L8 10" stroke="#38455D"/>
          </svg>
          <span v-else>-</span>
        </div>
        <div class="is-car">
          <svg width="24" v-if="permission.type === IS_CAR" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="10" width="16" height="6" rx="1" stroke="#38455D" stroke-width="1.5"/>
            <path d="M5 16H9V17C9 17.5523 8.55228 18 8 18H6C5.44772 18 5 17.5523 5 17V16Z" stroke="#38455D" stroke-width="1.5"/>
            <path d="M15 16H19V17C19 17.5523 18.5523 18 18 18H16C15.4477 18 15 17.5523 15 17V16Z" stroke="#38455D" stroke-width="1.5"/>
            <path d="M7.8174 6.97101C8.17884 6.3686 8.82986 6 9.53238 6H14.4676C15.1701 6 15.8212 6.3686 16.1826 6.97101L18 10H6L7.8174 6.97101Z" stroke="#38455D" stroke-width="1.5"/>
            <path d="M10 13H14" stroke="#38455D" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6 13H7" stroke="#38455D" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M17 13H18" stroke="#38455D" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span v-else>-</span>
        </div>
        <div class="name">
          {{ user.name }}<br>{{ user.lastName }}
        </div>
        <a href="" class="view">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C4 12 6.90909 7 12 7C17.0909 7 20 12 20 12C20 12 17.0909 17 12 17C6.90909 17 4 12 4 12Z" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#929BAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { IS_CAR } from '../../definitions/permission-types'
export default {
  data() {
    return {
      IS_CAR
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      permissions: 'permissions/permissions'
    })
  }
}
</script>
<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  .controls {
    .btn-primary {
      display: flex;
      align-items: center;
      line-height: 24px;
      padding: 8px 29px;
      svg {
        margin-left: 10px;
      }
    }
  }
}
.permissions-list {
  margin-bottom: 19px;
  .list {
    margin-top: 16px;
    .list-item {
      display: flex;
      padding: 12px 17px;
      border-left: 4px solid #FFCC33;
      background: #FFF9E6;
      justify-content: space-between;
      align-items: center;
      .status {
        width: 10%;
        strong {
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          display: block;
        }
        span {
          font-size: 12px;
          display: block;
          text-align: center;
        }
      }
      .time, .date {
        display: flex;
        align-items: center;
        span {
          margin: 0 14px;
          display: block;
          font-size: 12px;
          line-height: 16px;
          color: #929BAA;
        }
        strong {
          font-weight: normal;
          line-height: 24px;
          color: #38455D;
        }
      }
      .weapon {
        width: 24px;
      }
      .is-car {
        width: 24px;
      }
      .name {
        color: #38455D;
        text-align: right;
        width: 15%;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }
      &.success {
        position: relative;
        &:after {
          position: absolute;
          left: -10px;
          top: calc(50% - 8px);
          width: 16px;
          height: 16px;
          content: "";
          display: block;
          background-color: #83DA91;
          background-image: url("~@/assets/icons/check.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: 10px;
          border-radius: 100%;
        }
      }
    }
    .list-item + .list-item {
      margin-top: 1px;
    }
  }
}
</style>