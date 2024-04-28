<template>
    <div class="contents-wrap">
        <Header />
        <SubHero
            bgUrl="images/activities-hero-bg.png"
            title="activities"
            subtitle="アクティビティ"
        />
        <ActivitiesIntro />
        <ActivitiesContents />
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
