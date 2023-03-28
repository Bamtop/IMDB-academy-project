<template>
  <div class="header">
    <img class="header_logo" src="../assets/images/header_logo.jpg" alt="logo">
  </div>
</template>


<script lang="ts">
export default {
  name: "CustomHeader"
}
</script>

<style scoped>
.header{
  max-width: 100%;
}

.header_logo{
  width: 150px;
  height: 100px;
  max-width: 100%;
  border: black dashed 1px;
  margin-left: 1rem;
  margin-top: 0.5rem;

}
</style>