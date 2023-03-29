<template>
  <div class="header">
    <img class="header_logo" src="../assets/images/header_logo.jpg" alt="logo">
  </div>
  <div class="change-view">
    <div class="trending-view">
    <H3>Trending</H3>
    <RouterLink to="/trending">

      <img class="trending-icon" src="../assets/images/trending.png" alt="trending">
    </RouterLink>
    </div>
    <div class="home-view">
      <H3>Home</H3>
      <RouterLink to="/">

        <img class="home-icon" src="../assets/images/home.png" alt="trending">
      </RouterLink>
    </div>
  </div>

</template>


<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CustomHeader"
})
</script>

<style scoped>
.header{
  max-width: 100%;
}
.change-view{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
}
.trending-view{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
}
.trending-icon{
  width: 50px;
  height: 50px;
  max-width: 100%;
}

.home-view{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
}
.home-icon{
  width: 50px;
  height: 50px;
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