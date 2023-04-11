<template>
  <TransitionGroup name="slide-fade">
<section class="grid" id="grid">
  <div class="grid-content" id="grid-content">
    <slot name="cards"></slot>
  </div>
  <div class="grid-aside" id="grid-aside">
    <slot name="aside"></slot>
  </div>
</section>
  </TransitionGroup>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Aside from "@/components/Aside.vue";

export default defineComponent({
  components: {Aside},
  methods:{

  },
})

</script>

<style scoped>
#grid{
  display: grid;
  grid-template-columns: auto 0;
  grid-template-rows: auto;
  grid-column-gap: 0.5rem;
  padding: 1rem;
  grid-template-areas: "content aside";
}
#grid-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  padding: 1rem;
}
#grid-aside{
  grid-area: aside;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;

}


@media only screen and (max-width: 1000px) {
  #grid-content {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 700px) {
  #grid-content {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 500px) {
  #grid{
    display: grid;
    grid-template-columns: auto ;
    grid-template-rows: 30rem auto;
    grid-column-gap: 0.5rem;
    padding: 1rem;
    grid-template-areas:'aside'
                        'content';
  }
  #grid-aside{
    opacity: 1;

  }

  #grid-content {
    grid-template-columns: 1fr;
  }
}
</style>