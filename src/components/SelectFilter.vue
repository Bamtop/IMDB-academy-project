<template>
    <div class="filter">
      <label data-test="selectFilter_label" >Genres</label>
      <select v-on:change="filterSelected">
        <option data-test="selectFilter_defaultValue" value="">---</option>
        <option v-for="genre in this.$store.state.genres" :value="genre">{{ genre }}</option>
      </select>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent( {
  name: "SelectFilter",

  methods: {
    filterSelected(event: Event) {
      this.$store.commit('setGenre', (event.target as HTMLInputElement).value)
      setTimeout(() => {
        this.$store.dispatch('fetchFilterDiscover')
      }, 300);
    },

  },

})

</script>

<style scoped>
.filter{
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
label{
  font-family: Roboto;
  font-size: 1.4rem;
  font-weight: bold;
}
</style>