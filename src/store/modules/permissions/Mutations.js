import PermissionsService from "../../../services/PermissionsService";
export default {
    ADD_PERMISSION (state, model) {
        if (!state.permissions) {
            state.permissions = []
        }

        state.permissions.push(model)
        PermissionsService.updatePermissions(state.permissions)
    }
}
