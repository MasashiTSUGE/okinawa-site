<template>
    <section class="restaurant">
        <div class="background">
            <div class="subtitle">
                <h2 class="sub-copy">沖縄の人気店</h2>
                <h3 class="text-center main-font-en uppercase">restaurant</h3>
            </div>
            <ul>
                <li class="list-title">
                    <p>店名</p>
                    <p>予算目安</p>
                </li>
                <li v-for="(item, index) in lists" :key="index">
                    <a href="{{ item.link }}"
                        ><p>
                            {{ item.name }}
                            <Icon name="iconamoon:link-external" /></p
                    ></a>
                    <p>{{ replace(item.price.min, item.price.max) }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            lists: [
                {
                    name: "こてっぺん",
                    price: { min: "4000", max: "4999" },
                    link: "#",
                },
                {
                    name: "あじま一商店",
                    price: { min: "5000", max: "5999" },
                    link: "#",
                },
                {
                    name: "じまんや那覇店",
                    price: { min: "5000", max: "5999" },
                    link: "#",
                },
                {
                    name: "居酒屋めーめー",
                    price: { min: "4000", max: "4999" },
                    link: "#",
                },
                {
                    name: "琉球ダイニングふぁいみーる",
                    price: { min: "5000", max: "5999" },
                },
            ],
        };
    },
    methods: {
        replace: function (num1, num2) {
            return (
                "￥" + num1.toLocaleString() + "～￥" + num2.toLocaleString()
            );
        },
    },
};
</script>
<style lang="scss" scoped>
*.text-center {
    text-align: center;
}
.background {
    position: relative;
    padding-bottom: 13.3vw;
    .subtitle {
        text-align: center;
        margin: 0 auto 12.5vw auto;
        width: 58.6vw;
    }
    ul {
        margin-right: 1em;
        margin-left: 1em;
        li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5.3vw;
        }
        .list-title {
            padding-bottom: 1em;
            border-bottom: 1px solid var(--text-main);
        }
    }
}
.background::after,
.background::before {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(100% - 4vw);
    top: 4vw;
}
.background::after {
    background: url("/images/foods-restaurant-bg.png") center/cover;
    z-index: -2;
}
.background::before {
    background-color: #fff;
    opacity: 0.6;
    z-index: -1;
}
@media screen and (min-width: 768px) {
    .background::after,
    .background::before {
        height: calc(100% - 1.7vw);
        top: 1.7vw;
    }
    .background {
        padding-bottom: 7.3vw;
        .subtitle {
            width: 28.4vw;
            margin: 0 auto 7.7vw auto;
            .sub-copy {
                font-size: 2.3vw;
            }
        }
        ul {
            margin-left: 29.6vw;
            margin-right: 29.6vw;
            li {
                margin-bottom: 2.2vw;
            }
            .list-title {
                margin-bottom: 1.2vw;
            }
        }
    }
}
</style>
