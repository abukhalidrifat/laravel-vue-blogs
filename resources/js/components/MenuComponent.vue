<template>
    <div>
        <nav class="nav-menu">
            <ul class="menu">
                <li>
                    <span @click="closeDrawer" class="cross bg-danger">X</span>
                </li>
                <li>
                    <router-link class="menu-items" to="/">Home</router-link>
                </li>
                <li v-if="this.$route.name == 'Blog' ">
                    <router-link class="menu-items router-link-exact-active" :to="this.$router.currentRoute.path">{{ this.$route.name }}</router-link>
                </li>
                <li v-if="loggedIn == true">
                    <router-link class="menu-items" to="/dashboard/1">dashboard</router-link>
                </li>
                <li v-if="loggedIn == false">
                    <router-link class="menu-items" to="/login">Login</router-link>
                </li>
                <li v-if="loggedIn == false">
                    <router-link class="menu-items" to="/register">Register</router-link>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>

export default {
    name: "MenuComponent",
    computed: {
        drawer() {
            return this.$store.state.drawer
        },
        loggedIn() {
            return this.$store.state.loggedIn
        },
    },
    methods: {
        closeDrawer() {
            this.$store.commit('DRAWER', true)
        },
    },
}
</script>

<style scoped>

.nav-menu {
    height: 100vh;
    background: var(--zumthor);
}

.menu {
    /*margin: 0 auto;*/
    transform: translateY(100px);
    list-style: none;
    font-size: 25px;
    text-align: center;
    line-height: 45px;
}

.menu li {
    margin-top: 5px;
    margin-right: 0;
}

.menu li:first-child {
    margin-top: 0;
}

.menu-items {
    color: var(--lightgrey);
    padding: 5px;
    border-radius: 5px
}

.menu-items:hover {
    background-color: var(--lightyellow);
}

.router-link-exact-active {
    background-color: #faee1c;
}

.cross {
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    margin-left: 60%;
}


/*Responsive for medium screens*/

@media screen and (min-width: 768px) {

    .nav-menu {
        height: auto;
        background: none;
    }

    .menu {
        display: flex;
        justify-content: center;
        transform: translateY(0);
    }

    .menu li {
        margin-top: 0;
        margin-right: 5px;
    }

    .cross {
        display: none;
    }
}
</style>
