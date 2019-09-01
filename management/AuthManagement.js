import * as MUTATIONS from '~/store/mutationTypes'
import { checkAuthUserData } from '~/utils/utils'

export default class LoginManagement {

    constructor(getters, commit) {
        this.isUserAuth = () => getters.getIsUserAuth
        this.usersList = () => getters.getUsersList
        this.loginData = () => getters.getLoginData
        this.commit = commit
    }

    getUserAuthStatus() {
        return this.isUserAuth()
    }

    changeValue(index, newValue) {
        this.commit(MUTATIONS.CHANGE_VALUE_IN_LOGIN_DATA, { index, newValue })
    }

    isSuccess() {
        const checkData = [
            checkAuthUserData(this.usersList(), this.loginData(), 'firstname'),
            checkAuthUserData(this.usersList(), this.loginData(), 'password')
        ]
        return checkData.every(fn => fn)
    }

    submit() {
        return this.isSuccess()
    }

    changeUserAuthState() {
        this.commit(MUTATIONS.CHANGE_USER_AUTH_STATE)
    }

}