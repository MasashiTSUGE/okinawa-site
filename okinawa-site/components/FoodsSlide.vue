<template>
    <div class="foodsslide">
        <div class="slide-image">
            <img :src="src[display]" />
        </div>
        <div class="thumb-wrap">
            <img
                v-for="(img, num) in src"
                :key="num"
                :src="img"
                :data-thumb="num"
                @mouseover="ChangeImg($event)"
                @click="ChangeImg($event)"
            />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            src: [
                "images/index-food-1.png",
                "images/index-food-2.png",
                "images/index-food-3.png",
                "images/index-food-4.png",
            ],
            display: 0,
        };
    },
    methods: {
        ChangeImg(event) {
            this.display = event.target.dataset.thumb;
        },
    },
};
</script>

<style lang="scss" scoped>
.foodsslide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    width: 64vw;
    height: 64vw;
    left: 8vw;
    top: -8vw;
    .slide-image {
        width: 100%;
        aspect-ratio: 243/180;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .thumb-wrap {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 20%;
        img {
            display: block;
            width: 20%;
            aspect-ratio: 1/1;
            object-fit: cover;
        }
    }
}
</style>
