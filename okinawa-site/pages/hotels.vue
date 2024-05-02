<script setup>
useHead({ title: "Okinawa-site | Hotels" });
</script>
<template>
    <div class="contents-wrap">
        <Header />
        <SubHero
            bgUrl="images/hotels-hero-bg.png"
            title="hotels"
            subtitle="宿泊施設"
        />
        <HotelIntro />
        <HotelRecommend />
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
