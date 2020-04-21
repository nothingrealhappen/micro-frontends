<template>
  <div id="app">
    <img alt="Vue logo" width="50" src="./assets/logo.png">
    <h3>Welcome to Your Vue.js + TypeScript App</h3>
    <Youtube src="https://www.youtube.com/embed/x6UiR9Rs6dA?autoplay=1"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Youtube from './components/Youtube.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Youtube: Youtube
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    padding: 20px 0;
}

  h3 {
    margin: 0;
  }
</style>
