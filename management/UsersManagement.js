import * as MUTATIONS from '~/store/mutationTypes'
import User from '~/management/UserManagement'


export default class UsersManagement {

    constructor() {}

    setUsers(users, commit) {
        const usersList = users.map(user => new User(user))
        commit(MUTATIONS.SET_USERS_LIST, usersList)
    }

    createUser(user, commit) {
        commit(MUTATIONS.CREATE_USER, user)
    }

    deleteUser(userId, commit) {
        commit(MUTATIONS.DELETE_USER, userId)
    }

}