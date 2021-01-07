<template>
    <div id="myProjectsComponent">
        <blog-component :blog-prop="myProjects"/>
    </div>
</template>

<script>
import BlogComponent from "./BlogComponent";
import MenuComponent from "./MenuComponent";
export default {
    name: "MyProjectsComponent",
    components: {MenuComponent, BlogComponent},
    data() {
        return {
            userId: this.$route.params.id,
        }
    },
    computed: {
        myProjects() {
            return this.$store.state.blogs.filter( blog => {
                return blog.user_id.match(this.userId);
            });
        }
    },
}
</script>

<style scoped>

</style>
