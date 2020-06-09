<script>
import Navigation from "@/components/navigation.vue";
import WalletShow from "@/components/wallet-show.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Wallet",
  components: {
    Navigation,
    WalletShow
  },
  computed: {
    ...mapState(["payments"])
  },
  methods: {
    ...mapActions(["fetchPayments"])
  },
  created() {
    this.fetchPayments();
  }
};
</script>

<template lang="pug">
   div  
      navigation
      walletShow(v-for="payment in payments", :payment="payment")
    
</template>

<style scoped></style>
