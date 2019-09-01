import AuthManagement from '~/management/AuthManagement'
import * as MUTATIONS from '~/store/mutationTypes'

export default {
    createAuthManagement({ getters, commit }) {
        commit(MUTATIONS.CREATE_AUTH_MANAGEMENT, new AuthManagement(getters, commit))
    }
}