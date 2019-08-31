import UsersManagement from '~/management/UsersManagement'
import ExceptionManagement from '~/management/ExceptionManagement'
import * as MUTATIONS from '~/store/mutationTypes'

export default {
    createUsersManagement({ getters, commit }) {
        commit(MUTATIONS.CREATE_USERS_MANAGEMENT, new UsersManagement(getters, commit))
    },
    setUsersList({ commit }) {
        try {
            const response = [
                { id: 1, firstname: 'Krystian', lastname: 'Kędra', age: 24 },
                { id: 2, firstname: 'Mateusz', lastname: 'Kowalski', age: 34 },
                { id: 3, firstname: 'Marek', lastname: 'Nowak', age: 27 },
            ]
            commit(MUTATIONS.SET_USERS_LIST, response)
        } catch (ex) {
            ExceptionManagement.setException(ex)
        }
    },
    setUserDetails({ getters }, payload) {
        const usersManagement = getters.getUsersManagement
        usersManagement.setUserDetails(Number(payload))
    }
}