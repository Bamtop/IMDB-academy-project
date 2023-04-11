<template slot="aside">
  <div class="aside">
    <SelectFilter/>
    <label>Year</label>
    <RangeFilter :min="1999" :max="2023" v-on:rangeSelected="setYearRangeFilter"/>
    <label>Rating</label>
    <RangeFilter :min="1" :max="10"  emoji=" ⭐" v-on:rangeSelected="setRatingRangeFilter"/>
    <label>Duration Aprox</label>
    <RangeFilter :min="60" :max="300" emoji=" min ⌚"  v-on:rangeSelected="setDurationAprox"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SelectFilter from "@/components/SelectFilter.vue";
import RangeFilter from "@/components/RangeFilter.vue";
export default defineComponent({
      components: {RangeFilter, SelectFilter},
      methods:{
        setYearRangeFilter(value:number){
          this.$store.commit('setStartYear', value)
        },
        setRatingRangeFilter(value:number){
          this.$store.commit('setRating',value);
        },
        setDurationAprox(value:number){
          this.$store.commit('setDuration',value);
        }
      }

    })
</script>

<style scoped>
.aside{
  padding-top: 1rem;
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  border-radius: 5px;
  border: 1px solid #edebe9;;

  height: 100%;
}

label{
  text-align: center;
  margin-top: 2rem;
  font-family: Roboto;
  font-size: 1.4rem;
  font-weight: bold;

}

@media only screen and (max-width: 500px) {
  .aside{
   margin-right: 0;
  }
}

</style>