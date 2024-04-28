<template>
    <div class="subhero" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
        <p class="breadcrumb">
            <router-link to="index.vue">top</router-link><span>-</span
            >{{ title }}
        </p>
        <h2 class="sub-h2">{{ title }}</h2>
        <h3 class="sub-h3">{{ subtitle }}</h3>
    </div>
</template>
<script>
export default {
    props: ["bgUrl", "title", "subtitle"],
};
</script>
<style lang="scss" scoped>
.subhero {
    width: 100vw;
    height: 60.2vw;
    background: 50% 10%/140%;
    margin-top: -80px;
    margin-bottom: 27.2vw;
    position: relative;
    z-index: -1;
    color: var(--text-gray);
    text-transform: capitalize;
    font-weight: 500;
    .breadcrumb {
        font-family: var(--ShipporiMincho);
        position: absolute;
        font-size: 10px;
        letter-spacing: 0;
        bottom: -5vw;
        left: 3.4vw;
        span {
            margin: 0 0.5em;
        }
    }
    .sub-h2 {
        font-size: 9.6vw;
        font-family: var(--ShipporiMincho);
        text-align: right;
        padding-top: 54.1vw;
        padding-right: 3.4vw;
        font-weight: 500;
    }
    .sub-h3 {
        font-size: 3.2vw;
        font-family: var(--ShipporiMincho);
        text-align: right;
        padding-right: 3.4vw;
        font-weight: 500;
    }
    @media screen and (min-width: 768px) {
        height: 20.5vw;
        background: center/100%;
        margin-top: -149px;
        margin-bottom: 13.2vw;
        .breadcrumb {
            left: 2.7vw;
            bottom: -2vw;
        }
        .sub-h2 {
            font-size: 5.2vw;
            padding-top: 16.6vw;
            padding-right: 2.7vw;
        }
        .sub-h3 {
            padding-right: 2.7vw;
            font-size: 1.3vw;
        }
    }
}
</style>
