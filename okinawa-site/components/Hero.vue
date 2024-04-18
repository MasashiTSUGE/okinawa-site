<template>
    <section class="hero" @click="change">
        <div class="hero-slider">
            <div class="img-left">
                <transition>
                    <img
                        :src="`images/${image[0]}`"
                        alt=""
                        v-show="page == 0"
                        :key="`left${page}`"
                    />
                </transition>
                <transition>
                    <img
                        :src="`images/${image[1]}`"
                        alt=""
                        v-show="page == 1"
                        :key="`left${page}`"
                    />
                </transition>
                <transition>
                    <img
                        :src="`images/${image[2]}`"
                        alt=""
                        v-show="page == 2"
                        :key="`left${page}`"
                    />
                </transition>
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
                <transition>
                    <img
                        :src="`images/${image[0]}`"
                        alt=""
                        v-show="page == 0"
                        :key="page"
                    />
                </transition>
                <transition>
                    <img
                        :src="`images/${image[1]}`"
                        alt=""
                        v-show="page == 1"
                        :key="page"
                    />
                </transition>
                <transition>
                    <img
                        :src="`images/${image[2]}`"
                        alt=""
                        v-show="page == 2"
                        :key="page"
                    />
                </transition>
            </div>
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
        setInterval(this.change, 7500);
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
    transition: all 1s ease;
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
    display: flex;
    overflow-x: hidden;
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
            flex-shrink: 0;
            img {
                width: 100%;
                height: 100%;
                position: absolute;
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
            flex-shrink: 0;
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
                    padding: 10px 5px;
                    height: fit-content;
                    width: fit-content;
                }
                .second {
                    margin-top: 36px;
                }
            }
        }
        .img-right {
            background-color: #fff;
            height: 100%;
            width: 61%;
            flex-shrink: 0;
            img {
                position: absolute;
            }
        }
    }
    @media screen and (min-width: 768px) {
        width: 100%;
        height: 47vw;
        .hero-slider {
            .img-left {
                width: 66%;
                .hero-sub {
                    font-size: 36px;
                    left: 40px;
                    bottom: 50px;
                }
            }
            .img-center {
                width: 8.4%;
                .hero-title {
                    font-size: 60px;
                    font-weight: 400;
                    top: auto;
                    bottom: -10px;
                    left: -64px;
                    height: fit-content;
                    span {
                        padding: 30px 10px;
                    }
                    .second {
                        margin-top: 67px;
                    }
                }
            }
            .img-right {
                img {
                    object-position: right 200px top 50%;
                }
            }
        }
    }
}
</style>
