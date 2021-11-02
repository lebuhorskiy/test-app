export default class BaseModel {
    constructor (src = {}) {
        this.buildModel(src, this.schema)
    }

    get schema () {
        throw new Error('Model schema not defined.')
    }

    buildModel (src = {}, schema = {}) {
        Object.keys(schema).forEach(schemaProp => {
            const formatSrcPropType = schemaProp
            const srcPropType = typeof src[formatSrcPropType]

            if (['number', 'boolean', 'string', 'object'].includes(srcPropType) && ![undefined, null].includes(src[formatSrcPropType])) {
                this[schemaProp] = src[formatSrcPropType]
            } else {
                this[schemaProp] = schema[schemaProp]
            }
        })
    }

    baseClear () {
        Object.keys(this).forEach(key => {
            if (Array.isArray(this[key]) && !this[key].length) {
                delete this[key]
            }
            if (['', undefined].includes(this[key])) {
                delete this[key]
            }
        })

        return this
    }
}
