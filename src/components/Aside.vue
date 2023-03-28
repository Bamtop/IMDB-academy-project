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
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  background: rgba(0, 210, 255, 0.2);
  border-radius: 20px;
  height: 100%;
}

</style>