import * as MUTATIONS from '~/store/mutationTypes'
import CreateUser from '~/management/CreateUser'
import { filterUsersList } from '~/utils/Filters/filters'
export default class UsersManagement {

    constructor(getters, commit) {
        this.usersList = () => getters.getUsersList
        this.searchedPhrase = () => getters.getSearchedPhrase
        this.commit = commit
    }

    getUsersList() {
        return this.usersList().filter(
            filterUsersList(this.searchedPhrase())
        )
    }

    createUser(user) {
        this.commit(MUTATIONS.CREATE_USER, new CreateUser(user).getUser())
    }

    deleteUser(userId) {
        this.commit(MUTATIONS.DELETE_USER, userId)
    }

}