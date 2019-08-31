import * as MUTATIONS from '~/store/mutationTypes'
import CreateUser from '~/management/CreateUser'
import { filterUsersList, findUser } from '~/utils/Filters/filters'

export default class UsersManagement {

    constructor(getters, commit) {
        this.usersList = () => getters.getUsersList
        this.userDetails = () => getters.getUserDetails
        this.commit = commit
    }

    getUsersList(value) {
        return this.usersList().filter(filterUsersList(value))
    }

    setUserDetails(userId) {
        const user = this.usersList().find(findUser(userId))
        this.commit(MUTATIONS.SET_USER_DETAILS, user)
    }

    getUserDetails() {
        return this.userDetails()
    }

    createUser(user) {
        this.commit(MUTATIONS.CREATE_USER, new CreateUser(user).getUser())
    }

    deleteUser(userId) {
        this.commit(MUTATIONS.DELETE_USER, userId)
    }

}