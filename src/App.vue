<template>
  <Toast :toasts="toasts" @remove="remove" />

  <div>
    <button
      @click="insert({ preset: 'success', message: 'hi, this is a message' })"
    >
      some expensive fetching happens when clicked and returns a tosst
      notification ok.
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from './composables/useToast.ts';
import Toast from './components/Toast.vue';

const { toasts, insert, remove } = useToast();
</script>
