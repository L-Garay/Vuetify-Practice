<template>
  <div class="wrapper">
    <greeting-vue v-on:tabChanged="childChangedTab" />
    <!-- will need to conditionally render welcome vs login depending on tab selected in greeting -->
    <div v-if="selectedTab === 'home'" class="right-column">
      <the-welcome />
    </div>
    <div v-else class="right-column">
      <the-login />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import HelloWorld from '../components/HelloWorld.vue';
import GreetingVue from '@/components/GreetingVue.vue';
import TheWelcome from '@/components/TheWelcome.vue';
import TheLogin from '@/components/TheLogin.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    GreetingVue,
    TheWelcome,
    TheLogin
  },
  data() {
    return {
      selectedTab: 'home'
    };
  },
  methods: {
    childChangedTab(tab: string) {
      this.selectedTab = tab;
    }
  }
});
</script>

<style scoped>
.wrapper {
  padding-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-height: 100vh;
}

.right-column {
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
}
</style>
