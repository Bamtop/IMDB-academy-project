<template>
  <div class="search_container">
    <div class="icon-container">
      <img ref="icon" class="icon" src="../assets/images/searc_icon.png" alt="filmHound_popcorn">
    </div>
    <div class="search-input-control">
      <input id="search" type="text" required="" v-on:input="searchInput" v-on:blur="stopSpin" >
       <label class="search-label">
        <span style="transition-delay:0ms">S</span><span style="transition-delay:50ms">e</span><span style="transition-delay:100ms">a</span><span style="transition-delay:150ms">r</span><span style="transition-delay:200ms">c</span><span style="transition-delay:250ms">h</span><span style="transition-delay:300ms">.</span><span style="transition-delay:350ms">.</span><span style="transition-delay:400ms">.</span>
       </label>
    </div>
    <div class="filter_button">
      <a class="btn btn-default" href="#" v-on:click="setFilter">
        <i class="fa fa-filter" title="Filter"></i>
      </a>
    </div>
  </div>


</template>

<script lang="ts" >
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    openFilter:{
      type: Function,
      required: true
    }
  },
  name: "SearchInput.vue",



  methods: {
    searchInput(event: Event) {
      this.$store.commit('setQuery', (event.target as HTMLInputElement).value);
      this.$store.dispatch('fetchFilms')
      this.setSpin();
    },
    setSpin() {
      (this.$refs.icon as HTMLImageElement).classList.add("spin");
    },
    stopSpin() {
      (this.$refs.icon as HTMLImageElement).classList.remove("spin");
    },
    setFilter() {
      let value = !this.$store.state.isOpenFilter;
      this.$store.commit('setFilter', value);
      this.openFilter();
    }
  }
});
</script>

<style>
.search_container{
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search-input-control input {

  background-color: white;
  margin-top:1.8rem;
  border: 0;
  border-bottom: 0.1rem black solid;
  display: block;
  max-width: 100%;
  font-size: 18px;
  color: black;
}
.search-input-control label {
  position: relative;
  top: -25px;
}
.search-input-control input:focus,
.search-input-control input:valid {
  outline: 0;
  border-bottom-color: #02ec96;
}

.search-input-control label span {
  display: inline-flex;
  font-size: 18px;
  min-width: 5px;
  color: black;
  transition: 0.3s cubic-bezier(0.05, -0.55, 0.265, 1.55);
}
.search-input-control input:focus + label span,
.search-input-control input:valid + label span {
  color:#02ec96 ;
  transform: translateY(-30px);
}
.icon-container{
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  width: 100%;
}
.icon {
  width: 100px;
  height: 100px;
}
.filter_button{
  font-size: 30px;
  position: relative;
  bottom: 55px;
  left: 120px;


}
.fa-filter{
  color: #02ec96;
}
.spin {
  animation-name: spin;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: 5;
}
@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

@media only screen and (max-width: 500px) {
  .fa-filter{
    display: none;
  }
}
</style>