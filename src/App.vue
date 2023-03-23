<script lang="ts">
import {defineComponent} from "vue";
import CustomHeader from "@/components/CustomHeader.vue";
import SearchInput from "@/components/SearchInput.vue";
import FilmCard from "@/components/FilmCard.vue";
import Grid from "@/components/Grid.vue";
import Aside from "@/components/Aside.vue";

export default defineComponent({
  components: {Aside, FilmCard, SearchInput, CustomHeader, Grid}
})
</script>

<template>
  <header class="header">
  <CustomHeader></CustomHeader>
  </header>

  <div class="search">
  <SearchInput></SearchInput>
  </div>

  <main class="main">
  <Grid>
  <FilmCard></FilmCard>

  </Grid>
  </main>
  <aside class="aside">
    <Aside></Aside>

  </aside>
  <footer class="footer">

  </footer>
</template>

<style >

</style>
