<template>
      <span>Popular Films</span>
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
  margin-top: 3rem;
  margin-bottom: 2rem;
}

span{
  padding-left:2rem ;
  padding-right: 2rem;
  margin-left: 1rem;
  margin-top: 4rem;
  font-family: Roboto;
  Font-size: 2.5rem;
  font-weight: bold;
  box-shadow: #02ec96 5px 5px 5px 5px;
  color: #02ec96;
border-radius: 5px;
  border: black 1.5px solid;
}
</style>