<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
          <v-img src="/@/चित्र/व्यू.svg" width="400" class="mx-auto mb-3" />
          <h1>व्यू जे॰ येस॰ की नौकरी का अवसर का अभ्यास</h1>
          <p class="mb-2">
            नीचे अलग-अलग गायकों के गाने की सूची दी गयी है।
            फिर भी बहुत गाने हैं और उपयोगकरताओं को उनहें पढ़ने में बहुत दिक्कत हो
            रही हैं। इस पृष्ठ को बेहतर कर लीजिये ताकि उपयोगकरताएं एक समय पर एक ही
            गायक का चयन करके उनके गाने ही देख सकें।
            <madad-ke-liye />
          </p>
          <abhyaas-suchi />
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AbhyaasSuchi from "./घटक/गाना-सूची.vue";
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
