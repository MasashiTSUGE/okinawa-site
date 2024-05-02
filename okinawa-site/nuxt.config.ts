// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Okinawa-Site",
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
    css: ["~/assets/css/reset.css", "~/assets/css/common.scss"],
    modules: ["nuxt-icon"],
});
