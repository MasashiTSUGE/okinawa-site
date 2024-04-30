<template>
    <div class="intro-wrap">
        <section class="hotel-intro-1">
            <div class="border-left">
                <h2 class="sub-copy">南国気分を<br />味わえる最高の宿</h2>
                <p>
                    日本の中で海外のリゾート気分を満喫できる沖縄の宿。高級宿からリーズナブルな民宿まで、日本らしくない独自の居心地を感じることができる宿がたくさんあります。ぜひ非日常を味わいに足を運んでみて下さい。
                </p>
            </div>
            <img class="intro-img-1" src="/images/hotels-intro-1.png" />
        </section>
        <section class="hotel-intro-2">
            <div class="bath">
                <p class="vertical sub-copy">bath</p>
                <img src="/images/hotels-intro-bath.png" />
            </div>
            <div class="room">
                <p class="vertical sub-copy">room</p>
                <img src="/images/hotels-intro-room.png" />
            </div>
            <div class="border-left">
                <h2 class="sub-copy">旅の疲れを<br />癒しに変える</h2>
                <p>
                    たっぷりと遊んで疲れた体を癒してくれる沖縄のリゾートホテル。南国を連想させるその景観とおもてなしは充実感をももたらしてくれます。美味美食を味わいながら、旅を思い出に変える一時をお楽しみください。
                </p>
            </div>
            <div class="view">
                <p class="vertical sub-copy">view</p>
                <img src="/images/hotels-intro-view.png" />
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
<style lang="scss" scoped>
.intro-wrap {
    margin-bottom: 26.6vw;
    @media screen and (min-width: 768px) {
        margin-bottom: 14.6vw;
    }
}
.hotel-intro-1,
.hotel-intro-2 {
    .intro-img-1 {
        display: block;
        width: 70.1vw;
        aspect-ratio: 263/354;
        margin-left: auto;
    }
    .border-left {
        margin-left: 3.4vw;
        margin-bottom: 13.3vw;
        padding-left: 5.6vw;
        height: fit-content;
        border-left: 1px solid var(--text-main);
        h2 {
            line-height: 1.9;
            margin-bottom: 1em;
        }
        p {
            display: block;
            width: 54.4vw;
            height: auto;
        }
    }
    @media screen and (min-width: 768px) {
        .border-left {
            width: 31.9vw;
            height: fit-content;
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
                margin-bottom: 1.5em;
            }
        }
    }
}
@media screen and (min-width: 768px) {
    .hotel-intro-1 {
        position: relative;
        height: 53.1vw;
        .intro-img-1 {
            position: absolute;
            z-index: 1;
            right: 0;
            top: 0;
            height: 100%;
            width: 88.7vw;
        }
        .border-left {
            position: absolute;
            z-index: 2;
            top: 6.5vw;
            left: 4.2vw;
        }
    }
}
.hotel-intro-2 {
    position: relative;
    height: 261vw;
    img {
        position: absolute;
    }
    .vertical {
        position: absolute;
        font-size: 10.6vw;
        line-height: 1;
        letter-spacing: 0;
        text-transform: capitalize;
        color: var(--text-lightgray);
    }
    .bath {
        position: absolute;
        top: 0;
        right: 0;
        width: 29.8vw;
        height: 81.6vw;
        p {
            top: 0;
            left: 0;
            z-index: 2;
        }
        img {
            width: 100%;
            height: 74.1%;
            bottom: 0;
            right: 0;
            z-index: 1;
        }
    }
    .room {
        position: absolute;
        top: 68.2vw;
        left: 0;
        width: 64vw;
        height: 60.2vw;
        img {
            width: 87.5%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 2;
        }
        p {
            top: 10px;
            right: 0;
            z-index: 1;
        }
    }
    .view {
        position: absolute;
        width: 93vw;
        height: 46.9vw;
        right: 0;
        bottom: 0;
        img {
            width: 94.3%;
            height: 100%;
            top: 0;
            right: 0;
            z-index: 1;
        }
        p {
            bottom: 0;
            left: 0;
            z-index: 2;
        }
    }
    .border-left {
        position: absolute;
        top: 141.8vw;
        left: 29.8vw;
    }
    @media screen and (min-width: 768px) {
        height: 125.9vw;
        .vertical {
            font-size: 6.6vw;
        }
        .bath {
            width: 17.7vw;
            height: 43.6vw;
            img {
                width: 86.8%;
                height: 71.4%;
            }
        }
        .room {
            width: 54.3vw;
            height: 53.1vw;
            top: 23.8vw;
            img {
                width: 90.5%;
            }
            p {
                top: 20px;
            }
        }
        .view {
            width: 95.1vw;
            height: 41.5vw;
            img {
                width: 96.1%;
            }
        }
        .border-left {
            top: 57.3vw;
            left: 61.9vw;
        }
    }
}
</style>
