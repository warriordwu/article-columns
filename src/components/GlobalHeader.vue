<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">article-columns</router-link>
    <ul v-if="true" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2"
          >登陆</router-link
        >
      </li>
      <li class="list-inline-item">
        <router-link to="/signup" class="btn btn-outline-light my-2"
          >注册</router-link
        >
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <!-- 使用dropdown组件 -->
        <dropdown></dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UserProps } from '../store'
import Dropdown from './Dropdown.vue'
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>

<style></style>
