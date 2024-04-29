<template>
    <section class="price-location">
        <div class="center-box">
            <img src="/images/activities-price.png" class="price-image" />
        </div>
        <div class="price">
            <h3><img src="/images/activities-price-title.svg" /></h3>
            <p class="price-title">料金</p>
            <ul>
                <li v-for="data in datas" :key="data.title">
                    <p class="list-title">{{ data.title }}</p>
                    <div v-for="plan in data.plans" :key="plan" class="plans">
                        <p>{{ plan.name }}（{{ plan.time }}分）</p>
                        <p>{{ replace(plan.price) }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="center-box">
            <img src="/images/activities-map.png" />
        </div>
        <div class="location">
            <h3><img src="/images/activities-location-title.svg" /></h3>
            <p class="location-title">おすすめエリア</p>
            <ul>
                <li v-for="data in datas" :key="data.title">
                    <p class="list-title">{{ data.title }}</p>
                    <p>
                        <span v-for="(spot, index) in data.spots" :key="index"
                            >{{ spot
                            }}<span v-if="index + 1 != data.spots.length">
                                /
                            </span></span
                        >
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            datas: [
                {
                    title: "ダイビング",
                    plans: [
                        { name: "初心者コース", time: "20", price: "13200" },
                        { name: "上級者コース", time: "40", price: "26200" },
                    ],
                    spots: ["慶良間諸島", "北谷", "恩納村"],
                },
                {
                    title: "シーカヤック",
                    plans: [
                        { name: "初心者コース", time: "20", price: "1500" },
                        { name: "上級者コース", time: "40", price: "3500" },
                    ],
                    spots: ["恩納村", "読谷村", "瀬底島"],
                },
                {
                    title: "パラセーリング",
                    plans: [
                        { name: "初心者コース", time: "10", price: "6000" },
                        { name: "上級者コース", time: "15", price: "15000" },
                    ],
                    spots: ["那覇", "名護", "与野湾"],
                },
            ],
        };
    },
    methods: {
        replace: function (num) {
            return "￥" + num.toLocaleString() + "-";
        },
    },
};
</script>
<style lang="scss" scoped>
.price-location {
    margin-top: 40vw;
    background: #f2f2f2;
    padding-left: 3.4vw;
    padding-right: 3.4vw;
    padding-bottom: 13.3vw;
    .center-box {
        text-align: center;
        margin-bottom: 26.6vw;
        img {
            width: 82.4vw;
            height: 82.4vw;
        }
    }
    .price-image {
        margin-top: -13.3vw;
    }
    .price,
    .location {
        border: 1px solid var(--text-main);
        position: relative;
        margin-bottom: 26.6vw;
        padding: 13.3vw 14.1vw 14.1vw 5.3vw;
        h3 {
            position: absolute;
            top: -13.3vw;
            left: 5.3vw;
        }
        .price-title,
        .location-title {
            font-size: 14px;
            color: #808080;
            line-height: 2;
            margin-bottom: 20px;
        }
        ul {
            li {
                margin-bottom: 32px;
                .list-title {
                    font-size: 20px;
                    margin-bottom: 20px;
                }
                .plans {
                    display: flex;
                    justify-content: space-between;
                    p:first-of-type {
                        margin-bottom: 1em;
                    }
                }
            }
            li:last-of-type {
                margin-bottom: 0;
            }
        }
    }
    .location {
        margin-bottom: 0;
    }
    .price::after,
    .location::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--text-lightgray);
        top: 20px;
        right: 20px;
    }
    @media screen and (min-width: 768px) {
        *p {
            line-height: 1.5;
        }
        margin-top: 18.3vw;
        display: flex;
        flex-wrap: wrap;
        padding-left: 4.2vw;
        padding-right: 0;
        padding-bottom: 0;
        background: linear-gradient(
            90deg,
            #f2f2f2 91.6%,
            transparent 91.6%,
            transparent 100%
        );
        .center-box {
            width: 45vw;
            height: 45vw;
            margin-bottom: 0;
            img {
                width: 45vw;
                height: 45vw;
            }
        }
        .price-image {
            margin-top: -3.6vw;
        }
        .price,
        .location {
            width: 49vw;
            height: fit-content;
            margin-left: -2.8vw;
            margin-top: 5.5vw;
            margin-bottom: 14.4vw;
            padding: 2.2vw 16.9vw 2.2vw 8.4vw;
            h3 {
                top: -7.5vw;
                left: 0.9vw;
                width: 14.6vw;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .price::after,
        .location::after {
            width: 30px;
            height: 30px;
        }
        .location {
            margin-top: 18.9vw;
            height: fit-content;
            margin-bottom: 3.6vw;
            h3 {
                top: -5vw;
            }
        }
    }
}
</style>
