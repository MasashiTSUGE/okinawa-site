<template>
    <section class="hero" @click="change">
        <div class="hero-slider">
            <transition-group>
                <div class="img-left">
                    <img
                        :src="`images/${image[0]}`"
                        alt=""
                        v-show="page == 0"
                        :key="`left${page}`"
                    />
                    <img
                        :src="`images/${image[1]}`"
                        alt=""
                        v-show="page == 1"
                        :key="`left${page}`"
                    />
                    <img
                        :src="`images/${image[2]}`"
                        alt=""
                        v-show="page == 2"
                        :key="`left${page}`"
                    />
                    <p class="hero-sub" v-if="page == 0">{{ text[0] }}</p>
                    <p class="hero-sub" v-if="page == 1">{{ text[1] }}</p>
                    <p class="hero-sub" v-if="page == 2">{{ text[2] }}</p>
                </div>
                <div class="img-center">
                    <h2 class="hero-title">
                        <span class="first">五感で感じる</span
                        ><span class="second">沖縄の味わい</span>
                    </h2>
                </div>
                <div class="img-right">
                    <img
                        :src="`images/${image[0]}`"
                        alt=""
                        v-show="page == 0"
                        :key="page"
                    />
                    <img
                        :src="`images/${image[1]}`"
                        alt=""
                        v-show="page == 1"
                        :key="page"
                    />
                    <img
                        :src="`images/${image[2]}`"
                        alt=""
                        v-show="page == 2"
                        :key="page"
                    />
                </div>
            </transition-group>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            page: 0,
            text: ["広がる青の世界", "絶品郷土料理", "異国のような宿"],
            image: ["index-hero-1.png", "index-hero-2.png", "index-hero-3.png"],
        };
    },
    mounted() {
        setInterval(this.change, 5000);
    },
    methods: {
        change() {
            if (this.page < 2) {
                this.page++;
            } else {
                this.page = 0;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.7s ease;
}

.v-enter-from {
    opacity: 0.3;
}
.v-leave-to {
    opacity: 0;
}
img {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
}
.hero {
    height: 380px;
    width: 100%;
    position: relative;
    background-color: var(--form-red);
    display: flex;
    overflow: hidden;
    .hero-slider {
        display: flex;
        height: 100%;
        width: 100%;
        .img-left {
            background-color: #fff;
            display: flex;
            height: 100%;
            width: 61%;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            .hero-sub {
                position: absolute;
                bottom: 20px;
                left: 10px;
                font-size: 24px;
                font-family: var(--ShipporiMincho);
                color: #fff;
            }
        }
        .img-center {
            width: 12%;
            height: 100%;
            background-color: #fff;
            position: relative;
            .hero-title {
                position: absolute;
                z-index: 100;
                top: 50px;
                left: -36px;
                font-size: 24px;
                font-family: var(--ShipporiMincho);
                letter-spacing: 5px;
                width: fit-content;
                writing-mode: vertical-rl;
                span {
                    display: block;
                    background-color: #fff;
                    padding: 10px 13px;
                    height: fit-content;
                }
                .second {
                    margin-top: 36px;
                }
            }
        }
        .img-right {
            background-color: #fff;
            height: 100%;
            width: 27%;
        }
    }
}
</style>
