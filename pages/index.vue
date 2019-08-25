<template>
  <section>
    <create-user :create-user="createUser" />
    <hr class="col-10">
    <users-list :users-list="usersList" :delete-user="deleteUser" />
  </section>
</template>

<script>
import * as ACTIONS from '~/store/actionTypes'
import createUser from '~/components/CreateUser/createUser'
import usersList from '~/components/UsersList/usersList'
export default {
  components: {
    createUser,
    usersList
  },
  computed: {
    usersList() {
      return this.$store.getters.getUsers
    }
  },
  created() {
    this.$store.dispatch(ACTIONS.SET_USERS_LIST)
  },
  methods: {
    createUser(newUser) {
      this.$store.dispatch(ACTIONS.CREATE_USER, newUser)
    },
    deleteUser(userId) {
      this.$store.dispatch(ACTIONS.DELETE_USER, userId)
    }
  }
}
</script>