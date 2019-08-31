<template>
    <edit-user :user-details="userDetails" :change-user-value="changeUserValue" />
</template>

<script>
import * as ACTIONS from '~/store/actionTypes'
const editUser = () => import('~/components/EditUser/editUser')
export default {
    components: {
        editUser
    },
    computed: {
        userManagement() {
            return this.$store.getters.getUserManagement
        },
        userDetails() {
            return this.userManagement.getUserDetails()
        }
    },
    methods: {
        changeUserValue(key, value) {
            this.userManagement.changePropertyValue(key, value)
        }
    },
    created() {
        this.$store.dispatch(ACTIONS.SET_USER_DETAILS, this.$route.params.id)
    }
}
</script>