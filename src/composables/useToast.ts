import { ref, watch } from 'vue';

export function useToast() {
  const toasts = ref([]);
  const counter = ref(0);

  const generateToast = () => {
    toasts.value.push(counter);
    counter.value++;

    watch(toasts.value, (newVal) => {
      if (!newVal.length) counter.value = 0;
    });
  };

  const closeToast = (id) => {
    toasts.value.splice(id, 1);
  };

  return {
    toasts,
    generateToast,
    closeToast,
  };
}
