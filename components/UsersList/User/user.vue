<template>
    <div class="card">
        <img src="~/assets/user.png" class="card-img-top user-image">
        <div class="card-body">
            <h5 class="card-title">{{ userFullName }}</h5>
            <p class="card-text">Age: {{ user.age }}</p>
        </div>
        <div class="card-footer">
            <button class="btn btn-outline-danger" @click="deleteUser(user.id)">Delete User</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: () => {}
        },
        deleteUser: {
            type: Function,
            default: () => null
        }
    },
    computed: {
        userFullName() {
            return `${this.user.firstname} ${this.user.lastname}`
        }
    }
}
</script>

<style lang="scss" scoped>
.user-image {
    width: 75px;
    height: 75px;
    border-radius: 25%;
}
</style>