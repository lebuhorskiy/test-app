export default class PermissionsService {
    static updatePermissions (permissions) {
        localStorage.setItem('permissions', JSON.stringify(permissions))
    }
}