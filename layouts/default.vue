<template>
  <div>
    <navigation />
    <nuxt />
  </div>
</template>

<script>
const navigation = () => import('~/components/Navigation/navigation')
export default {
  components: {
    navigation
  }
}
</script>