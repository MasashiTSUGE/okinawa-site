<template>
    <section class="news">
        <ul>
            <li><p class="uppercase">what's new</p></li>
            <li v-for="(item, index) in lists" :key="index">
                <p>
                    <span>{{ item.date }}</span
                    >{{ item.text }}
                </p>
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
                    date: "2023.07.25",
                    text: "サイトリニューアルしました",
                },
                {
                    date: "2022.07.01",
                    text: "沖縄特集ポータルサイトを開設しました",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.news {
    width: 100%;
    padding: 30px 13px;
    li {
        padding: 20px 0;
        border-bottom: 1px solid var(--text-main);
        span {
            font-family: var(--NotoSans);
            margin-right: 1em;
        }
    }
    @media screen and (min-width: 768px) {
        width: 74%;
        max-width: 1020px;
        margin: 0 auto;
        li {
            span {
                margin-right: 45px;
            }
        }
    }
}
</style>
