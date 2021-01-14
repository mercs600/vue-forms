<template>
  <div>
    <p>
      <ui-form-field
        :field="fields[0]"
      />
      <ui-form-field
        :field="fields[1]"
      />
    </p>
  </div>
</template>
<script lang="ts">
// Co to znaczy UiInput ?
// Co powinien udostępniac ? - spojrz template
import UiFormField from './UiFormField.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    UiFormField
  },
  data () {
    return {
      fields: [
        {
          id: 'name',
          label: 'your name',
          name: 'firstname'
        },
        {
          id: 'lastname',
          label: 'your lastname',
          name: 'lastname'
        }
      ]
    }
  },
  methods: {
    onChange (value: string) {
      console.log(value)
    }
  }
})
</script>
