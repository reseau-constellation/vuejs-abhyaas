<template>
  <v-dialog>
    <template #activator="{ props: चालक_गुण }">
      <v-btn icon size="x-small" variant="outlined" v-bind="चालक_गुण">?</v-btn>
    </template>
    <v-card>
      <v-card-item>
        <v-card-title>थोड़ा मदद की आवश्यक्ता है?</v-card-title>
        <v-card-subtitle>फिकर मत करना</v-card-subtitle>
      </v-card-item>
      <v-card-text>
        <p class="mb-2">
          इस पृष्ठ <a href="" target="_blank">व्यू</a> और
          <a
            href="https://vuetifyjs.com/en/components/all/#containment"
            target="_blank"
          >
            व्यूटिफाई
          </a>
          से बनी है। अगर पता न हो कि विद्यार्थियों का चयन का विकल्प कैसे किया जा
          सकता है तो
          <a href="https://vuetifyjs.com/en/components/selects/" target="_blank"
            >v-select</a
          >
          ज़रूर देखना।
        </p>
        <p class="mb-2">
          इस अभ्यास से हम यह सीखने चाहते हैं कि आपके साथ काम करने कैसे लगेगा।
          साथ में काम करने के लिये प्रश्न पूछने और बातचीत करने बहुत महत्वपूर्ण
          हैं। इसी लिये जो संदेह भी हो, उसके बारे में हमसे ईमेल या वाट्साप से
          संपर्क करने का संकोच न करें।
        </p>
        <p class="mb-2">
          अगर दी गई काम से उपर अनुप्रयोग को और सुधार करने चाहती हैं, तो आपकी
          रचनातमक्ता दिकाने का संकोच न करें।
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts"></script>
