<template>
  <div id="app" class="h-screen">
    <navbar v-if="this.$store.state.isUserLoggedIn" />
    <router-view class="container mx-auto" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    navbar: Navbar,
  },
}
</script>
