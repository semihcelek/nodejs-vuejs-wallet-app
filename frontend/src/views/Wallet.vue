<script>
import Navigation from "@/components/navigation.vue";
import WalletShow from "@/components/wallet-show.vue";

export default {
  name: "Wallet",
  components: {
    Navigation,
    WalletShow
  }
};
</script>

<template lang="pug">
   div  
      navigation
      walletShow
    
</template>

<style scoped></style>
