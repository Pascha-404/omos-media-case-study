<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
      default: 'Provide a text property'
    }
  }
})
</script>

<template>{{ text }}</template>
