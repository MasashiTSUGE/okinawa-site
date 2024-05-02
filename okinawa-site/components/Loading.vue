<template>
    <transition>
        <div class="loading-mask" v-if="onLoad">
            <h2 class="main-font-en loading-title uppercase">
                <span class="text1">t</span><span class="text2">r</span
                ><span class="text3">i</span><span class="text4">p</span>
                <span class="text5">j</span><span class="text6">a</span
                ><span class="text7">p</span><span class="text8">a</span
                ><span class="text9">n</span>
            </h2>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            onLoad: true,
        };
    },
    mounted() {
        this.loadingAnim();
    },
    methods: {
        loadingAnim: function () {
            setTimeout(() => {
                this.onLoad = false;
            }, 1500);
        },
    },
};
</script>
<style lang="scss" scoped>
@keyframes text {
    0% {
        opacity: 0;
        transform: translateY(-100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
.loading-mask {
    width: 100vw;
    height: 100vh;
    background: #fff;
    overflow: hidden;
    position: fixed;
    z-index: 99998;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 10vw;
        color: var(--text-main);
    }
    span {
        display: inline-block;
        transition: all;
    }
    .text1 {
        animation: 0.1s ease text;
    }
    .text2 {
        animation: 0.2s ease text;
    }
    .text3 {
        animation: 0.3s ease text;
    }
    .text4 {
        animation: 0.4s ease text;
    }
    .text5 {
        animation: 0.5s ease text;
    }
    .text6 {
        animation: 0.6s ease text;
    }
    .text7 {
        animation: 0.7s ease text;
    }
    .text8 {
        animation: 0.8s ease text;
    }
    .text9 {
        animation: 0.9s ease text;
    }
}
.loading-mask::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #7f7fd5; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #91eae4,
        #86a8e7,
        #7f7fd5
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #91eae4,
        #86a8e7,
        #7f7fd5
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    z-index: 99999;
    opacity: 0.5;
}

.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-leave-to {
    opacity: 0;
}
</style>
