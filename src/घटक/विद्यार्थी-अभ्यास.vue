<template>
  <v-list-item
    class="text-start"
    :title="`विद्यार्थी: ${jankari.विद्यार्थी}`"
    :subtitle="jankari.समय"
    @click=""
  >
    <p class="mb-2">
      <span class="font-weight-bold">शब्द:</span>
      <v-chip class="mx-2" variant="outlined" label density="compact">{{
        jankari.शब्द
      }}</v-chip>
    </p>
    <p>
      <span class="font-weight-bold">ऐसे लिखा:</span>
      <v-chip class="mx-2" variant="outlined" label density="compact">{{
        jankari.लिखा
      }}</v-chip>
    </p>
  </v-list-item>
  <v-divider />
</template>

<script setup lang="ts">
import type जानकारी_प्रकार from "../प्रकार.ts";
defineProps<{ jankari: जानकारी_प्रकार }>();
</script>
