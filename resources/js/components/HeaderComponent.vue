<template>
    <div>
        <div class="header" v-if="this.drawer">
            <logo-component/>
            <hr class="d-none d-md-block d-lg-block d-xl-block horizontal">
            <div class="btn-search">
                <button @click="openDrawer" class="btn btn-primary drawer"><i class="fas fa-bars"></i></button>
            </div>
        </div>
        <div class="d-none d-md-block d-xl-block menu-component">
            <menu-component/>
        </div>


        <!--   For small screen     -->
        <transition
            enter-active-class="animate__animated animate__backInLeft"
            leave-active-class="animate__animated animate__backOutRight">
            <div v-if="!this.drawer">
                <menu-component/>
            </div>
        </transition>
    </div>
</template>

<script>
import MenuComponent from "./MenuComponent";
import LogoComponent from "./LogoComponent";

export default {
    name: "HeaderComponent",
    computed: {
        drawer() {
            return this.$store.state.drawer;
        },
    },
    methods: {
        openDrawer() {
            this.$store.commit('DRAWER', false)
        },
    },
    components: {LogoComponent, MenuComponent}
}
</script>

<style scoped>
.btn-search {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.drawer {
    margin-right: 10px;
}

.horizontal {
    background: black;
    width: 70%;
    margin: 10px auto;
}

.menu-component {
    position: relative;
}


@media screen and (min-width: 768px) {
    .btn-search {
        display: none;
    }
}
</style>
