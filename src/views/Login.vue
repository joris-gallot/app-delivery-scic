<template>
  <div class="flex items-center justify-center h-full">
    <div
      class="shadow-md hover:shadow-lg p-4 transition duration-200 ease-in-out w-96 space-y-6 border rounded-xl"
    >
      <h2 class="text-4xl">Connexion</h2>

      <b-field label="Email">
        <b-input type="email" required v-model="email"></b-input>
      </b-field>

      <b-field label="Mot de passe">
        <b-input type="password" required v-model="password"></b-input>
      </b-field>

      <div class="flex flex-row-reverse">
        <b-button @click="submit" :disabled="!formIsValid" type="is-success"
          >Valider</b-button
        >
      </div>

      <p class="text-red-500 text-sm">
        {{ error }}
      </p>

      <p>
        Pas de compte ?
        <router-link :to="{ name: 'register' }">
          S'inscrire
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      error: null,
    }
  },

  methods: {
    async submit() {
      try {
        const res = await this.$api.auth.login({
          email: this.email,
          password: this.password,
        })
        this.$store.dispatch('setUser', res.user)
        this.$store.dispatch('setToken', res.token)
        this.$router.push({ name: 'home' })
      } catch (error) {
        if (error.response.data.statusCode === 500) {
          this.error = 'Utilisateur inconnu.'
        } else if (error.response.data.statusCode === 400) {
          this.error = 'Email ou mot de passe incorrect.'
        } else {
          this.error = error.response.data.message
        }
      }
    },
  },

  computed: {
    formIsValid() {
      return this.email && this.password
    },
  },
}
</script>
