<template>
<section class="grid">
  <slot></slot>
</section>
</template>

<script>
export default {
  name: "Grid"
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
}

</style>