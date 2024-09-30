<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost"><img src="/src/assets/img/Anifyuli.svg" alt=""></a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><ThemeToggle></ThemeToggle></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Connect</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>