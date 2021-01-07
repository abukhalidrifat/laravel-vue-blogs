<template>
    <tiny-slider
        :speed="200"
        :mouse-drag="true"
        :autoplay="true"
        :loop="true"
        items="6"
        :autoplayHoverPause="false"
        :rewind="true"
        :responsive=" { 400: {items: 2},500: {items: 3},600:{items: 3},700:{items: 4},900: {items: 6} }">
        <div v-for="img in quotesImages" :key="img.id">
            <router-link :to="'/category/' + img.param ">
                <img class="image" v-lazy="img.pic" alt="slide">
            </router-link>
            <div class="title">
                <h4>{{ img.param }}</h4>
            </div>
        </div>
    </tiny-slider>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider';

export default {
    name: "CategorySliderComponent",
    components: {
        'tiny-slider': VueTinySlider
    },
    data() {
        return {
            quotesImages: [
                {
                    "id": "1",
                    "pic": "/img/1.jpg",
                    "param":"nature",
                },
                {
                    "id": "2",
                    "pic": "/img/7.jpg",
                    "param":"travelling",
                },
                {
                    "id": "3",
                    "pic": "/img/11.jpg",
                    "param":"food",
                },
                {
                    "id": "4",
                    "pic": "/img/1.jpg",
                    "param":"nature",
                },
                {
                    "id": "5",
                    "pic": "/img/7.jpg",
                    "param":"travelling",
                },
                {
                    "id": "6",
                    "pic": "/img/11.jpg",
                    "param":"food",
                },
                {
                    "id": "7",
                    "pic": "/img/1.jpg",
                    "param":"nature",
                },
                {
                    "id": "8",
                    "pic": "/img/7.jpg",
                    "param":"travelling",
                },
                {
                    "id": "9",
                    "pic": "/img/11.jpg",
                    "param":"food",
                },


            ],
        }
    },
}
</script>

<style scoped>
.image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    -o-object-fit: cover;
    filter: blur(2px);
    -webkit-filter: blur(2px);
}
.title{
    position: relative;
    bottom: 50%;
    color: white;
    margin-left: 14px;
    font-style: italic;
    font-weight: bold;
}

</style>
