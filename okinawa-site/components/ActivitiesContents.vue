<template>
    <section class="activities-contents">
        <ul class="tab-index uppercase main-font-en">
            <li @click="change(0)" :class="{ underline: index == 0 }">
                diving
            </li>
            <li @click="change(1)" :class="{ underline: index == 1 }">
                sea kayak
            </li>
            <li @click="change(2)" :class="{ underline: index == 2 }">
                parasailing
            </li>
        </ul>
        <div class="contents">
            <img :src="content[index].src" />
            <div class="textbox">
                <h3 class="sub-copy">{{ content[index].title }}</h3>
                <p>{{ content[index].text }}</p>
                <p>費用相場：{{ content[index].price }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            content: [
                {
                    src: "/images/activities-contents-1.png",
                    title: "水中の世界",
                    text: "沖縄の海と言えば「ダイビング」。透き通った海水から織り成す青色はまさに幻想的。水に包まれながら癒される空間を味わえます。",
                    price: "￥13,200～￥26,400",
                },
                {
                    src: "/images/activities-contents-2.png",
                    title: "水上リフレッシュ",
                    text: "水上でのアクティビティはサーフィンやバナナボートだけでなく、シーカヤック人気です。潮騒を聞きながら適度な運動で心地いい体験ができます。",
                    price: "￥1,500～￥3,500",
                },
                {
                    src: "/images/activities-contents-3.png",
                    title: "空中散歩",
                    text: "沖縄は海だけじゃない！空もある！上を見れば青い空、下を見れば青い海。青に包まれる沖縄のパラセーリングで絶景体験ができます。",
                    price: "￥6,000～￥15,000",
                },
            ],
            index: 0,
        };
    },
    methods: {
        change: function (num) {
            this.index = num;
        },
    },
};
</script>

<style lang="scss" scoped>
.activities-contents {
    padding-left: 3.4vw;
    padding-right: 3.4vw;
    ul {
        display: flex;
        margin-bottom: 5.3vw;
        li {
            margin-right: 5.3vw;
        }
        li:hover {
            color: var(--form-red);
        }
        .underline {
            border-bottom: 1px solid currentColor;
        }
    }
    .contents {
        img {
            display: block;
            width: 78.9vw;
            height: 66.6vw;
            position: relative;
            z-index: 5;
            object-fit: cover;
            object-position: center;
        }
        .textbox {
            background-color: #fff;
            width: 87.7vw;
            height: 65.8vw;
            margin-top: -15vw;
            position: relative;
            z-index: 6;
            margin-left: auto;
            padding: 8vw 11.4vw 8vw 5.3vw;
            h3 {
                margin-bottom: 5.3vw;
            }
            p:first-of-type {
                padding-bottom: 5.3vw;
                border-bottom: 1px solid var(--text-main);
                margin-bottom: 5.3vw;
            }
        }
    }
    @media screen and (min-width: 768px) {
        padding-left: 4.2vw;
        padding-right: 4.2vw;
        ul {
            margin-bottom: 3.6vw;
        }
        .contents {
            img {
                width: 74.6vw;
                height: 37.8vw;
            }
            .textbox {
                width: 44.5vw;
                height: 23vw;
                margin-top: -14.6vw;
                padding: 3.6vw;
                h3 {
                    margin-bottom: 2.2vw;
                }
                .sub-copy {
                    font-size: 2.34vw;
                }
                p:first-of-type {
                    padding-bottom: 2.3vw;
                    margin-bottom: 2.3vw;
                }
            }
        }
    }
}
</style>
