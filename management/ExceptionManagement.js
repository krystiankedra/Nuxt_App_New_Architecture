import * as MUTATIONS from '~/store/mutationTypes'

export default class ExceptionManagement {
    constructor() {}

    provideToStateErrorMessage(exception, commit) {
        commit(MUTATIONS.SET_ERROR_MESSAGE, exception)
    }

}