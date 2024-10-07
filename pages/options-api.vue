<script lang="ts">
export default defineNuxtComponent({
  name: 'OptionsApiPage',
  setup() {
    return {
      greetingInSetup: 'Hello, setup!',
    };
  },
  async asyncData() {
    return {
      greetingInAsyncData: 'Hello, asyncData!',
    };
  },
  data() {
    return {
      greetingInData: 'Hello, data!',
    };
  },
  computed: {
    greetingInComputed() {
      return 'Hello, computed property!';
    },
  },
});
</script>

<template>
  <p data-testid="greeting-in-setup">greetingInSetup: {{ greetingInSetup }}</p>
  <p data-testid="greeting-in-async-data">
    greetingInAsyncData: {{ greetingInAsyncData }}
  </p>
  <p data-testid="greeting-in-data">greetingInData: {{ greetingInData }}</p>
  <p data-testid="greeting-in-computed">
    greetingInComputed: {{ greetingInComputed }}
  </p>
</template>
