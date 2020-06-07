<template>
  <div>
    <navigation />
    <div class="home">
      <h1>Welcome to Wallet-App</h1>
      <login></login>
      <h2>Please Log-in</h2>
      <h2>Or Register ==></h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/login.vue";
import Navigation from "@/components/navigation.vue";

export default {
  name: "Home",
  components: { Login, Navigation }
};
</script>
