<template>
    <nav class="nav">
        <template v-for="(nav, index) in navs">
            <nuxt-link :key="index" :to="nav.route" class="nav-link">
                {{ nav.name }}
            </nuxt-link>
        </template>
    </nav>
</template>

<script>
export default {
  data: () => ({
    navs: [
        { route: '/', name: 'Users List' }
    ]
  })
}
</script>