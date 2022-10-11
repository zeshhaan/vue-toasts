<template>
  <transition
    v-for="(toast, id) in toasts"
    :key="id"
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      class="
        pointer-events-auto
        w-full
        max-w-sm
        rounded-lg
        bg-white
        shadow-lg
        ring-1 ring-black ring-opacity-5
      "
    >
      <div class="p-4">
        <div class="flex items-start">
          <div class="ml-3 w-0 flex-1">This is a Toast, ok. {{ id }}</div>
          <button @click="closeToast(toast)">close</button>
        </div>
      </div>
    </div>
  </transition>
  <button @click="generateToast">click to show toast</button>
</template>

<script setup lang="ts">
import { useToast } from '../composables/useToast.ts';
import SuccessToast from './components/SuccessToast.vue';
import ErrorToast from './components/ErrorToast.vue';

const { toasts, closeToast, generateToast } = useToast();
</script>
