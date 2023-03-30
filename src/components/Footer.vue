<template>

  <div class="footer__content">
    <h3>Pablo Benitez - Empathy FrontEnd Fellow & Marcos Arce - Empathy BackEnd Fellow</h3>
    <a href="https://github.com/Bamtop">
      <i class="fa fa-github" aria-hidden="true"></i>
    </a>



  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

.footer__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 2rem;
  color: #fff;
  padding: 0;
  max-height: 10vh;



}

.footer__content h3{
  font-weight: bold;
  margin-bottom: 1rem;
}

.footer__content a{
  position: relative;
  top: -10px;
  color: rgba(25, 173, 255, 0.89);
  font-size: 3rem;
  margin: 0 1rem;
}
</style>