<template>
    <section class="recommend">
        <div class="frame">
            <div class="subtitle">
                <h2 class="sub-copy">沖縄のおすすめ料理</h2>
                <h3 class="text-center main-font-en uppercase">pick up</h3>
            </div>
            <ul>
                <li v-for="(list, index) in lists" :key="index">
                    <p class="list-label"><img :src="list.title.src" /></p>
                    <div class="list-image">
                        <img :src="list.src" />
                    </div>
                    <h4 class="main-font">{{ list.title.name }}</h4>
                    <p class="main-font">{{ list.text }}</p>
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
    li {
        width: 82.4vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 13.3vw;
        padding-left: 4.8vw;
        position: relative;
        .list-label {
            position: absolute;
            text-align: center;
            width: 38.1vw;
            height: 11.4vw;
            left: 0;
            top: 5vw;
            background-color: #fff8de;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                display: block;
                max-width: 80%;
            }
        }
        .list-label::after {
            content: "";
            width: 4.9vw;
            height: 2.4vw;
            left: 0;
            top: 11.4vw;
            position: absolute;
            background-color: #d9d7c4;
            clip-path: polygon(0 0, 100% 0, 100% 100%);
        }
        .list-image {
            width: 100%;
            margin-bottom: 8vw;
            img {
                width: 100%;
                aspect-ratio: 309/242;
            }
        }
        h4 {
            font-weight: 500;
            margin-bottom: 10px;
        }
    }
    @media screen and (min-width: 768px) {
        padding-left: 3.5vw;
        padding-right: 3.5vw;
        margin-bottom: 14.6vw;
        .subtitle {
            width: 28.4vw;
            margin: -1.7vw auto 7.7vw auto;
            .sub-copy {
                font-size: 2.3vw;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            li {
                width: 25.3vw;
                padding-left: 1.4vw;
                margin-bottom: 5.1vw;
                .list-label {
                    width: 12.5vw;
                    height: 3.8vw;
                    top: 1.5vw;
                }
                .list-label::after {
                    width: 1.4vw;
                    height: 0.7vw;
                    top: 3.8vw;
                }
                .list-image {
                    margin-bottom: 2.5vw;
                }
            }
        }
    }
}
</style>
