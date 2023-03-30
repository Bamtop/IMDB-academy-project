<template>
  <div class="radio_select">
  <div>
    <input type="radio" id="control_01" name="select" value="1" checked>
    <label for="control_01">
      <h2>Respuesta 1</h2>
    </label>
  </div>
  <div>
    <input type="radio" id="control_02" name="select" value="2">
    <label for="control_02">
      <h2>Respuesta 2</h2>
    </label>
  </div>
  <div>
    <input type="radio" id="control_03" name="select" value="3">
    <label for="control_03">
      <h2>Respuesta 3</h2>
    </label>
  </div>
  <div>
    <input type="radio" id="control_04" name="select" value="4" >
    <label for="control_04">
      <h2>Respuesta 4</h2>
    </label>
  </div>
  </div>
</template>

<script>
export default {
  name: "RadioSelect"
}
</script>

<style lang="scss">

.radio_select {
  section {
    display: flex;
    flex-flow: row wrap;
  }

  section > div {
    flex: 1;
    padding: 0.5rem;
  }

  input[type="radio"] {
    display: none;

    &:not(:disabled) ~ label {
      cursor: pointer;
    }

    &:disabled ~ label {
      color: hsla(150, 5%, 75%, 1);
      border-color: hsla(150, 5%, 75%, 1);
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  label {
    height: 100%;
    display: block;
    background: white;
    border: 2px solid hsla(150, 75%, 50%, 1);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    box-shadow: 0 10px 10px 0 hsla(150, 5%, 65%, 0.5);
    position: relative;
  }

  input[type="radio"]:checked + label {
    background: hsla(150, 75%, 50%, 1);
    color: hsla(215, 0%, 100%, 1);
    box-shadow: 0px 0px 20px hsla(150, 100%, 50%, 0.75);

  }

  input[type="radio"]#control_05:checked + label {
    background: red;
    border-color: red;
  }
}

@media only screen and (max-width: 700px) {
  section {
    flex-direction: column;
  }
}

</style>