<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ initial: number }>()

const n = ref(props.initial)
</script>

<template>
  <div>
    <h1>
      <span>Hello World</span>
      <span> {{ n }}</span>
    </h1>
    <button b="~ 1px solid blue" rounded p-1 type="button" @click="() => n++">
      Increment
    </button>
  </div>
</template>
