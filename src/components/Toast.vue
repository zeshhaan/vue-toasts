<template>
  <TransitionGroup tag="ul" name="fade">
    <li
      v-for="toast in toasts"
      :key="toast"
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
          <div class="ml-3 w-0 flex-1">This is a Toast, ok. {{ toast }}</div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              type="button"
              @click="$emit('remove', toast)"
              class="
                inline-flex
                rounded-md
                bg-white
                text-gray-400
                hover:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-500
                focus:ring-offset-2
              "
            >
              <span class="sr-only">Close</span>
              <XMarkIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/20/solid';
import SuccessToast from './components/SuccessToast.vue';
import ErrorToast from './components/ErrorToast.vue';

const props = withDefaults(
  defineProps<{
    toasts?: array;
  }>(),
  {
    toasts: undefined,
  }
);

defineEmits(['remove']);
</script>

<style>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
