<template>
    <div class="container">
      <div class="row">
        <user
          v-for="(user, index) in usersList"
          :key="index"
          :user="user"
          :delete-user="deleteUser"
          :go-to-user-details="goToUserDetails"
          :go-to-edit-user="goToEditUser"
          class="col-12 col-md-4" />
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
    usersList: {
      type: Array,
      default: () => []
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
    }
  }
}
</script>
