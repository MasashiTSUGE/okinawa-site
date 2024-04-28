<template>
    <section class="activities-intro">
        <img src="/images/index-activities-3.png" />
        <div class="border-left">
            <h2 class="sub-copy">青く無垢な<br />大自然を堪能する</h2>
            <p>
                沖縄の本島・離島には海をはじめとする自然を活かしたアクティビティが豊富にあります。水上・水中・空中を使った遊びは日常では味わえない沖縄ならではなもの。「ここにしかない」遊びをご紹介します。
            </p>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    height: 143vw;
    margin-bottom: 26.6vw;
    img {
        display: block;
        width: 48.8vw;
        aspect-ratio: 183/255;
        object-fit: cover;
        object-position: 65% 50%;
        margin-right: 3.7vw;
        margin-left: auto;
        margin-bottom: 13.3vw;
    }
    .border-left {
        margin-left: 3.2vw;
        padding-left: 5.6vw;
        height: 62.1vw;
        border-left: 1px solid var(--text-main);
        h2 {
            line-height: 1.9;
            margin-bottom: 1em;
        }
        p {
            display: block;
            width: 56vw;
            height: 8em;
        }
    }
    @media screen and (min-width: 768px) {
        display: flex;
        height: 51.3vw;
        padding-left: 4.2vw;
        padding-right: 8.4vw;
        margin-bottom: 14.6vw;
        justify-content: space-between;
        flex-direction: row-reverse;
        img {
            width: 39.3vw;
            height: 51.3vw;
            aspect-ratio: 538/702;
            margin: 0;
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
