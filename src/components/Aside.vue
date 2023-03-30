<template slot="aside">
  <div class="aside">
    <SelectFilter/>
    <RangeFilter :min="1999" :max="2023"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SelectFilter from "@/components/SelectFilter.vue";
import RangeFilter from "@/components/RangeFilter.vue";
export default defineComponent({
      components: {RangeFilter, SelectFilter},

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
@media only screen and (max-width: 500px) {
  .aside{
   margin-right: 0;
  }
}

</style>