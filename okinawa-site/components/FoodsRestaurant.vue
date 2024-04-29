<template>
    <section class="restaurant">
        <div class="background">
            <div class="subtitle">
                <h2 class="sub-copy">沖縄の人気店</h2>
                <h3 class="text-center main-font-en uppercase">restaurant</h3>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            lists: [
                { name: "こてっぺん", price: { min: "4000", max: "4999" } },
                { name: "あじま一商店", price: { min: "5000", max: "5999" } },
                { name: "じまんや那覇店", price: { min: "5000", max: "5999" } },
                { name: "居酒屋めーめー", price: { min: "4000", max: "4999" } },
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
    .subtitle {
        text-align: center;
        margin: 0 auto 12.5vw auto;
        width: 58.6vw;
    }
}
.background::after {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(100% - 4vw);
    top: 4vw;
    background: rgba(0, 0, 0, 0.5);
}
@media screen and (min-width: 768px) {
    .subtitle {
        width: 28.4vw;
        margin: -1.7vw auto 7.7vw auto;
        .sub-copy {
            font-size: 2.3vw;
        }
    }
}
</style>
