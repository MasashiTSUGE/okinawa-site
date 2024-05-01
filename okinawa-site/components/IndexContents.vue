<template>
    <div>
        <section class="overview">
            <FadeIn>
                <div class="overview-image"></div>
            </FadeIn>

            <div class="overview-textbox textbox">
                <FadeIn>
                    <h3 class="uppercase main-font-en">
                        <span>01</span>{{ textbox[0].section }}
                    </h3>
                    <div class="border-topbottom">
                        <h4 class="section-title">{{ textbox[0].title }}</h4>
                        <p>{{ textbox[0].text }}</p>
                        <a v-if="textbox[0].link">詳しく見る</a>
                    </div>
                </FadeIn>
            </div>
        </section>
        <section class="activities">
            <p class="index-vertical vertical">遊ぶ</p>
            <div class="activities-hanabi"></div>
            <FadeIn>
                <div class="activities-image-1"></div>
            </FadeIn>
            <FadeIn>
                <div class="activities-image-2"></div>
            </FadeIn>
            <FadeIn>
                <div class="activities-image-3"></div>
            </FadeIn>

            <div class="activities-textbox textbox">
                <FadeIn>
                    <h3 class="uppercase main-font-en">
                        <span>02</span>{{ textbox[1].section }}
                    </h3>
                    <div class="border-topbottom">
                        <h4 class="section-title">{{ textbox[1].title }}</h4>
                        <p>{{ textbox[1].text }}</p>
                        <a v-if="textbox[1].link" href="/activities"
                            ><p>詳しく見る</p>
                            <Icon
                                name="material-symbols-light:play-circle-outline"
                        /></a></div
                ></FadeIn>
            </div>
        </section>
        <section class="foods">
            <p class="index-vertical vertical">食べる</p>
            <div class="food-hibiscus"></div>
            <FadeIn>
                <FoodsSlide />
            </FadeIn>

            <div class="foods-textbox textbox">
                <FadeIn
                    ><h3 class="uppercase main-font-en">
                        <span>03</span>{{ textbox[2].section }}
                    </h3>
                    <div class="border-topbottom">
                        <h4 class="section-title">{{ textbox[2].title }}</h4>
                        <p>{{ textbox[2].text }}</p>
                        <a v-if="textbox[2].link" href="/foods"
                            ><p>詳しく見る</p>
                            <Icon
                                name="material-symbols-light:play-circle-outline"
                        /></a></div
                ></FadeIn>
            </div>
        </section>
        <section class="hotels">
            <FadeIn>
                <div class="hotel-image"></div>
            </FadeIn>
            <p class="index-vertical vertical">泊まる</p>
            <FadeIn>
                <HotelSlide />
            </FadeIn>
            <div class="hotels-textbox textbox">
                <FadeIn>
                    <h3 class="uppercase main-font-en">
                        <span>04</span>{{ textbox[3].section }}
                    </h3>
                    <div class="border-topbottom">
                        <h4 class="section-title">{{ textbox[3].title }}</h4>
                        <p>{{ textbox[3].text }}</p>
                        <a v-if="textbox[3].link" href="hotels"
                            ><p>詳しく見る</p>
                            <Icon
                                name="material-symbols-light:play-circle-outline"
                        /></a>
                    </div>
                </FadeIn>
            </div>
        </section>
        <CommonSlide />
        <GetInTouch />
        <Footer />
    </div>
</template>
<script>
import FadeIn from "~/components/FadeIn.vue";
export default {
    component: [FadeIn],
    data() {
        return {
            textbox: [
                {
                    section: "overview",
                    title: "きっと見つかる、わたしの居場所",
                    text: "ゆったりとした自然が広がる場所、沖縄。海をはじめとする景色やアクティビティ、ユニークな食べ物、そして穏やかな人々が非日常を演出します。沖縄だからこそ味わえる、記憶に残るリゾート気分を満喫できます。",
                    link: false,
                },
                {
                    section: "activities",
                    title: "幻想的な空と海の青き世界",
                    text: "ダイビング、シュノーケリング、バナナボートをはじめとするマリンアクティビティや、パラセーリングで空中散歩など、青の世界に包まれながら日常では味わえない遊びが堪能できます。",
                    link: true,
                },
                {
                    section: "foods",
                    title: "ユニークな絶品料理に舌鼓",
                    text: "ソーキそば、アグー豚、泡盛など、沖縄にはユニークでおいしい郷土料理がたくさんあります。昼はおしゃれなカフェでランチ、夜はお酒を飲みながら郷土料理ディナー。目から舌から美味しい時間を堪能できます。",
                    link: true,
                },
                {
                    section: "hotels",
                    title: "ゆったりとくつろげる厳選の宿",
                    text: "沖縄には異国のようなリゾートホテルが豊富にご用意されています。その非日常的な空間は、楽しい観光やアクティビティの疲れを癒してくれます。ホテルでゆっくりリゾート気分を味わうのもおすすめです。",
                    link: true,
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
section {
    position: relative;
}
.index-vertical {
    font-family: var(--ShipporiMincho);
    font-size: 10.6vw;
    color: var(--text-lightgray);
    letter-spacing: 0.5em;
}
.overview {
    padding-top: 70px;
    width: 100%;
    height: 210vw;
    .overview-image {
        position: absolute;
        width: 91%;
        top: 70px;
        aspect-ratio: 342/400;
        height: auto;
        background: url(images/index-overview.png) center/cover;
        z-index: 5;
    }
    .overview-textbox {
        position: absolute;
        top: 117vw;
        left: 3.4%;
        z-index: 10;
    }
    @media screen and (min-width: 768px) {
        padding-top: 12.4vw;
        height: 80vw;
        .overview-image {
            top: 12.4vw;
            width: 70.5vw;
            aspect-ratio: 963/700;
        }
        .overview-textbox {
            top: 41.7vw;
            left: 30.7vw;
        }
    }
}
.activities {
    background-color: #f2f2f2;
    width: 100%;
    margin-top: 13vw;
    margin-bottom: 30vw;
    height: 151vw;
    .activities-textbox {
        position: absolute;
        bottom: -30vw;
    }
    .activities-hanabi {
        background: url(images/index-activities-hanabi.svg) center/contain
            no-repeat;
        width: 29.8vw;
        aspect-ratio: 112/80;
        position: absolute;
        top: -13vw;
        left: 3.4vw;
    }
    .index-vertical {
        position: absolute;
        top: 42vw;
        left: 13vw;
        z-index: 7;
    }
    .activities-image-1 {
        background: url(images/index-activities-1.png) center/cover no-repeat;
        position: absolute;
        width: 43.7vw;
        aspect-ratio: 1/1;
        left: 21vw;
        top: 28.2vw;
        z-index: 6;
    }
    .activities-image-2 {
        position: absolute;
        background: url(images/index-activities-2.png) center/cover;
        width: 12.3vw;
        aspect-ratio: 46/103;
        top: 8.8vw;
        right: 17.6vw;
    }
    .activities-image-3 {
        position: absolute;
        background: url(images/index-activities-3.png) 65% 50% / cover;
        width: 12.3vw;
        aspect-ratio: 46/103;
        top: -13vw;
        right: 0;
    }
    @media screen and (min-width: 768px) {
        margin-top: 21.3vw;
        width: 91.5vw;
        height: 106vw;
        margin-left: 8.5vw;
        margin-bottom: 33vw;
        .activities-textbox {
            top: 81.4vw;
            left: -4.2vw;
        }
        .activities-hanabi {
            top: -7.9vw;
            left: -4.2vw;
            width: 28.1vw;
            aspect-ratio: 385/425;
        }
        .index-vertical {
            top: 34.8vw;
            left: -1vw;
        }
        .activities-image-1 {
            width: 46.5vw;
            top: 27.5vw;
            left: 11.1vw;
        }
        .activities-image-2 {
            width: 11vw;
            aspect-ratio: 151/338;
            top: 10.1vw;
            left: 63.4vw;
        }
        .activities-image-3 {
            width: 11vw;
            aspect-ratio: 151/338;
            top: -7.3vw;
        }
    }
}
.foods {
    margin-top: 48.2vw;
    background-color: #f2f2f2;
    margin-right: auto;
    margin-bottom: 25.2vw;
    width: 91.2vw;
    height: 133vw;
    .foods-textbox {
        position: absolute;
        bottom: -25.2vw;
        left: 12vw;
    }
    .index-vertical {
        position: absolute;
        top: -8vw;
        right: -8vw;
        letter-spacing: 0.14em;
    }
    .food-hibiscus {
        width: 26.6vw;
        height: 26.6vw;
        background: url("images/index-food-hibiscus.svg") center/contain
            no-repeat;
        position: absolute;
        right: -17.6vw;
        top: 40vw;
    }
    @media screen and (min-width: 768px) {
        margin-top: 38.8vw;
        width: 91.5vw;
        height: 88.1vw;
        .index-vertical {
            top: -5.8vw;
            right: -10.2vw;
        }
        .food-hibiscus {
            width: 24.9vw;
            aspect-ratio: 341/334;
            top: 29.2vw;
            right: -11.4vw;
        }
        .foods-textbox {
            left: 30.7vw;
            bottom: -16.1vw;
        }
    }
}
.hotels {
    margin-top: 54.9vw;
    margin-bottom: 26.9vw;
    width: 91.2vw;
    height: 128.5vw;
    background-color: #f2f2f2;
    .index-vertical {
        position: absolute;
        top: -8vw;
        right: -8vw;
        z-index: 10;
        letter-spacing: 0.14em;
    }
    .hotels-textbox {
        position: absolute;
        bottom: -26.9vw;
        left: 0;
        z-index: 10;
    }
    @media screen and (min-width: 768px) {
        margin-top: 31.1vw;
        width: 88.8vw;
        height: 79.4vw;
        margin-left: 11.2vw;
        margin-bottom: 12.5vw;
        .hotels-textbox {
            left: -6.9vw;
            top: 48.6vw;
            bottom: auto;
        }
        .index-vertical {
            top: -7.3vw;
            right: 2.8vw;
        }
    }
}
.textbox {
    background-color: #fff;
    padding: 20px;
    width: 87vw;
    @media screen and (min-width: 768px) {
        width: 69.2vw;
        aspect-ratio: 946/524;
        padding: 7.3vw 3.6vw;
    }
}
.overview {
    .textbox {
        width: calc(87% + 20px);
        @media screen and (min-width: 768px) {
            width: 69.2vw;
            aspect-ratio: 946/524;
        }
    }
}
h3 {
    margin-bottom: 20px;
    span {
        margin-right: 1em;
    }
}
.border-topbottom {
    padding: 20px 0;
    border-top: 1px solid var(--text-main);
    border-bottom: 1px solid var(--text-main);
    h4 {
        margin-bottom: 20px;
    }
    p {
        padding-bottom: 1em;
    }
    a {
        display: flex;
        align-items: center;
        margin-top: 20px;
        text-decoration: none;
        p {
            padding: 0;
            margin-right: 1em;
        }
        .icon {
            width: 24px;
            height: 24px;
        }
    }
    @media screen and (min-width: 768px) {
        padding: 5.8vw 0;
        a {
            .icon {
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>
