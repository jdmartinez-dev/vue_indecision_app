<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
    text: { type: String, required: false, default: 'Hello world' },
  },
  setup(props) {
    const title = ref(props.text);
    const { counter, squareCounter } = useCounter(props.value);

    return { counter, squareCounter, title };
  }
});
</script>

<style scoped>
.btn {
  @apply bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 m-2 rounded;
}
</style>
