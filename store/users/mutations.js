export default {
    setUsersList(state, payload) {
        state.users = payload
    },
    createUser(state, payload) {
        state.users = [...state.users, payload]
    },
    deleteUser(state, payload) {
        state.users = state.users.filter(user => user.id !== payload)
    }
}