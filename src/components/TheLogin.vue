<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TheLogin',
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      tabSelected: 'login'
    };
  },
  mounted() {
    const element = document.getElementById('login');
    if (element) {
      element.classList.add('active-tab');
    }
  },
  props: {},
  methods: {
    login(): void {
      console.log(this.email, this.password);
    },
    register(): void {
      console.log(this.email, this.password, this.firstName, this.lastName);
    },
    changeSelection(tab: string): void {
      this.tabSelected = tab;
      const element = document.getElementById(tab);
      if (element) {
        element.classList.add('active-tab');
        if (tab === 'login') {
          const register = document.getElementById('register');
          if (register) {
            register.classList.remove('active-tab');
          }
        } else {
          const login = document.getElementById('login');
          if (login) {
            login.classList.remove('active-tab');
          }
        }
      }
    }
  }
});
</script>

<template>
  <main>
    <div v-if="tabSelected === 'login'" class="wrapper">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required />
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
    <div v-else class="wrapper">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <label for="firstName">First name</label>
        <input id="firstName" v-model="firstName" type="firstName" required />
        <label for="lastName">Last name</label>
        <input id="lastName" v-model="lastName" type="lastName" required />
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required />
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
    <div class="controls">
      <p id="login" @click="changeSelection('login')">Login</p>
      <p id="register" @click="changeSelection('register')">Register</p>
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center;
}
.wrapper {
  border: 1px solid lightslategray;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
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

.controls {
  width: 100%;
  margin-top: 0.5rem;
}

.controls p {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid rgba(60, 60, 60, 0.12);
  color: black;
}
.controls p:first-of-type {
  border-left: none;
}

.controls p:active {
  color: hsla(160, 100%, 37%, 1);
}
.controls p:hover {
  background-color: hsla(160, 100%, 37%, 0.1);
  cursor: pointer;
}

.controls .active-tab {
  color: hsla(160, 100%, 37%, 1);
}

.controls .active-tab:hover {
  background-color: transparent;
}
</style>
