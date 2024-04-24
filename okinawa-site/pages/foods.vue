<template>
    <div class="contents-wrap">
        <Header />
        <SubHero
            bgUrl="images/foods-hero-bg.png"
            title="foods"
            subtitle="沖縄絶品料理"
        />
        <CommonSlide />
        <GetInTouch />
        <Footer />
    </div>
</template>
<script>
import SubHero from "~/components/SubHero.vue";
export default {
    data() {
        return {
            bgurl: "",
        };
    },
    components: {
        SubHero: SubHero,
    },
};
</script>
