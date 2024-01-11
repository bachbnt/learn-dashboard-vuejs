<template>
  <form class="space-y-3" @submit.prevent="handleSubmit">
    <FieldInput
      v-for="field in fields"
      :key="field.name"
      :title="$t(field.name)"
      :id="field.name"
      :name="field.name"
      :type="field.type"
      :autocomplete="field.autocomplete"
      required="true"
    />
    <slot name="above-button"></slot>
    <PrimaryButton class="mt-8" :title="buttonTitle" type="submit" />
    <slot name="below-button"></slot>
  </form>
</template>

<script lang="ts">
import FieldInput from './FieldInput.vue'
import PrimaryButton from './PrimaryButton.vue'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  props: {
    fields: {
      type: Array<any>,
      required: true
    },
    buttonTitle: {
      type: String,
      required: true
    }
  },
  components: {
    FieldInput,
    PrimaryButton
  },
  methods: {
    handleSubmit() {
      this.$emit('submit-callback', this.email, this.password)
    }
  }
}
</script>
