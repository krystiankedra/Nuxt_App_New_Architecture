import * as ACTIONS from '~/store/actionTypes'

export default function ({ store }) {
    store.dispatch(ACTIONS.CREATE_EXCEPTION_MANAGEMENT)
    store.dispatch(ACTIONS.CREATE_USERS_MANAGEMENT)
    store.dispatch(ACTIONS.CREATE_USER_MANAGEMENT)
    store.dispatch(ACTIONS.CREATE_AUTH_MANAGEMENT)
}