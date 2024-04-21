<template>
    <div class="slider">
        <div class="overflow-wrap">
            <div class="hotel-slide-wrap">
                <img :src="img[0]" @click="change" />
                <img :src="img[1]" @click="change" />
                <img :src="img[2]" @click="change" />
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
            position: 0,
        };
    },

    methods: {
        change: function () {
            if (this.position < 2) {
                this.position++;
                console.log(this.position);
            } else {
                this.position = 0;
                console.log(this.position);
            }
        },
        display() {
            if ((this.position = 0)) {
                return [2, 0, 1];
            } else if ((this.position = 1)) {
                return [0, 1, 2];
            } else if ((this.position = 2)) {
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
    background-color: greenyellow;
    z-index: 5;
    width: 100vw;
    height: 59.4vw;
    top: 18.4vw;
    overflow: hidden;
}
.overflow-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.hotel-slide-wrap {
    display: block;
    height: 100%;
    width: fit-content;
    position: absolute;
    display: flex;
    left: -45vw;
    img {
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: fill;
        display: block;
        margin-left: 1.7vw;
        margin-right: 1.7vw;
    }
}
</style>
