<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-6">
                    <img src="~/assets/user.png" class="card-img-top user-image">
                </div>
                <div class="col-6 pt-4">
                    <button class="btn btn-outline-danger" @click="deleteUser(user.id)">Delete User</button>
                </div>
            </div>
            <div class="row">
                <h5>{{ userFullName }}</h5>
            </div>
            <div class="row">
                <span>Age: {{ user.age }}</span>
            </div>
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