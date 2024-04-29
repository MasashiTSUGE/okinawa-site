<template>
    <section class="common-slide">
        <h2 class="sub-copy">五感で楽しめる場所が<br />ここにある</h2>
        <div class="common-slide-wrap" @click="change">
            <div class="slide" :class="{ moveleft: ismove }">
                <img :src="images[display[0]]" @click="change" />
                <img :src="images[display[1]]" @click="change" />
                <img :src="images[display[2]]" @click="change" />
                <img :src="images[display[0]]" />
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            images: [
                "images/common-slide-1.png",
                "images/common-slide-2.png",
                "images/common-slide-3.png",
            ],
            position: 0,
            ismove: false,
        };
    },
    methods: {
        change() {
            if (this.position < 2) {
                this.ismove = true;
                setTimeout(() => {
                    this.position++;
                    this.ismove = false;
                }, 1000);
            } else {
                this.ismove = true;
                setTimeout(() => {
                    this.position = 0;
                    this.ismove = false;
                }, 1000);
            }
        },
    },
    mounted() {
        setInterval(() => {
            this.change();
        }, 5000);
    },
    computed: {
        display() {
            if (this.position == 0) {
                return [2, 0, 1];
            } else if (this.position == 1) {
                return [0, 1, 2];
            } else if (this.position == 2) {
                return [1, 2, 0];
            } else {
                return [2, 0, 1];
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.common-slide {
    padding-top: 26.6vw;
    width: 100%;
    .sub-copy {
        margin-left: 3.4vw;
        margin-bottom: 13.3vw;
        font-weight: normal;
        line-height: 1.75;
    }
    @media screen and (min-width: 768px) {
        padding-top: 14.6vw;
        .sub-copy {
            margin-left: 4.2vw;
            font-size: 2.6vw;
            margin-bottom: 7.3vw;
        }
    }
}
.common-slide-wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 92.5vw;
    display: flex;
    @media screen and (min-width: 768px) {
        height: 28.7vw;
    }
}
.common-slide-wrap::after {
    content: "";
    position: absolute;
    width: 92.5vw;
    height: 92.5vw;
    top: 0;
    left: 3.75vw;
    border: 1px solid var(--text-main);
    @media screen and (min-width: 768px) {
        height: 28.7vw;
        width: 66vw;
        left: 16.5vw;
    }
}
.slideshow {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.slide {
    top: 10.6vw;
    left: -61vw;
    position: absolute;
    display: flex;
    transition: transform 0.5s ease;
    width: fit-content;
    height: 71.2vw;
    img {
        display: block;
        height: 100%;
        width: 64.8vw;
        margin: 0 4.4vw;
        object-fit: cover;
        object-position: center;
    }
    @media screen and (min-width: 768px) {
        top: 3.6vw;
        height: 21.4vw;
        left: -12.6vw;
        img {
            width: 36.6vw;
            margin: 0 2.8vw;
            height: 21.4vw;
        }
    }
}

.moveleft {
    animation-name: moveslide;
    animation-duration: 1s;
    @media screen and (min-width: 768px) {
        animation-name: moveslide-pc;
    }
}
@keyframes moveslide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-72vw);
    }
}
@keyframes moveslide-pc {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-41.8vw);
    }
}
</style>
