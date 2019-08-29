<template>
  <section class="container">
    <create-user :create-user="createUser" />
    <hr class="col-12">
    <input-emitter :value.sync="searchedPhrase" :placeholder="searchedPhrasePlaceholder" class="mb-3"/>
    <users-list :users-list="usersList" :delete-user="deleteUser" />
  </section>
</template>

<script>
import * as ACTIONS from '~/store/actionTypes'
import * as MUTATIONS from '~/store/mutationTypes'
const createUser = () => import('~/components/CreateUser/createUser')
const usersList = () => import('~/components/UsersList/usersList')
const inputEmitter = () => import('~/components/InputEmitter/inputEmitter')
export default {
  components: {
    createUser,
    usersList,
    inputEmitter
  },
  data: () => ({
    searchedPhrasePlaceholder: 'Type User...'
  }),
  computed: {
    searchedPhrase: {
      get() {
        return this.$store.getters.getSearchedPhrase
      },
      set(newValue) {
        this.$store.commit(MUTATIONS.SET_SEARCHED_PHRASE, newValue)
      }
    },
    usersManagement() {
      return this.$store.getters.getUsersManagement
    },
    usersList() {
      return this.usersManagement.getUsersList()
    }
  },
  created() {
    this.$store.dispatch(ACTIONS.SET_USERS_LIST)
  },
  methods: {
    createUser(newUser) {
      this.usersManagement.createUser(newUser)
    },
    deleteUser(userId) {
      this.usersManagement.deleteUser(userId)
    }
  }
}
</script>