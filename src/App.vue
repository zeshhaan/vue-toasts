<template>
  <Toast :toasts="toasts" @remove="remove" />

  <div class="font-mono text-4xl">
    <button
      @click="insert({ preset: 'success', message: 'hi, this is a message' })"
    >
      open toast
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from './composables/useToast.ts';
import Toast from './components/Toast.vue';

const { toasts, insert, remove } = useToast();
</script>
