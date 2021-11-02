export default {
    SET_CODE (state, payload) {
        state.tempUser = payload
    },
    SET_USER (state, user) {
        localStorage.setItem('user', JSON.stringify(user))
        state.user = user
    },
    CANCEL_AUTH (state) {
        state.tempUser = null
    }
}
