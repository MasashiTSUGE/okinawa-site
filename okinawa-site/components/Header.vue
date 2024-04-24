<template>
    <header class="header" :class="{ open: activeMenu }">
        <h1 class="main-font uppercase header-title text-lightgray">
            trip japan
        </h1>
        <Navigation @childe-data="childeData" />
    </header>
</template>
<script>
import Navigation from "~/components/Navigation.vue";
export default {
    components: {
        Navigation: Navigation,
    },
    data() {
        return {
            activeMenu: false,
        };
    },
    methods: {
        childeData(childeMenu) {
            this.activeMenu = childeMenu;
        },
    },
};
</script>
<style lang="scss" scoped>
.header {
    background-color: transparent;
    @media screen and (min-width: 768px) {
        padding: 30px 38px 55px;
        max-width: 1366px;
        margin-left: auto;
        margin-right: auto;
        .header-title {
            font-size: 32px;
        }
    }
}
.open {
    background-color: #fff;
}
</style>
