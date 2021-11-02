import BaseModel from './BaseModel'
import { IS_WALK } from '../definitions/permission-types'
export default class PermissionModel extends BaseModel {
    get schema () {
        return {
            type: IS_WALK,
            carNumber: null,
            dateFrom: null,
            dateTo: null,
            timeFrom: null,
            timeTo: null,
            purpose: null,
            withWeapon: false,
            weaponType: null,
            description: null
        }
    }

    prepareCreate () {
        this.baseClear()

        return this
    }

    prepareUpdate () {
        this.baseClear()

        return this
    }
}
