<template>
  <button v-on:click="nextQuestion" :class="nameClass" role="button" >
    <span class="text">{{nameSelect}}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent( {
  name: "CustomButton",
  props: {
    nameSelect: {
      type: String,
      required: true
    },
    nameClass: {
      type: String,
      required: false,
    }
  },
  methods: {
    nextQuestion(event:Event) {
      this.$emit('nextQuestion')
    }
  }
});
</script>

<style lang="scss">
.nextButton {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
  padding: 0 16px;
  border-radius: 4px;
  background-color: #fdfdfd;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: #02ec96;
  }
}
.finishButton {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
  padding: 0 16px;
  border-radius: 4px;
  background-color: #fdfdfd;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: #ff0000;
  }
}
</style>