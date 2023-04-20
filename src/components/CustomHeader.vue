<template>
  <div class="header_content">
    <div class="header_image">
      <img class="header_logo" src="../assets/images/header_logo_4.png" alt="logo">
    </div>
    <div class="change-view">
      <div class="trending-view">
      <H3>Trending</H3>
      <RouterLink to="/trending">

        <img class="trending-icon" src="../assets/images/trending.png" alt="trending">
      </RouterLink>
      </div>
      <div class="home-view">
        <H3>Home</H3>
        <RouterLink to="/">

          <img class="home-icon" src="../assets/images/home.png" alt="home">
        </RouterLink>
      </div>
      <div class="quiz-view">
        <H3>Quiz</H3>
        <RouterLink to="/quiz">

          <img class="quiz-icon" src="../assets/images/quiz.png" alt="quiz">
        </RouterLink>
      </div>
      <div class="dark-mode">
        <slot></slot>
      </div>
    </div>
  </div>

</template>


<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CustomHeader"
})
</script>

<style lang="scss">
.header_content {
  display: flex;
  justify-content: space-between;

  h3{
    font-family: 'Roboto';
    font-weight: bold;
  }


  .header_image {
    max-width: 100%;
    display: flex;


    .header_logo {
      width: 150px;
      height: 100px;
      max-width: 100%;
      margin-left: 1rem;
      margin-top: 0.5rem;

    }
  }

  .change-view {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;

    .trending-view {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin-right: 2rem;
      margin-left: 2rem;
      transition: 0.5s;
    }
    .trending-view:hover {
      transform: scale(1.25);
    }

    .trending-icon {
      width: 50px;
      height: 50px;
      max-width: 100%;
    }
    .trending-icon:hover {
      animation: spin 0.3s ease-in 1;
    }


    .home-view {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin-left: 2rem;
      transition: 0.5s;
    }
    .home-view:hover {
      transform: scale(1.25);
    }
    .home-icon:hover {
      animation: spin 0.3s ease-in 1;
    }

    .home-icon {
      width: 50px;
      height: 50px;
      max-width: 100%;
    }

    .quiz-view {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin-left: 4rem;
      margin-right: 2rem;
      transition: 0.5s;
    }
    .quiz-view:hover {
      transform: scale(1.25);
    }

    .quiz-icon {
      width: 50px;
      height: 50px;
      max-width: 100%;
    }
    .quiz-icon:hover {
      animation: spin 0.3s ease-in 1;
    }
  }
}

  @media screen and (max-width: 550px) {
    .header_content {
      display: flex;
      flex-direction: column;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


</style>