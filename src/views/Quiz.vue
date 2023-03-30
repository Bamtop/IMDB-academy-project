<template>
<div class="quiz">

  <div class="animation">
  </div>
  <div class="quiz_content">
    <div class="quiz_title">
      <h1>Quiz</h1>
    </div>
    <div class="quiz_Question">
      <h2>Question 1</h2>
    </div>
    <div class="quiz_Answer">
      <RadioSelect/>
    </div>
    <div class="quiz_Button">
      <CustomButton nameSelect="next question"/>
    </div>

  </div>

</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import RadioSelect from "@/components/RadioSelect.vue";
import CustomButton from "@/components/CustomButton.vue";
export default defineComponent({
  name: "Quiz",
  components: {CustomButton, RadioSelect}
})


</script>

<style lang="scss">

.quiz{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'animation quiz_content';
}
.animation{
  grid-area: animation;
  min-height: 77vh;
  background-image:url("src/assets/images/harry-potter-gif.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.quiz_content{
  grid-area: quiz_content;
  background-color: rgba(2, 236, 150, 0.49);
  margin:2rem;
  border-radius: 3rem;
  border: black solid 3px;
  box-shadow: #02ec96 5px 5px 5px 10px;
  padding: 2rem;

        .quiz_title{
          text-align: center;
          font-family: Roboto;
          font-size: 1.5rem;
        }
        .quiz_Question{
          text-align: left;
          font-family: Roboto;
          font-size: 1.5rem;
        }
        .quiz_Button{
          margin-top: 3rem;
          display: flex;
          justify-content: center;
        }




}

</style>