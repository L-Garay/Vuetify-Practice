<script lang="ts">
export default {
  name: 'TheLogin',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log(this.username, this.password);
    }
  }
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input id="username" v-model="username" />
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" />
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<style scoped>
main {
  border: 1px solid lightslategray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  text-align: center;
  max-width: 310px;
}
h1 {
  font-size: 2rem;
  padding-bottom: 1rem;
  color: hsla(160, 100%, 37%, 1);
  border-bottom: 1px solid lightslategray;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
  text-align: start;
}
form > label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: hsla(160, 100%, 37%, 1);
}

form > input {
  padding: 0.5rem;
  border: 1px solid lightslategray;
  border-radius: 5px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
