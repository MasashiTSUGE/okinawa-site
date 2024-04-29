<template>
    <section class="intro">
        <div class="foods-grid">
            <img
                v-for="i in 10"
                :src="`/images/foods-garally-${i}.png`"
                :key="i"
                :id="`img${i}`"
            />
        </div>
        <div class="border-left">
            <h2 class="sub-copy">地産地消の食材でおもてなし</h2>
            <p>
                沖縄では地元食材をふんだんに使った料理があります。味はもちろん、馴染みのない美味しい料理を味わえます。中でもアグー豚は新鮮で臭みがなく、焼きものからしゃぶしゃぶまで美味しくいただけます。
            </p>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
    padding-left: 3.4vw;
    padding-right: 3.4vw;
    margin-bottom: 26.6vw;
    .foods-grid {
        width: 85.3vw;
        height: 106vw;
        margin-left: auto;
        margin-bottom: 15.2vw;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(10, 1fr);
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
        #img1 {
            grid-column: 1/4;
            grid-row: 1/4;
        }
        #img2 {
            grid-column: 4/6;
            grid-row: 1/3;
        }
        #img3 {
            grid-column: 6/9;
            grid-row: 1/6;
        }
        #img4 {
            grid-column: 1/4;
            grid-row: 4/6;
        }
        #img5 {
            grid-column: 4/6;
            grid-row: 3/6;
        }
        #img6 {
            grid-column: 1/3;
            grid-row: 6/9;
        }
        #img7 {
            grid-column: 3/5;
            grid-row: 6/9;
        }
        #img8 {
            grid-column: 5/9;
            grid-row: 6/8;
        }
        #img9 {
            grid-column: 1/5;
            grid-row: 9/11;
        }
        #img10 {
            grid-column: 5/9;
            grid-row: 8/11;
        }
    }
    .border-left {
        padding-left: 5.6vw;
        height: 41.3vw;
        border-left: 1px solid var(--text-main);
        h2 {
            line-height: 1.9;
            margin-bottom: 1em;
        }
        p {
            display: block;
            width: 70.1vw;
            height: 9em;
        }
    }
    @media screen and (min-width: 768px) {
        padding-left: 4.2vw;
        padding-right: 0;
        margin-bottom: 14.6vw;
        .foods-grid {
            margin-right: 11.8vw;
            width: 58.5vw;
            height: 73.2vw;
            margin-bottom: 7.3vw;
        }
        .border-left {
            width: 31.9vw;
            height: 16vw;
            margin: 0;
            padding-left: 1.4vw;
            align-self: flex-end;
            h2 {
                font-size: 2.3vw;
                br {
                    display: none;
                }
            }
            p {
                width: 30.5vw;
            }
        }
    }
}
</style>
