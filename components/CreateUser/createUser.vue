<template>
    <div class="container mb-3 mt-4">
        <div class="form-group row">
            <div class="col-12 col-md-4">
                <label>Firstname</label>
                <input v-model="newUser.firstname" type="text" class="form-control" placeholder="Enter firstname">
            </div>
            <div class="col-12 col-md-4">
                <label>Lastname</label>
                <input v-model="newUser.lastname" type="text" class="form-control" placeholder="Enter lastname">
            </div>
            <div class="col-12 col-md-4">
                <label>Password</label>
                <input v-model="newUser.password" type="password" class="form-control" placeholder="Enter password">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-12 col-md-6">
                <label>Age</label>
                <input v-model="newUser.age" type="number" class="form-control" placeholder="Enter age">
            </div>
            <div class="col-12 col-md-6 btn-create">
                <button class="btn btn-primary" @click="submit">Create user</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newUser: {
                firstname: null,
                lastname: null,
                age: null,
                password: null
            }
        }
    },
    props: {
        createUser: {
            type: Function,
            default: () => null
        }
    },
    methods: {
        clearForm() {
            for (const formValue in this.newUser) {
                this.newUser[formValue] = null
            }
        },
        submit() {
            this.createUser(this.newUser)
            this.clearForm()
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-create {
    padding-top: 30px;
}
</style>