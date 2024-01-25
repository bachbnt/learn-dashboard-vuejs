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
      :disabled="field.disabled ?? false"
      required="true"
      v-model="fieldModels[field.name].value"
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
    const fieldModels = this.fields.reduce((obj, item) => {
      return {
        ...obj,
        [item.name]: { name: item.name, value: item.value ?? '' }
      }
    }, {})
    return {
      fieldModels
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
      this.$emit('submit-callback', this.fieldModels)
    }
  }
}
</script>
