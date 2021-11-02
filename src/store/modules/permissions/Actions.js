export default {
    addPermission ({ commit }, model) {
        return new Promise((res, rej) => {
            try {
                commit('ADD_PERMISSION', model)
                res()
            } catch (e) {
                rej()
            }
        })
    }
}
