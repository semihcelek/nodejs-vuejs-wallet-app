<script>
export default {
  name: "WalletShow",
  props: ["payment"]
};
</script>

<template lang="pug">
  article.card
    h1 {{ payment.name }}
    h2 {{ payment.amount }}
    p {{ payment._id }}
    
</template>
<style scoped>
.card {
  display: inline-block;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
}
</style>
