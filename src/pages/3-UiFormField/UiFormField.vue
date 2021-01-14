<template>
  <div>
    <ui-input
      id="name"
      label="your name"
      name="firstname"
      value="adam"
      required
      @input="onChange"
      @input.native="onChange"
    />
  </div>
</template>
<script lang="ts">
// 1. Czym jest FormField ?
//
// VeeValidate jest bardzo prosta i konkretna
// W mojej opini dziala przewidywalnie i udostepnia
// API, ktore jest nam potrzebne do zbudowania zaawansowanych formularzy
// moze sluzyc do walidacji nie tylko formularzy - mozna uzywac jako funkcji
// https://vee-validate.logaretm.com/v3/guide/basics.html
// For the input field or the component acting as an input,
// it should have a v-model attached to it.
import Vue from 'vue'
import { UiInput } from '../2-UiInput'
export default Vue.extend({
  components: {
    UiInput
  }
})
</script>
