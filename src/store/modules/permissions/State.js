export default {
    permissions: localStorage.getItem('permissions') ? JSON.parse(localStorage.getItem('permissions')) : []
}
