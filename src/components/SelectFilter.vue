<template>
    <div class="filter">
      <label >Genres</label>
      <select v-on:change="filterSelected">
        <option value="">---</option>
        <option value="a">a</option>
        <option value="v">SSSSSSSSv</option>
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