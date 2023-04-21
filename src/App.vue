

<template>
  <header class="header">
    <CustomHeader>
      <DarkModeSwitch @switched="onSwitched" :initialState="isDarkModeEnabled"></DarkModeSwitch>
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
import DarkModeSwitch from '@/components/DarkModeSwitch.vue'
import 'vue-dark-mode-switch/dist/vue-dark-mode-switch.css'

export default defineComponent({
  components: {CustomCarrousel, SelectFilter, Aside, FilmCard, SearchInput, CustomHeader, Grid,Footer,DarkModeSwitch},
  created() {
    this.$store.dispatch('fetchPopularFilms');
    this.$store.dispatch('fetchRecentFilm');
  },
  data() {
    return {
      isDarkModeEnabled: false
    }
  },
  methods:{
    onSwitched(isDarkModeEnabled: boolean) {
      const root:HTMLElement|null  = document.querySelector(":root");
      if(isDarkModeEnabled && root !== null){
        root.style.setProperty('--primary-color-background', '#544845');
        root.style.setProperty('--primary-color-text', '#F9F4F3');
      }else{
        root.style.setProperty('--primary-color-background', '#F4FFE7');
        root.style.setProperty('--primary-color-text', 'black');
      }

    },

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

<style lang="scss">
.header {
  grid-area: header;
  background: var(--primary-color);
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 100vw;
  box-shadow: var(--primary-color) 0px 0px 10px 0px;
}

.main {
  grid-area: main;
  margin:0;
  min-height: 75vh;
  max-width: 95vw;

}

.footer {
  grid-area: footer;
 background: black;
  margin-top:auto;
  max-width: 100vw;
  padding: 2rem 2rem 1rem 1rem;


}

</style>
