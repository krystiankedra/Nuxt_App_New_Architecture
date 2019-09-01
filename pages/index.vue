<template>
    <login
        class="mt-4"
        :login-data="loginData"
        :change-value="changeValue"
        :submit="submit"
        :set-dynamic-input-type="setDynamicInputType"
    />
</template>

<script>
const login = () => import('~/components/Login/login')
export default {
    components: {
        login
    },
    computed: {
        authManagement() {
            return this.$store.getters.getAuthManagement
        },
        loginData() {
            return this.authManagement.loginData()
        }
    },
    methods: {
        changeValue(index, newValue) {
            this.authManagement.changeValue(index, newValue)
        },
        submit() {
            const checkAuth = this.authManagement.submit()
            if (checkAuth) {
                this.authManagement.changeUserAuthState()
                this.$router.push('/users-list')
            }
        },
        setDynamicInputType(key) {
            return key.toLowerCase() === 'password' ? 'password' : 'text'
        }
    }
}
</script>