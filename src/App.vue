<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img alt="Vue logo" class="vuelogo img-fluid" src="./assets/logo.png">
      </div>
      <div class="col-6 align-self-center">
        <h1>VakantieKiezer</h1>
      </div>
    </div>

    <VacationPicker />
  </div>
</template>

<script>
import VacationPicker from './components/VacationPicker.vue'

export default {
  name: 'App',
  components: {
    VacationPicker
  }
}
</script>

<!--<style>
  .vuelogo {
    height: 10%;
  }
</style>-->