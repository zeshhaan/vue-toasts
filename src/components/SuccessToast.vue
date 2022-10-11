<template>
  <li>
    <template #icon>
      <CheckCircleIcon class="h-5 w-5" aria-hidden="true" />
    </template>
    <template #content>
      <p class="text-sm font-medium text-gray-900">{{ message }}</p>
    </template>
  </li>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid';
</script>
