<template>
    <section class="hotel-recommend">
        <div class="subtitle">
            <h2 class="sub-copy">沖縄のおすすめ宿</h2>
            <h3 class="text-center main-font-en uppercase">pick up</h3>
        </div>
        <ul>
            <li
                v-for="(list, index) in lists"
                :key="index"
                :style="{ backgroundColor: bgColor(index) }"
            >
                <img :src="list.src" />
                <div>
                    <h3 class="main-font">{{ list.name }}</h3>
                    <p class="main-font border-bottom">{{ list.text }}</p>
                    <p class="main-font">
                        {{
                            budgetReplace(list.budget.price, list.budget.person)
                        }}
                    </p>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    data() {
        return {
            lists: [
                {
                    name: "ハレクラニ沖縄",
                    text: "「天国にふさわしい館」でお迎えしているハレクラニ。恩納村にある沖縄海岸国定公園内の海岸線に納得できるラグジュアリーが備わっております。",
                    src: "/images/hotels-recommend-1.png",
                    budget: { price: "54081", person: "2" },
                },
                {
                    name: "ザ・ブセナテラス",
                    text: "青く輝く海、亜熱帯の緑、色鮮やかな花々に囲まれたザ・ブセナテラス。季節の美味美食と高品質なもてなしでお迎えします。",
                    src: "/images/hotels-recommend-2.png",
                    budget: { price: "42925", person: "2" },
                },
                {
                    name: "ザ・ムーンビーチ ミュージアムリゾート",
                    text: "三日月型のプライベートビーチを囲むように佇むリゾート。まるで海外のリゾートホテルのような独特の雰囲気をお楽しみ下さい。",
                    src: "/images/hotels-recommend-3.png",
                    budget: { price: "24320", person: "2" },
                },
            ],
        };
    },
    methods: {
        budgetReplace: function (price, person) {
            return (
                "予算目安：￥" + price.toLocaleString() + "～/" + person + "名"
            );
        },
        bgColor: function (index) {
            const code = 245 - index * 7;
            return `rgb(${code},${code},${code})`;
        },
    },
};
</script>
<style lang="scss" scoped>
*.text-center {
    text-align: center;
}
.hotel-recommend {
    .subtitle {
        text-align: center;
        margin: 0 auto 12.5vw auto;
        width: 58.6vw;
    }
    ul {
        li {
            padding: 13.3vw 3.4vw;
            img {
                width: 100%;
                margin-bottom: 8vw;
                aspect-ratio: 349/244;
            }
            h3 {
                font-size: 5.3vw;
                font-weight: 500;
                margin-bottom: 8vw;
            }
            p {
                color: var(--text-gray);
            }
            .border-bottom {
                padding-bottom: 8vw;
                border-bottom: 1px dashed var(--text-main);
                margin-bottom: 8vw;
            }
        }
    }
    @media screen and (min-width: 768px) {
        .subtitle {
            width: 28.4vw;
            margin: 0 auto 7.7vw auto;
            .sub-copy {
                font-size: 2.3vw;
            }
        }
        ul {
            li {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                padding: 3.6vw 11.7vw;
                img {
                    width: 28.1vw;
                    aspect-ratio: 384/271;
                    margin-bottom: 0;
                }
                div {
                    margin-left: 5.7vw;
                    h3 {
                        font-size: 1.7vw;
                        margin-bottom: 0.8em;
                    }
                    .border-bottom {
                        padding-bottom: 1.3em;
                        margin-bottom: 1.5em;
                    }
                }
            }
        }
    }
}
</style>
