<template>
  <div
    class="bg-gray-900 text-white py-3 px-5 text-lg flex items-center justify-between"
  >
    <div>
      Santa Clauss International Corporation
    </div>

    <div class="flex items-center space-x-4">
      <div>
        {{ $store.state.user.email }}
      </div>
      <button
        @click="logout"
        class="py-2 px-3 text-sm bg-white text-gray-800 rounded-lg cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100"
      >
        Se déconnecter
      </button>
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
