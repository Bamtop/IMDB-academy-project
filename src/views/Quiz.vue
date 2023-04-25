<template>
<div class="quiz">

  <div class="animation">
    <wall-e></wall-e>
  </div>
  <div class="quiz_content">
    <div class="quiz_game">
    <div class="quiz_title">
      <h1>Quiz</h1>
    </div>

    <div v-if="this.$store.state.selectQuestion===0" class="quiz_Answer">
      <div class="quiz_Question" v-if="this.$store.state.selectQuestion===0">
            <h2>¿What would you like to do this weekend?</h2>
      </div>
          <RadioSelect option1="Stargazing with special person" option2="Have a drink with friends" option3="Go to the mountain" option4="Enter in a dark forest"
                       value1 ="Romance" value2="Comedy" value3="Adventure" value4="Horror"/>
    </div>
      <div v-if="this.$store.state.selectQuestion===1" class="quiz_Answer">
          <div class="quiz_Question">
            <h2>You´re in a flight for 3 hours, What do you do? </h2>
          </div>
          <RadioSelect option1="Read a book" option2="Watch a Film" option3="Watch a serie" option4="Watch an anime"
                       value1 ="350" value2="120" value3="90" value4="60"/>
        </div>
        <div v-if="this.$store.state.selectQuestion===2" class="quiz_Answer">
          <div class="quiz_Question">
            <h2>You´re visiting a big city, What do you do?</h2>
          </div>
          <RadioSelect option1="Visit iconic monuments" option2="Explore its alleys" option3="Walking around the city" option4="I don´t mind"
                       value1 ="8" value2="7" value3="4" value4="1"/>
        </div>

    </div>
    <div class="result_quiz" v-if="this.$store.state.selectQuestion===3">
      <h3>My name is Wall-E and I recommend you: </h3>
      <div class="filmCards">
        <FilmCard v-for="film in films" :film="film"></FilmCard>
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
import WallE from "@/components/Wall-e.vue";
export default defineComponent({
  name: "Quiz",
  components: {WallE, FilmCard, CustomButton, RadioSelect},
  computed:{
    films() {
      return this.$store.state.quizResult;
    }
  },



});


</script>

<style lang="scss">

.quiz{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'quiz_content animation ';
  margin: 2rem;
  min-width: 100vw;
}
.animation{
  grid-area: animation;
  min-height: 77vh;
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
  box-shadow: var(--primary-color) 5px 5px 5px 10px;
  padding: 2rem;
  max-width: 100vh;

        .quiz_title{
          text-align: center;
          font-family: Roboto;
          font-size: 1.5rem;
          color: var(--text);
        }
        .quiz_Question{
          text-align: left;
          font-family: Roboto;
          font-size: 1.5rem;
          color: var(--text);
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
    grid-template-rows: auto;
    grid-template-areas:'quiz_content';
    margin: 0;
  }

  .animation{
    display: none;
  }
  .quiz_content{
    grid-area: quiz_content;
    width: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .quiz_title{
      font-size: 0.7rem;
    }
    .quiz_Question{
      font-size: 1rem;
    }


  }
  .filmCards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    gap: 2rem;
    max-width: 80%;
  }

}

</style>