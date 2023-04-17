

<template>
  <header class="header">
    <CustomHeader>
    </CustomHeader>
  </header>

  <main class="main">
  <RouterView></RouterView>
  </main>
  <footer class="footer">
    <Footer></Footer>
  </footer>
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
  created() {
    this.$store.dispatch('fetchPopularFilms');
    this.$store.dispatch('fetchRecentFilm');
  },
  methods:{
    changeFilter(){
      let aside:HTMLElement|null  = document.getElementById("grid");
      let filter:HTMLElement|null  = document.getElementById("grid-aside");
      if(this.$store.state.isOpenFilter){
        if (aside !== null && filter !== null){
          aside.style.gridTemplateColumns="auto 20rem";
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
.header {
  grid-area: header;
  background: #02ec96;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 100vw;
  box-shadow: #02ec96 0px 0px 10px 0px;
}

.main {
  grid-area: main;
  margin:0;
  min-height: 75vh;

}

.footer {
  grid-area: footer;
 background: black;
  margin-top:auto;
  max-width: 100vw;
  padding: 2rem 2rem 1rem 1rem;


}

</style>
