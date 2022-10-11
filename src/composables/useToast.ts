import { ref, watch } from 'vue';

export function useToast() {
  const toasts = ref([]);

  let id = toasts.value.length + 1;

  const insert = () => {
    toasts.value.splice(id, 0, id++);

    // reset
    watch(toasts.value, (newVal) => {
      if (!newVal.length) id = 0;
    });
  };

  function remove(toast) {
    const i = toasts.value.indexOf(toast);
    if (i > -1) {
      toasts.value.splice(i, 1);
    }
  }

  return {
    toasts,
    insert,
    remove,
  };
}
