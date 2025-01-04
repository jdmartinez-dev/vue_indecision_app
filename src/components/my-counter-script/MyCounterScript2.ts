import { defineComponent, ref } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true, default: 5 },
    text: { type: String, required: false, default: 'Hello world' },
  },
  setup(props) {
    const title = ref(props.text);
    const { counter, squareCounter } = useCounter(props.value);

    return { counter, squareCounter, title };
  },
});
