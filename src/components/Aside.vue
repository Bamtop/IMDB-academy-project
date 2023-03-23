<template>
<div class="aside">
  <h2 class="filter">Filtro 1</h2>
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
  <br>
  <h2 class="filter">Filtro 2</h2>
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
  <br>
  <h2 class="filter">Filtro 3</h2>
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>

</div>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>
.aside{
  background: rgba(0, 210, 255, 0.2);
  border-radius: 30px;
  padding: 3rem;
}
.filter{
  border-bottom: #2c3e50 1px dashed;
  text-align: center;
}
</style>