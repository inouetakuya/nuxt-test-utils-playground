<template>
  <ul>
    <li data-testid="greeting-in-setup">
      {{ greetingInSetup }}
    </li>
    <li data-testid="greeting-in-data1">
      {{ greetingInData1 }}
    </li>
    <li data-testid="greeting-in-data2">
      {{ greetingInData2 }}
    </li>
    <li data-testid="greeting-in-data3">
      {{ greetingInData3 }}
    </li>
    <li data-testid="greeting-in-data4">
      {{ greetingInData4 }}
    </li>
    <li data-testid="greeting-in-computed">
      {{ greetingInComputed }}
    </li>
    <li data-testid="computed-data1">
      {{ computedData1 }}
    </li>
    <li data-testid="computed-greeting-in-methods">
      {{ computedGreetingInMethods }}
    </li>
    <li data-testid="greeting-in-methods">
      {{ greetingInMethods() }}
    </li>
    <li data-testid="return-data1">
      {{ returnData1() }}
    </li>
    <li data-testid="return-computed-data1">
      {{ returnComputedData1() }}
    </li>
    <li>
      <button data-testid="update-data3-button" @click="updateData3Async">
        Update data3 async
      </button>
    </li>
    <li>
      <TestButton @test-click="updateData4Async" />
    </li>
  </ul>
</template>

<script lang="ts">
import TestButton from '~/components/TestButton.vue';

export default defineNuxtComponent({
  name: 'OptionsApiPage',
  components: { TestButton },
  setup() {
    return {
      greetingInSetup: 'Hello, setup',
    };
  },
  async asyncData() {
    return {
      greetingInData2: 'Hello, overwritten by asyncData',
    };
  },
  data() {
    return {
      greetingInData1: 'Hello, data1',
      greetingInData2: 'Hello, data2',
      greetingInData3: 'Hello, data3',
      greetingInData4: 'Hello, data4',
    };
  },
  computed: {
    greetingInComputed() {
      return 'Hello, computed property';
    },
    computedData1() {
      return this.greetingInData1;
    },
    computedGreetingInMethods() {
      return this.greetingInMethods();
    },
  },
  methods: {
    greetingInMethods() {
      return 'Hello, method';
    },
    returnData1() {
      return this.greetingInData1;
    },
    returnComputedData1() {
      return this.computedData1;
    },
    async updateData3Async(): Promise<void> {
      const data3 = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Updated by async method');
        }, 1000);
      });
      this.greetingInData3 = data3;
    },
    async updateData4Async(): Promise<void> {
      const data4 = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Updated by async method');
        }, 1000);
      });
      this.greetingInData4 = data4;
    },
  },
});
</script>
