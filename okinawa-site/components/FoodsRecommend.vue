<template>
    <section class="recommend">
        <div class="frame">
            <div class="subtitle">
                <h2 class="sub-copy">沖縄のおすすめ料理</h2>
                <h3 class="text-center main-font-en uppercase">pick up</h3>
            </div>
            <ul></ul>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            lists: [
                {
                    title: {
                        name: "ソーキそば",
                        src: "/images/foods-list-1.svg",
                    },
                    src: "/images/foods-list-1.png",
                    text: "沖縄料理と言ったらまずはこれ！という名物料理。いたるところにお店があるので、食べ比べしても...",
                },
                {
                    title: {
                        name: "アグー豚",
                        src: "/images/foods-list-2.svg",
                    },
                    src: "/images/foods-list-2.png",
                    text: "豚肉の中でも最高級の琉球黒豚。臭みがなく、焼き肉やしゃぶしゃぶは絶品です。",
                },
                {
                    title: {
                        name: "ゴーヤチャンプルー",
                        src: "/images/foods-list-3.svg",
                    },
                    src: "/images/foods-list-3.png",
                    text: "今やご家庭でも簡単に作れる料理ですが、地元のお店で作るものは全然違う？！",
                },
                {
                    title: {
                        name: "タコライス",
                        src: "/images/foods-list-4.svg",
                    },
                    src: "/images/foods-list-4.png",
                    text: "沖縄料理と言ったらまずはこれ！という名物料理。いたるところにお店があるので、食べ比べしても...",
                },
                {
                    title: {
                        name: "ティビチ",
                        src: "/images/foods-list-5.svg",
                    },
                    src: "/images/foods-list-5.png",
                    text: "豚足を大根や昆布などと一緒に煮込んだ料理です。え？！って思いますが食べたら納得の味です。",
                },
                {
                    title: { name: "泡盛", src: "/images/foods-list-6.svg" },
                    src: "/images/foods-list-6.png",
                    text: "沖縄のお酒はやっぱり泡盛！お店によっては飲み比べメニューもあります。",
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
*.text-center {
    text-align: center;
}
.recommend {
    padding-left: 3.4vw;
    padding-right: 3.4vw;
    .subtitle {
        text-align: center;
        background-color: #fff;
        margin: -4vw auto 12.5vw auto;
        width: 58.6vw;
    }
    .frame {
        border: 1px solid var(--text-main);
        margin-top: 4vw;
    }
}
</style>
