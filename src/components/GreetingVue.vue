<script lang="ts">
import RightArrowThick from '../assets/icons/RightArrowThick.vue';
import SpotifyLogo from '../assets/icons/SpotifyLogo.vue';
export default {
  name: 'GreetingVue',
  components: {
    RightArrowThick,
    SpotifyLogo
  },
  data() {
    return {
      selectedTab: 'home'
    };
  },
  methods: {
    changeSelection(tab: string) {
      this.$emit('tabChanged', tab);
      const element = document.getElementById(tab);
      if (element) {
        element.classList.add('active-tab');
        console.log('element', element, 'tab', tab);
        if (tab === 'home') {
          const start = document.getElementById('start');
          if (start) {
            start.classList.remove('active-tab');
          }
        } else {
          const home = document.getElementById('home');
          if (home) {
            home.classList.remove('active-tab');
          }
        }
      }
    }
  }
};
</script>

<template>
  <div class="greeting-wrapper">
    <SpotifyLogo class="logo" />
    <div class="greetings">
      <h1>Hello there...</h1>
      <h3>
        Welcome to Spue, the Spotify application made with Vue! Look at the amazing things you can
        do
        <RightArrowThick class="right-arrow" />
      </h3>
      <div class="controls">
        <p id="home" @click="changeSelection('home')">Home</p>
        <p id="start" @click="changeSelection('start')">Get started</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.greeting-wrapper {
  display: flex;
  gap: 30px;
}
.greetings {
  max-width: 400px;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: hsla(160, 100%, 37%, 1);
  padding-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  padding-left: 1rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.right-arrow {
  width: 18px;
  height: auto;
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

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
