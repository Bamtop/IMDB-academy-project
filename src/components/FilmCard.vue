<template slot="cards">
  <TransitionGroup name="fade">
<div class="card">
  <div class="card__image">
    <img :src="film?.imageUrl" alt="film image">
  </div>
  <div class="card__name">
    <h3>{{film?.primaryTitle}}</h3>
  </div>
    <div class="card__genre"  :id="film.genres[0]" v-if="film.genres">
      <h4 >{{film.genres[0]}}</h4>
    </div>
    <div class="card__score">
      <h4>{{film?.averageRating}}⭐</h4>
    </div>
</div>
  </TransitionGroup>


</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "FilmCard",
  props: {
    film: Object
  },

})
</script>

<style lang="scss">

.card{
  display: flex;
  width: 300px;
  height: 300px;
  border: black double 2px;
  border-radius: 3px;
  box-shadow: var(--primary-color) 0 0 10px;
}
.card__image{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 3px;
  transition: all 0.5s ease;

}
.card__image img{
  max-width: 100%;
  max-height: 100%;
  width: 300px;
  border-radius: 3px 3px 0 0;
}
.card__name{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  color: var(--text);
  font-size: 20px;
  text-align: center;
  background: transparent;
  border-radius: 0 0 3px 3px;
  transition: all 0.5s ease;
  opacity: 0;
  overflow: scroll;
}
.card__description{
  position:absolute;
  bottom:80px;
  padding: 15px 10px;
  text-align: center;
  color: #000000;
  transform: rotate(90deg);
  transform-origin: 0 100px;
  opacity:0;
  transition: all 0.5s ease;

}
.card__genre{
  position: absolute;
  bottom: 370px;
  top: 50px;
  left: 10px;
  padding: 2px 10px 30px 10px;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  background: #2580ef;
  border-radius: 5px;

  opacity:0;
  transform: rotate(-90deg);
  transition: all 0.5s ease;
}
.card__score{
  position: absolute;
  bottom: 30px;
  right: 10px;
  top: 50px;
  width: 15%;
  height: 10%;
  color: #000000;
  background: gold;
  font-size: 20px;
  text-align: end;
  border-radius: 20px;
  opacity:0;
  transform: rotate(90deg);
  transition: all 0.5s ease;
}
.card:hover .card__image {
  opacity: 0.2;
  transition: all 0.5s ease;
}
.card:hover .card__name,
.card:hover .card__description,
.card:hover .card__genre,
.card:hover .card__score {
  opacity: 1;
  transform: rotate(0deg);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#Action{
  background: linear-gradient(to bottom, #8b0000, #ff4500);

}
#Adventure{
  background: linear-gradient(to bottom, #8b3e00, #ffa500);
}
#Animation{
  background: linear-gradient(to bottom, #006400, #7fff00);
}
#Comedy{
  background: linear-gradient(to bottom, #ffd700, #f0e68c);
}
#Drama{
  background: linear-gradient(to bottom, #00008b, #add8e6);
}
#Terror{
  background: linear-gradient(to bottom, #4b0082, #9370db);
}
#SFI{
  background: linear-gradient(to bottom, #2f4f4f, #c0c0c0);
}
#Romance{
  background: linear-gradient(to bottom, #ff69b4, #ffc0cb);
}
#Crime{
  background: linear-gradient(to bottom, #1c1c1c, #696969);
}


</style>