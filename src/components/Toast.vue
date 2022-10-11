<template>
  <div v-for="(toast, id) in toasts" :key="id">
    This is a Toast, ok. {{ id }}
    <button @click="closeToast(toast)">close</button>
  </div>
  <button @click="generateToast">click to show toast</button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

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
</script>
