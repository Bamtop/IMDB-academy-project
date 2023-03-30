<template>
  <div class="sliding">
    <div class="scroll">
      <div class="item-list" id="item-list">
        <div class="item">
          <FilmCard></FilmCard>
          <FilmCard></FilmCard>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SelectFilter from "@/components/SelectFilter.vue";
import Aside from "@/components/Aside.vue";
import FilmCard from "@/components/FilmCard.vue";
import SearchInput from "@/components/SearchInput.vue";
import CustomHeader from "@/components/CustomHeader.vue";
import Grid from "@/components/Grid.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {FilmCard},
  name: "CustomCarrousel",
})
</script>

<style scoped>
.sliding{
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  position:relative;
  background-color: transparent;
  max-width: 99vw;

}

.scroll {
  display: flex;
  flex: 100%;
  flex-flow: row nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior: contain;
  max-width: 95vw;
}
.scroll > * {
  flex: 0 0 auto;
}
#item-list{
  display: flex;
  flex-flow: row nowrap;
  gap: 50px;
  animation: carousel 30s infinite  forwards;
}

#item-list:hover{
  animation-play-state: paused;
}

.item{
  display: flex;
  flex-flow: row nowrap;
  gap: 50px;
}
@-webkit-keyframes carousel {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.right {
  position: absolute;
  right: 0;
}

.left {
  position: absolute;
  left: 0;
}
</style>