<template>
  <v-list-item
    class="text-start"
    :title="`गायक: ${jankari.गायक}`"
    :subtitle="jankari.तिथी"
    @click=""
  >
    <p class="mb-2">
      <span class="font-weight-bold">गाना का नाम:</span>
      <v-chip class="mx-2" variant="outlined" label density="compact">{{
        jankari.गाना
      }}</v-chip>
    </p>
  </v-list-item>
  <v-divider />
</template>

<script setup lang="ts">
import type {जानकारी_प्रकार} from "../प्रकार.ts";
defineProps<{ jankari: जानकारी_प्रकार }>();
</script>
