<template>
  <div class="search">
    <SearchInput :openFilter="changeFilter"></SearchInput>
  </div>

    <Grid>
      <template v-slot:cards>
        <FilmCard></FilmCard>
      </template>
      <template v-slot:aside>
        <Aside></Aside>
      </template>

    </Grid>
</template>

<script lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import Grid from "@/components/Grid.vue";
import FilmCard from "@/components/FilmCard.vue";
import CustomCarrousel from "@/components/CustomCarrousel.vue";
import CustomHeader from "@/components/CustomHeader.vue";
import Footer from "@/components/Footer.vue";
import SelectFilter from "@/components/SelectFilter.vue";
import Aside from "@/components/Aside.vue";
import {defineComponent} from "vue";


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
.search {
  grid-area: search;

}

</style>