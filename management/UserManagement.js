import uuid from 'uuidv4'

export default class User {
    constructor({ firstname, lastname, age }) {
        this.id = uuid()
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

}