import Vuex from 'vuex'
import users from '~/store/users'
import exception from '~/store/exception'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            users
        }
    })
}

export default createStore