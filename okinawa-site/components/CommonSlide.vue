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
    }
}
.common-slide-wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 92.5vw;
    display: flex;
}
.common-slide-wrap::after {
    content: "";
    position: absolute;
    width: 92.5vw;
    height: 92.5vw;
    top: 0;
    left: 3.75vw;
    border: 1px solid var(--text-main);
}
.slideshow {
    width: 100%;
    overflow: hidden;
    position: relative; /* 追加 */
}

.slide {
    top: 10.6vw;
    left: -61vw;
    position: absolute;
    display: flex; /* 追加 */
    transition: transform 0.5s ease; /* 追加 */
    width: 100%;
    height: 71.2vw;
    img {
        display: block;
        height: 100%;
        width: 64.8vw;
        margin: 0 4.4vw;
        object-fit: cover;
        object-position: center;
    }
}
.moveleft {
    animation-name: moveslide;
    animation-duration: 1s;
}
@keyframes moveslide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-72vw);
    }
}
</style>
