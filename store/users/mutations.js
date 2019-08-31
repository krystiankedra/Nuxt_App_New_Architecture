export default {
    createUsersManagement(state, payload) {
        state.usersManagement = payload
    },
    createUserManagement(state, payload) {
        state.userManagement = payload
    },
    setUsersList(state, payload) {
        state.usersList = payload
    },
    deleteUser(state, payload) {
        state.usersList = state.usersList.filter(user => user.id !== payload)
    },
    createUser(state, payload) {
        state.usersList = [...state.usersList, payload]
    },
    setSearchedPhrase(state, payload) {
        state.searchedPhrase = payload
    },
    setUserDetails(state, payload) {
        state.userDetails = payload
    },
    changeUserPropertyValue(state, { key, value }) {
        state.userDetails[key] = value
    }
}