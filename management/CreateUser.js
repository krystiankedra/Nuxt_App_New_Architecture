import uuid from 'uuidv4'

export default class CreateUser {
    constructor(user) {
        this.user = { id: uuid(), ...user }
    }

    getUser() {
        return this.user
    }

}