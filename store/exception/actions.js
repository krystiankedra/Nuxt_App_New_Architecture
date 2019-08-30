import ExceptionManagement from '~/management/ExceptionManagement'
import * as MUTATIONS from '~/store/mutationTypes'

export default {
    createExceptionManagement({ getters, commit }) {
        commit(MUTATIONS.CREATE_EXCEPTION_MANAGEMENT, new ExceptionManagement(getters, commit))
    }
}