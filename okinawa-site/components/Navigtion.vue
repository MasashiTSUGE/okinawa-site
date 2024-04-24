<template>
    <div>
        <div class="nav-btn" @click="clickMenu">
            <Icon :name="icon" class="close-icon" />
        </div>
        <transition>
            <div
                class="nav-menu"
                v-show="activeMenu"
                :class="{ 'nav-open': activeMenu }"
            >
                <ul>
                    <!-- <li class="nav-header">
                        <h2
                            class="heading uppercase header-title text-lightgray"
                        >
                            trip japan
                        </h2>
                        <div class="nav-close nav-btn" @click="clickMenu">
                            <Icon name="ci:close-lg" class="close-icon" />
                        </div>
                    </li> -->
                    <li class="nav-list">
                        <router-link to="/" class="section-title"
                            ><p class="section-title">トップ</p>
                            <div>
                                <Icon
                                    name="material-symbols-light:play-circle-outline"
                                /></div
                        ></router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/activities" class="section-title"
                            ><p class="section-title">アクティビティ</p>
                            <div>
                                <Icon
                                    name="material-symbols-light:play-circle-outline"
                                /></div
                        ></router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/foods" class="section-title"
                            ><p class="section-title">沖縄絶品料理</p>
                            <div>
                                <Icon
                                    name="material-symbols-light:play-circle-outline"
                                /></div
                        ></router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/hotels" class="section-title"
                            ><p class="section-title">宿泊施設</p>
                            <div>
                                <Icon
                                    name="material-symbols-light:play-circle-outline"
                                /></div
                        ></router-link>
                    </li>
                    <li class="nav-footer">
                        <div>
                            <a href="#"
                                ><Icon name="mage:instagram-circle"
                            /></a>
                        </div>
                        <div>
                            <a href="#"><Icon name="formkit:twitter" /></a>
                        </div>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
function scroll_control(event) {
    event.preventDefault();
}
export default {
    name: "navBtn",
    components: {},
    data() {
        return {
            activeMenu: false,
        };
    },
    computed: {
        icon: function () {
            return !this.activeMenu ? "iconamoon:apps-fill" : "ci:close-lg";
        },
    },
    methods: {
        clickMenu() {
            this.activeMenu = !this.activeMenu;
            if (this.activeMenu === true) {
                document.addEventListener("mousewheel", scroll_control, {
                    passive: false,
                });
                document.addEventListener("touchmove", scroll_control, {
                    passive: false,
                });
            } else {
                document.removeEventListener("mousewheel", scroll_control, {
                    passive: false,
                });
                document.removeEventListener("touchmove", scroll_control, {
                    passive: false,
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.nav-btn {
    color: var(--text-lightgray);
    cursor: pointer;
    width: 30px;
    height: 30px;
    @media screen and (min-width: 768px) {
        width: 50px;
        height: 50px;
    }
}
.close-icon {
    width: 100%;
    height: 100%;
}
.nav-menu {
    background-color: #fff;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 79px;
    z-index: 999;
    @media screen and (min-width: 768px) {
        top: 147px;
    }
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 13px;
        .section-title {
            font-size: 14px;
            @media screen and (min-width: 768px) {
                font-size: 20px;
            }
        }
        @media screen and (min-width: 768px) {
            padding: 30px 0;
        }
    }
    .nav-header {
        margin-bottom: 40px;
        @media screen and (min-width: 768px) {
            padding: 30px;
        }
        h2 {
            font-size: 20px;
            @media screen and (min-width: 768px) {
                font-size: 32px;
            }
        }
    }
    .nav-list {
        padding-left: 0;
        padding-right: 0;
        margin-left: 13px;
        margin-right: 13px;
        border-bottom: 1px solid var(--text-main);
        .icon {
            width: 20px;
            height: 20px;
        }
        @media screen and (min-width: 768px) {
            margin-left: auto;
            margin-right: auto;
            width: 74.6%;
            max-width: 1020px;
            .icon {
                width: 30px;
                height: 30px;
            }
        }
    }
    .nav-footer {
        justify-content: center;
        margin-top: 10px;
        div {
            margin: 0 10px;
        }
        .icon {
            color: var(--text-gray);
            width: 30px;
            height: 30px;
        }
        @media screen and (min-width: 768px) {
            div {
                margin: 0 12.5px;
            }
            .icon {
                width: 40px;
                height: 40px;
            }
        }
    }
    a {
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-decoration: none;
    }
}
.nav-open {
    animation: nav-open 0.2s ease-out;
    transform-origin: top;
}
@keyframes nav-open {
    0% {
        transform: scaleY(30%);
    }
    100% {
        tramsform: scaleY(100%);
    }
}
</style>
