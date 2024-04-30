<template>
    <section class="get-in-touch">
        <h3 class="uppercase main-font-en">get in touch</h3>
        <div class="border-topbottom">
            <h4 class="section-title uppercase">
                trip japanは、<br />"ここにしかない"日本観光を<br />応援します。
            </h4>
            <p class="main-font">
                トリップジャパンは、ユニークな日本の魅力を発信していきます。お問い合わせは法人企業および自治体のみ受け付けております。掲載ご希望等については<a
                    href="#"
                    >お問い合わせフォーム</a
                >よりお申込み下さい。
            </p>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.get-in-touch {
    padding: 0 3.4vw;
    margin-top: 26.6vw;
    margin-bottom: 26.4vw;
    h3 {
        margin-bottom: 1em;
    }
    .border-topbottom {
        padding: 8vw 0;
        border-top: 1px solid var(--text-main);
        border-bottom: 1px solid var(--text-main);
        h4 {
            margin-bottom: 8vw;
        }
        p {
            a {
                padding-bottom: 0.2em;
                border-bottom: 1px solid currentColor;
            }
        }
    }
    @media screen and (min-width: 768px) {
        padding: 0 4.2vw;
        margin-top: 10.8vw;
        margin-bottom: 14.6vw;
        .border-topbottom {
            padding: 5.8vw 0;
            h4 {
                margin-bottom: 2.2vw;
                br {
                    display: none;
                }
            }
            p {
                width: 62vw;
            }
        }
    }
}
</style>
