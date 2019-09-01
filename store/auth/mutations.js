export default {
    createAuthManagement(state, payload) {
        state.authManagement = payload
    },
    changeValueInLoginData(state, { index, newValue }) {
        state.loginData[index].value = newValue
    },
    changeUserAuthState(state) {
        state.isUserAuth = !state.isUserAuth
    }
}