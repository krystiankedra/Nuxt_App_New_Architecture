<template>
    <div class="container">
      <div class="row">
        <user v-for="(user, index) in usersList" :key="index" :user="user" :delete-user="deleteUser" class="col-12 col-md-4" />
      </div>
    </div>
</template>

<script>
const user = () => import('~/components/UsersList/User/user')
export default {
  components: {
    user
  },
  props: {
    usersList: {
      type: Array,
      default: () => []
    },
    deleteUser: {
      type: Function,
      default: () => null
    }
  }
}
</script>
