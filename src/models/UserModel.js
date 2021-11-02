import BaseModel from './BaseModel'

export default class UserModel extends BaseModel {
    get schema () {
        return {
            name: null,
            lastName: null,
            documentId: null,
            phone: null,
            avatar: null,
            email: null,
            weapon: null,
            carNumber: null,
            isFillInformation () {
                return Boolean(this.name && this.lastName && this.phone && this.email)
            }
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
