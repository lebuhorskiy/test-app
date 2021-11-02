import UserModel from '@/models/UserModel'
export default class AuthService {
    static getCurrentUser () {
        return localStorage.getItem('user') || null
    }
    static setUser (model) {
        localStorage.setItem('user', JSON.stringify(model))
    }
    static login ({ getters, code }) {
        return new Promise((res) => {
            if (getters.tempUser.code !== Number(code)) {
                throw new Error("Code not valid")
            }
            this.setUser(new UserModel({ email: getters.tempUser.email }))
            const user = this.getCurrentUser()
            res(user)
        })
    }
    static updateUser (data) {
        return new Promise((res) => {
            const user = JSON.parse(this.getCurrentUser())
            const resultUser = Object.assign({}, user, data)
            const model = new UserModel(resultUser)
            this.setUser(model)
            res(resultUser)
        })

    }
}