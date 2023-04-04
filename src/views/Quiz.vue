<template>
<div class="quiz">

  <div class="animation">
  </div>
  <div class="quiz_content">
    <div class="quiz_game">
    <div class="quiz_title">
      <h1>Quiz</h1>
    </div>

    <div v-if="this.$store.state.selectQuestion===0" class="quiz_Answer">
      <div class="quiz_Question" v-if="this.$store.state.selectQuestion===0">
            <h2>Question 1</h2>
      </div>
          <RadioSelect option1="option 1" option2="option2" option3="option3" option4="option 4"/>
    </div>
      <div v-if="this.$store.state.selectQuestion===1" class="quiz_Answer">
          <div class="quiz_Question">
            <h2>Question 2</h2>
          </div>
          <RadioSelect option1="option 5" option2="option 6" option3="option 7" option4="option 8"/>
        </div>
        <div v-if="this.$store.state.selectQuestion===2" class="quiz_Answer">
          <div class="quiz_Question">
            <h2>Question 3</h2>
          </div>
          <RadioSelect option1="option 9" option2="option 10" option3="option 11" option4="option 12"/>
        </div>

    </div>
    <div class="result_quiz" v-if="this.$store.state.selectQuestion===3">
      <h3>Las 3 peliculas para ti son:</h3>
      <div class="filmCards">
      <FilmCard class="filmCards"></FilmCard>
      </div>
    </div>

  </div>

</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import RadioSelect from "@/components/RadioSelect.vue";
import CustomButton from "@/components/CustomButton.vue";
import FilmCard from "@/components/FilmCard.vue";
export default defineComponent({
  name: "Quiz",
  components: {FilmCard, CustomButton, RadioSelect},
  data() {
    return {
    }

  },
  methods: {

  },


});


</script>

<style lang="scss">

.quiz{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'animation quiz_content';
  margin: 2rem;
  min-width: 100vh;
}
.animation{
  grid-area: animation;
  min-height: 77vh;
  background-image:url("src/assets/images/harry-potter-gif.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100vh;

}
.quiz_content{
  grid-area: quiz_content;
  background-color: rgba(2, 236, 150, 0.49);
  margin:2rem;
  border-radius: 3rem;
  border: black solid 3px;
  box-shadow: #02ec96 5px 5px 5px 10px;
  padding: 2rem;
  max-width: 100vh;

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

  .result_quiz{
    max-width: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: Roboto;
    font-size: 1.5rem;
    .filmCards{
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      gap: 2rem;
    }
  }




}

@media only screen and (max-width: 550px) {
  .quiz{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr auto;
    grid-template-areas:'quiz_content';
    margin: 2rem;
  }
  .animation{
    display: none;
  }
  .quiz_content{
    grid-area: quiz_content;
    width: 18rem;

  }
  .filmCards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    gap: 2rem;
  }

}

</style>