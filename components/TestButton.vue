<script setup lang="ts">
defineEmits<{
  (e: 'test-click'): void;
}>();
</script>

<template>
  <button data-testid="test-button" @click="$emit('test-click')">
    Test button in component
  </button>
</template>
