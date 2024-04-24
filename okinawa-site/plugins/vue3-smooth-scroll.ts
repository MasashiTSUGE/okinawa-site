import { defineNuxtPlugin } from "#app";
import VueSmoothScroll from "vue3-smooth-scroll";
export default defineNuxtPlugin((nuxtApp) => {
    const config = {
        duration: 500,
        offset: 0,
        container: "",
        updateHistory: true,
        easingFunction: null,
    };

    nuxtApp.vueApp.use(VueSmoothScroll, config);
});
