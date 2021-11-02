import $store from '../store'

export async function checkAccessMiddleware (to, from, next) {
    let currentUser = $store.getters['auth/user']
    if (!currentUser) {
        await $store.dispatch('auth/getCurrentUser')
        currentUser = $store.getters['auth/user']
    }
    const isAuthRoute = to.matched.some(item => item.meta.isAuth)
    const isGuestRoute = to.meta.isGuest

    if (isGuestRoute) {
        if (currentUser) {
            next('/')
        }
    }

    if (!isAuthRoute) return next()
    if (isAuthRoute && !currentUser) {
        next('/login')
    }
    if (isAuthRoute && to.name !== 'EditUser' && !currentUser.isFillInformation()) {
        next('/user/edit')
    }

    next()
}