<template>
    <user-details :user-details="userDetails" />
</template>

<script>
import * as ACTIONS from '~/store/actionTypes'
const userDetails = () => import('~/components/UserDetails/userDetails')
export default {
    components: {
        userDetails
    },
    computed: {
        userManagement() {
            return this.$store.getters.getUserManagement
        },
        userDetails() {
            return this.userManagement.getUserDetails()
        }
    },
    created() {
        this.$store.dispatch(ACTIONS.SET_USER_DETAILS, this.$route.params.id)
    }
}
</script>