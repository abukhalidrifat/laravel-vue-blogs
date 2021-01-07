<template>
    <div>
        <logo-component/>
        <hr>
        <div class="category-name">
            <h3>Category: {{ category }}</h3>
        </div>
        <hr>
        <blog-component :blog-prop="filteredBlogs"/>
    </div>
</template>

<script>
import BlogComponent from "./BlogComponent";
import LogoComponent from "./LogoComponent";

export default {
    name: "CategoryParamsComponent",
    components: {LogoComponent, BlogComponent},
    data() {
        return {
            category: this.$route.params.cat,
        }
    },
    computed: {
        filteredBlogs() {
            return this.$store.state.blogs.filter((blog) => {
                return blog.category.match(this.category)
            });
        }
    },
}
</script>

<style scoped>
.category-name {
    text-align: center;
}

</style>
