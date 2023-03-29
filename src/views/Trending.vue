<template>

      <div class="carrousel">
        <CustomCarrousel></CustomCarrousel>
      </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CustomHeader from "@/components/CustomHeader.vue";
import Footer from "@/components/Footer.vue";
import CustomCarrousel from "@/components/CustomCarrousel.vue";
export default defineComponent ( {
  name: "Trending",
  components: {CustomCarrousel, CustomHeader,Footer}
})
</script>

<style scoped>


.carrousel {
  overflow: hidden;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>