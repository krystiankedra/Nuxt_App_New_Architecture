import Vuex from 'vuex'
import auth from '~/store/auth'
import users from '~/store/users'
import exception from '~/store/exception'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            auth,
            users,
            exception
        }
    })
}

export default createStore