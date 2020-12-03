<template>
  <div class="flex items-center justify-center h-full">
    <div
      class="shadow-md hover:shadow-lg p-4 transition duration-200 ease-in-out w-96 space-y-6 border rounded-xl"
    >
      <h2 class="text-4xl">Inscription</h2>

      <b-field label="Email">
        <b-input type="email" required v-model="email"></b-input>
      </b-field>

      <b-field label="Mot de passe">
        <b-input type="password" required v-model="password"></b-input>
      </b-field>

      <b-field label="Retappez votre mot de passe">
        <b-input type="password" required v-model="confirmPassword"></b-input>
      </b-field>

      <div class="flex flex-row-reverse">
        <b-button :disabled="!formIsValid" type="is-success">Valider</b-button>
      </div>

      <p>
        Déjà un compte ?
        <router-link :to="{ name: 'login' }">
          Se connecter
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
      confirmPassword: null,
    }
  },

  computed: {
    formIsValid() {
      return this.email && this.password && this.confirmPassword
    },
  },
}
</script>
