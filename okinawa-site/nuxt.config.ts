// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Oswald:wght@200..700&family=Shippori+Mincho&display=swap",
                    crossorigin: "",
                },
            ],
        },
    },
    devtools: { enabled: true },
    modules: ["nuxt-icon"],
});
module.exports = {
    css: ["assets/css/reset.css", "assets/css/common.css"],
};
