<template>
  <button class="button-48" role="button">
    <span class="text">{{nameSelect}}</span>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    nameSelect: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.button-48 {
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
</style>