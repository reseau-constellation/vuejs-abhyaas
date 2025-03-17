<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
          <v-img src="/@/चित्र/व्यू.svg" width="400" class="mx-auto mb-3" />
          <h1>व्यू जे॰ येस॰ की नौकरी का अवसर का अभ्यास</h1>
          <p class="mb-2">
            हिंदी कक्षा की विद्यार्थिोयों के अभ्ययास के नतीजे नीचे दिये गये हैं।
            फिर भी बहुत नतीजे हैं और अद्ययापक को उनहें पढ़ने में बहुत दिकत हो
            रही हैं। इस पृष्ठ को बेहतर कर लीजिये ताकि अद्ययापक एक समय पर एक ही
            विद्यार्थी का चयन करके उसका काम ही देख सकें।
            <madad-ke-liye />
          </p>
          <abhyaas-suchi />
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AbhyaasSuchi from "./घटक/अभ्यास-सूची.vue";
import MadadKeLiye from "./घटक/मदद-के-लिये.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
