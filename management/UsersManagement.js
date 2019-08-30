import * as MUTATIONS from '~/store/mutationTypes'
import CreateUser from '~/management/CreateUser'
import { filterUsersList } from '~/utils/Filters/filters'
export default class UsersManagement {

    constructor(getters, commit) {
        this.usersList = () => getters.getUsersList
        this.commit = commit
    }

    getUsersList(value) {
        return this.usersList().filter(
            filterUsersList(value)
        )
    }

    createUser(user) {
        this.commit(MUTATIONS.CREATE_USER, new CreateUser(user).getUser())
    }

    deleteUser(userId) {
        this.commit(MUTATIONS.DELETE_USER, userId)
    }

}