<template>
    <div :class="{dashboardComponent: component == 'ProfileComponent'}">
        <hr>
        <div class="componentNav">
            <ul>
                <li :class="{active: component == 'ProfileComponent'}" @click="component = 'ProfileComponent'">Profile</li>
                <li :class="{active: component == 'MyProjectsComponent'}" @click="component = 'MyProjectsComponent'">My Blogs</li>
            </ul>
            <ul>
                <router-link to="/">
                    <li>Home</li>
                </router-link>
                <li @click="logOut">Log-Out</li>

            </ul>
        </div>
        <hr>
        <component :is="component"/>
    </div>
</template>

<script>
import ProfileComponent from "./ProfileComponent";
import MyProjectsComponent from "./MyProjectsComponent";

export default {
    name: "DashboardComponent",
    components: {ProfileComponent, MyProjectsComponent},
    data() {
        return {
            component: 'ProfileComponent'
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.loggedIn;
        }
    },
    methods:{
        async logOut(){
            await this.$store.commit('LOGOUT',false);
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.dashboardComponent {
    background: #cabbe9
}

.componentNav {
    display: flex;
    justify-content: space-evenly;
}

.componentNav ul {
    display: flex;
    justify-content: center;
    margin-bottom: 0 !important;
    padding: 10px;
}

.componentNav ul li {
    padding: 10px;
    list-style: none;
    margin-left: 15px;
    color: var(--lightgrey);
    font-size: 23px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
}
.componentNav ul li:hover{
    background-color: var(--lightyellow);
}
.active{
    background-color: #faee1c;
}
</style>
