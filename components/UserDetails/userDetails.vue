<template>
    <div class="container">
        <div class="row mb-2 justify-content-end">
            <button class="btn btn-outline-primary" @click="goBack()">
                Go Back
            </button>
        </div>
        <div class="row">
            <user :user="userDetails" :is-read-only-view="isReadOnlyView" class="col-12" />
        </div>
    </div>
</template>

<script>
const user = () => import('~/components/shared/User/user')
export default {
    components: {
        user
    },
    props: {
        userDetails: {
            type: Object,
            default: () => {}
        }
    },
    data: () => ({
        isReadOnlyView: true
    }),
    methods: {
        goBack() {
            this.$router.push('/users-list')
        }
    }
}
</script>