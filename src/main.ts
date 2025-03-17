import { loadFonts } from "./जोड़ाई/webfontloader.ts";
import { createApp as अनुप्रयोग_बनाना } from "vue";
import अनुप्रयोग from "./अनुप्रयोग.vue";
import व्यूटिफाई from "./जोड़ाई/व्यूटिफाई.ts";
loadFonts();

अनुप्रयोग_बनाना(अनुप्रयोग).use(व्यूटिफाई).mount("#अनुप्रयोग");
