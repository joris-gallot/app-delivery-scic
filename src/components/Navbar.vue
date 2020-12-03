<template>
  <div
    class="bg-gray-800 text-white py-3 px-5 text-lg flex items-center justify-between"
  >
    <div>
      Santa Clauss International Corporation
    </div>

    <div class="flex items-center space-x-4">
      <div>
        {{ $store.state.user.email }}
      </div>
      <div @click="logout">
        Se deconnecter
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'login' })
    },
  },
}
</script>
