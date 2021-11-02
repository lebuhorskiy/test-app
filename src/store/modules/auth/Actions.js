import makeId from '../../../helpers/makeId'
import AuthService from '../../../services/AuthService'
import UserModel from "../../../models/UserModel"
export default {
    callSendCode ({ commit }, email) {
        // send request to server
        // fake set code
        const code = makeId(10000, 100000)
        console.log('code', code)
        commit('SET_CODE', {
            email,
            code
        })
    },
    login ({ commit, getters }, code) {
        return AuthService.login({ getters, code }).then(user => {
            commit('SET_USER', new UserModel(JSON.parse(user)))
            return user
        })
    },
    async getCurrentUser ({ commit }) {
        return new Promise((res) => {
            const user = AuthService.getCurrentUser()
            if (user) {
                commit('SET_USER', new UserModel(JSON.parse(user)))
            }
            res()
        })
    },
    updateUser ({ commit }, data) {
        AuthService.updateUser(data).then(user => {
            commit('SET_USER', new UserModel(user))
        })
    },
    cancelAuth ({ commit }) {
        commit('CANCEL_AUTH')
    }
}
