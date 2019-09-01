<template>
    <nav class="nav">
        <template v-for="(nav, index) in navs">
            <nuxt-link :key="index" v-if="shouldBeProtected(nav.protected)" :to="nav.route" class="nav-link">
                {{ nav.name }}
            </nuxt-link>
        </template>
    </nav>
</template>

<script>
export default {
    data: () => ({
        navs: [
            { route: '/users-list', name: 'Users List', protected: true },
            { route: '/', name: 'Log in' },
        ]
    }),
    computed: {
        authManagement() {
            return this.$store.getters.getAuthManagement
        },
        isUserAuth() {
            return this.authManagement.getUserAuthStatus()
        }
    },
    methods: {
        shouldBeProtected(status) {
            return status ? this.isUserAuth : true
        }
    }
}
</script>