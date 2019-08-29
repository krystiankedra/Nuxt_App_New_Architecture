import Vuex from 'vuex'
import users from '~/store/users'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            users
        }
    })
}

export default createStore