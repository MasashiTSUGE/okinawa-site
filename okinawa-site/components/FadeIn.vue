<!-- フェードイン用のコンポーネント -->

<template>
    <div class="slide-in" :class="{ inView: inView }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inView: false,
        };
    },
    mounted() {
        // Intersection Observerを使用して要素の表示状態を監視
        const observer = new IntersectionObserver(
            (entries) => {
                // 要素が画面内に表示された場合、inViewをtrueに設定
                if (entries[0].isIntersecting) {
                    this.inView = true;
                    // 監視を停止
                    observer.unobserve(this.$el);
                }
            },
            {
                // 画面に半分以上表示されたら発火
                threshold: 0.5,
            }
        );

        // 要素を監視
        observer.observe(this.$el);
    },
};
</script>

<style scoped>
.slide-in {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.slide-in.inView {
    opacity: 1;
    transform: translateY(0);
}
</style>
