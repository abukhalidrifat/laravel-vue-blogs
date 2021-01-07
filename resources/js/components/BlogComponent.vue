<template>
    <div class="columns">
        <div class="blogs" v-for="blog in blogProp" :key="blog.id">
            <div @click="showBlog(blog.id,blog.title)">
                <img class="image" v-lazy="blog.img" :alt="blog.img">
                <div class="blog-footer">
                    <div class="blog-info">
                        <div class="author-info">
                            <img class="author-logo" v-lazy="blog.img" :alt="blog.img">
                            <span class="author">
                            <p>
                                {{ blog.author }}
                            </p>
                        </span>
                        </div>
                        <span class="time">
                        <p>
                            {{ blog.time }}
                        </p>
                    </span>
                        <span class="views">
                        <p>
                            {{ blog.views }}views
                        </p>
                    </span>
                    </div>
                    <p class="title">
                        {{ blog.title }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogComponent",
    props: ['blogProp',],
    methods: {

        showBlog(eventId,eventTitle) {
            return this.$router.push('/blog/' +
                eventId+'-'+ slug(eventTitle)
            );
        }
    }

}
</script>

<style scoped>

.columns {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.blogs {
    width: 350px;
    box-shadow: 0px 0px 6px 0px black;
    margin-bottom: 30px;
    cursor: pointer;
}

.blog-footer {
    width: 350px;
    height: 130px;
    border: 1px solid grey;
    overflow: hidden;
    box-shadow: 0 0 1px 0 grey;
}

.blog-footer span {
    padding: 10px;
}

.blog-footer span p {
    font-size: 15px;
}

.blog-info {
    display: flex;
    justify-content: space-around;
    padding: 10px 0 0 0;
    background-color: var(--deeplightpink);
}

.image {
    width: 350px;
    height: 270px;
    object-fit: cover;
    -o-object-fit: cover;
}

.author-logo {
    width: 35px;
    height: 35px;
    border-radius: 20px;
    object-fit: cover;
    -o-object-fit: cover;
    margin-top: 3px;

}

.author-info {
    display: flex;

}

.title {
    font-size: 24px;
    text-align: center;
    line-height: 35px;
    margin-top: -15px;
}
</style>
