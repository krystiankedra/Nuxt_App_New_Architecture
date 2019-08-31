import * as MUTATIONS from '~/store/mutationTypes'

export default class User {

    constructor(getters, commit) {
        this.user = () => getters.getUserDetails
        this.commit = commit
    }

    getUserDetails() {
        return this.user()
    }

    changePropertyValue(key, value) {
        this.commit(MUTATIONS.CHANGE_USER_PROPERTY_VALUE, { key, value })
    }

}