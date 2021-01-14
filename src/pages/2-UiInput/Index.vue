<template>
  <div>
    <p>
      <ui-input
        id="name"
        label="your name"
        name="firstname"
        value="adam"
        required
        @input="onChange"
        @input.native="onChange"
      />
    </p>
  </div>
</template>
<script lang="ts">
// Co to znaczy UiInput ?
// Co powinien udostępniac ? - spojrz template
import UiInput from './UiInput.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    UiInput
  },
  methods: {
    onChange (value: string) {
      console.log(value)
    }
  }
})
</script>
