import * as MUTATIONS from '~/store/mutationTypes'

export default class ExceptionManagement {

    constructor(getters, commit) {
        this.exception = getters.getException
        this.commit = commit
    }

    setException(exception) {
        this.commit(MUTATIONS.SET_EXCEPTION, exception)
    }

}