<script>
export default {
  name: "Navigation"
};
</script>

<template>
  <nav class="basic">
    <router-link to="/">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/wallet">Wallet</router-link>
  </nav>
</template>

<style scoped>
.basic {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
  text-align: center;
  font-size: larger;
}
</style>
