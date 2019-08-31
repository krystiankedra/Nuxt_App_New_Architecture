import { generateRandomNumber } from '~/utils/utils'
export default class CreateUser {

    constructor(user) {
        this.user = { id: generateRandomNumber(), ...user }
    }

    getUser() {
        return this.user
    }

}