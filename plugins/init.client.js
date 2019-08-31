import * as ACTIONS from '~/store/actionTypes'

export default function ({ store }) {
    store.dispatch(ACTIONS.SET_USERS_LIST)
}
