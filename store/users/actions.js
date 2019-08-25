import UsersManagement from '~/management/UsersManagement'
import UserManagement from '~/management/UserManagement'
import ExceptionManagement from '~/management/ExceptionManagement';

const usersManagement = new UsersManagement()
const exceptionManagement = new ExceptionManagement()

export default {
    setUsersList({ commit }) {
        try {
            const response = [
                { firstname: 'Krystian', lastname: 'Kędra', age: 25 },
                { firstname: 'Paweł', lastname: 'Nowak', age: 27 }
            ]
            usersManagement.setUsers(response, commit)
        } catch (ex) {
            exceptionManagement.provideToStateErrorMessage(ex, commit)
        }
    },
    createUser({ commit }, payload) {
        try {
            usersManagement.createUser(new UserManagement(payload), commit)
        } catch (ex) {
            exceptionManagement.provideToStateErrorMessage(ex, commit)
        }
    },
    deleteUser({ commit }, payload) {
        try {
            usersManagement.deleteUser(payload, commit)
        } catch (ex) {
            exceptionManagement.provideToStateErrorMessage(ex, commit)
        }
    }
}