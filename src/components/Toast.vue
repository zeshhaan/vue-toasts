<template>
  <div v-for="(toast, id) in toasts" :key="id">
    This is a Toast, ok. {{ id }}
    <button @click="closeToast(toast)">close</button>
  </div>
  <button @click="generateToast">click to show toast</button>
</template>

<script setup lang="ts">
import { useToast } from '../composables/useToast.ts';

const { toasts, closeToast, generateToast } = useToast();
</script>
