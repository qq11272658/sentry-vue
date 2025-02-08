<script setup lang="ts">

</script>

<template>
  <HelloWorld msg="You did it!666 777" />
  <div class="nav">
    <router-link to="/home">home</router-link>
    <router-link to="/my">my</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
