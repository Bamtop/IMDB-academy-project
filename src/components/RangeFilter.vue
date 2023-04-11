<template>
  <div>
    <input type="range" :min="min" :max="max" :value="value" :emoji="emoji" @input="changeValue"/>
    <h3>{{this.value}}{{this.emoji}}</h3>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "RangeFilter",
  props:{
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    emoji:{
      type: String
    }
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    changeValue(event:Event) {
      this.value = (event.target as HTMLInputElement).value;
      this.$emit('rangeSelected', (event.target as HTMLInputElement).value)
    },
  },
})
</script>

<style scoped>

div {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin: 0.1rem 0.5rem 0.5rem 0.5rem;
}
h3{
  margin-top: 1rem;
  padding: 0;
  text-align: center;
  color: #000000;
}
input{
  background: #02ec96;

}

</style>