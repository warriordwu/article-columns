<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <global-header></global-header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
