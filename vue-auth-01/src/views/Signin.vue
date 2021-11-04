<template>
  <div>
    <h1>Sign In</h1>
    <form @submit.prevent="submit">
      {{ form }}
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="form.email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" name="password" id="password" v-model="form.password" >
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      console.log("Submit bos")
    }
  }
}
</script>

<style scoped>

</style>