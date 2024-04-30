<template>
    <footer>
        <ul class="footer-links">
            <li>
                <router-link to="/index" class="main-font-en uppercase"
                    >top</router-link
                >
            </li>
            <li>
                <router-link to="/activities" class="main-font-en uppercase"
                    >activities</router-link
                >
            </li>
            <li>
                <router-link to="/foods" class="main-font-en uppercase"
                    >foods</router-link
                >
            </li>
            <li>
                <router-link to="/hotels" class="main-font-en uppercase"
                    >hotels</router-link
                >
            </li>
        </ul>
        <h2 class="fotter-logo main-font-en uppercase">
            <router-link to="/index">trip japan</router-link>
        </h2>
        <div class="footer-icons">
            <a class="footer-icon"><Icon name="mage:instagram-circle" /></a>
            <a class="footer-icon"><Icon name="mdi:twitter-circle" /></a>
        </div>
        <p class="copyright uppercase">trip japanおよび当サイトは架空です</p>
        <div class="button-top" @click="goTop" v-show="scrollY > windowHeight">
            <Icon name="material-symbols-light:expand-circle-up-outline" />
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            scrollY: 0,
            windowHeight: window.innerHeight,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.getScroll);
    },
    methods: {
        goTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
        getScroll: function () {
            this.scrollY = window.scrollY;
        },
    },
};
</script>
<style lang="scss" scoped>
footer {
    background: url(images/footer-bg.png) center/cover;
    width: 100vw;
    height: 125vw;
    color: var(--text-lightgray);
    padding: 0 3vw;
    ul {
        padding-top: 13.3vw;
        margin-bottom: 34.1vw;
    }
    li {
        text-align: right;
        margin-bottom: 5.3vw;
    }
    h2.main-font-en {
        font-size: 6.4vw;
        font-weight: 500;
        margin-bottom: 3.3vw;
    }
    .footer-icons {
        display: flex;
        a {
            margin-right: 2.6vw;
            .icon {
                height: 8vw;
                width: 8vw;
            }
        }
    }
    .copyright {
        margin-top: 8.5vw;
        font-weight: normal;
        font-size: 10px;
    }
    .button-top {
        position: fixed;
        bottom: 2vw;
        right: 2vw;
        z-index: 998;
        .icon {
            width: 8vw;
            height: 8vw;
        }
    }
    .button-top:hover {
        color: var(--form-red);
    }
    @media screen and (min-width: 768px) {
        height: 45.2vw;
        padding: 0 2.8vw;
        ul {
            padding-top: 6vw;
            margin-bottom: 14vw;
            li {
                margin-bottom: 0.6vw;
                font-size: 1.3vw;
            }
        }
        h2.main-font-en {
            font-size: 2.3vw;
            margin-bottom: 1.4vw;
        }
        .footer-icons {
            a {
                margin-right: 1.4vw;
                .icon {
                    height: 2.9vw;
                    width: 2.9vw;
                }
            }
        }
        .copyright {
            margin-top: 2.1vw;
        }
        .button-top {
            bottom: 1vw;
            right: 1vw;
            .icon {
                width: 3.6vw;
                height: 3.6vw;
            }
        }
    }
}
</style>
