<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-6">
                    <img src="~/assets/user.png" class="card-img-top user-image">
                </div>
                <div v-if="!isReadOnlyView" class="col-6 pt-4">
                    <button class="btn btn-outline-danger" @click="deleteUser(user.id)">Delete User</button>
                </div>
            </div>
            <div class="row">
                <h5>{{ userFullName }}</h5>
            </div>
            <div class="row">
                <span>Age: {{ user.age }}</span>
            </div>
            <div v-if="!isReadOnlyView" class="row mt-2">
                <button class="btn btn-outline-primary" @click="goToUserDetails(user.id)">Preview Details</button>
            </div>
            <div v-if="!isReadOnlyView" class="row mt-2">
                <button class="btn btn-outline-primary" @click="goToEditUser(user.id)">Edit</button>
            </div>
        </div>
    </div>
</template>

<script>
import { chainValuesToString } from '~/utils/utils'
export default {
    props: {
        user: {
            type: Object,
            default: () => {}
        },
        deleteUser: {
            type: Function,
            default: () => null
        },
        goToUserDetails: {
            type: Function,
            default: () => null
        },
        goToEditUser: {
            type: Function,
            default: () => null
        },
        isReadOnlyView: {
            type: Boolean,
            default: () => false
        }
    },
    computed: {
        userFullName() {
            const userDataForFullName = [this.user.firstname, this.user.lastname]
            return chainValuesToString(userDataForFullName)
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