

<template>
  <div id="app" >
  <header class="header">
  <CustomHeader></CustomHeader>
  </header>

  <div class="search">
  <SearchInput :openFilter="changeFilter"></SearchInput>
  </div>

  <main class="main">
  <Grid>
    <template v-slot:cards>
      <FilmCard></FilmCard>
    </template>
    <template v-slot:aside>
     <Aside></Aside>
    </template>

  </Grid>
  </main>
    <div class="carrousel">
      <CustomCarrousel></CustomCarrousel>
    </div>
  <footer class="footer">
  <Footer></Footer>
  </footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CustomHeader from "@/components/CustomHeader.vue";
import SearchInput from "@/components/SearchInput.vue";
import FilmCard from "@/components/FilmCard.vue";
import Grid from "@/components/Grid.vue";
import Aside from "@/components/Aside.vue";
import Footer from "@/components/Footer.vue";
import SelectFilter from "@/components/SelectFilter.vue";
import CustomCarrousel from "@/components/CustomCarrousel.vue";

export default defineComponent({
  components: {CustomCarrousel, SelectFilter, Aside, FilmCard, SearchInput, CustomHeader, Grid,Footer},
  methods:{
    changeFilter(){
      let aside:HTMLElement|null  = document.getElementById("grid");
      let filter:HTMLElement|null  = document.getElementById("grid-aside");
      if(this.$store.state.isOpenFilter){
        if (aside !== null && filter !== null){
          aside.style.gridTemplateColumns="auto 15rem";
          filter.style.opacity="1";

        }
      }else {
        if (aside !== null && filter !== null){
          aside.style.gridTemplateColumns="auto 0";
          filter.style.opacity="0";
        }
      }
      this.$emit("changeFilter");
    }
},

});

</script>

<style >
#app {
  margin: 0;
  padding: 1rem;
  font-weight: normal;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
      'header'
      'search'
      'main'
      'carrousel'
      'footer';
}
.header {
  grid-area: header;
  background: skyblue;

}
.search {
  grid-area: search;

}
.main {
  grid-area: main;
  margin:0;

}
.carrousel {
  grid-area: carrousel;
  overflow: hidden;
  margin:0;
}
.footer {
  grid-area: footer;
}

</style>
