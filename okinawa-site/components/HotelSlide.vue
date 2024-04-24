<template>
    <div class="slider">
        <div class="overflow-wrap">
            <div class="hotel-slide-wrap" :class="{ moveleft: ismove }">
                <img
                    :src="img[display[0]]"
                    :alt="alt[display[0]]"
                    @click="change"
                />
                <img
                    :src="img[display[1]]"
                    :alt="alt[display[1]]"
                    @click="change"
                />
                <img
                    :src="img[display[2]]"
                    :alt="alt[display[2]]"
                    @click="change"
                />
                <img :src="img[display[0]]" :alt="alt[display[0]]" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img: [
                "images/index-hotel-1.png",
                "images/index-hotel-2.png",
                "images/index-hotel-3.png",
            ],
            alt: ["hotel1", "hotel2", "hotel3"],
            position: 0,
            ismove: false,
        };
    },
    mounted() {
        setInterval(() => {
            this.change();
        }, 5000);
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
.slider {
    position: absolute;
    z-index: 5;
    width: 100vw;
    height: 59.4vw;
    top: 18.4vw;
}
.overflow-wrap {
    width: 100%;
    height: 100%;
    position: relative;
}
.hotel-slide-wrap {
    display: block;
    height: 100%;
    width: fit-content;
    position: absolute;
    display: flex;
    left: -45vw;
    top: 0;
    transition: transform 1s;
    img {
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: fill;
        display: block;
        margin-left: 1.7vw;
        margin-right: 1.7vw;
    }
}
@media screen and (min-width: 768px) {
    .slider {
        top: 10.9vw;
        height: 41.3vw;
    }
    .hotel-slide-wrap {
        left: -53.7vw;
        img {
            aspect-ratio: 788/565;
            margin: 0 2.9vw;
        }
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
        transform: translateX(-63vw);
    }
}
</style>
