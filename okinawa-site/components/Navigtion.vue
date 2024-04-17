<template>
    <div>
        <div class="nav-btn" @click="clickMenu">btn</div>
        <transition>
            <div class="nav-menu" v-show="activeMenu">
                <ul>
                    <li class="nav-header">
                        <h2
                            class="heading uppercase header-title text-lightgray"
                        >
                            trip japan
                        </h2>
                        <div class="nav-close" @click="clickMenu">close</div>
                    </li>
                    <li class="nav-list">
                        <router-link to="/" class="section-title"
                            ><p class="section-title">トップ</p>
                            <div>icon</div></router-link
                        >
                    </li>
                    <li class="nav-list">
                        <router-link to="/activities" class="section-title"
                            ><p class="section-title">アクティビティ</p>
                            <div>icon</div></router-link
                        >
                    </li>
                    <li class="nav-list">
                        <router-link to="/foods" class="section-title"
                            ><p class="section-title">沖縄絶品料理</p>
                            <div>icon</div></router-link
                        >
                    </li>
                    <li class="nav-list">
                        <router-link to="/hotels" class="section-title"
                            ><p class="section-title">宿泊施設</p>
                            <div>icon</div></router-link
                        >
                    </li>
                    <li class="nav-footer">
                        <div>icon</div>
                        <div>icon</div>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: "navBtn",
    components: {},
    data() {
        return {
            activeMenu: false,
        };
    },
    methods: {
        clickMenu() {
            this.activeMenu = !this.activeMenu;
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
}
.nav-menu {
    background-color: #fff;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;

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
        @media screen and (min-width: 768px) {
            margin-left: auto;
            margin-right: auto;
            width: 74.6%;
            max-width: 1020px;
        }
    }
    .nav-footer {
        justify-content: center;
        margin-top: 10px;
    }
    a {
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-decoration: none;
    }
}
</style>
