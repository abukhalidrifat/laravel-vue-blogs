<template>
    <div id="MagicCarousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
        <div class="carousel-inner">
            <div v-for="(img,idx) in quotesImages" class="carousel-item"  :class="{ active: idx == 0 }" :key="img.id">
                <img class="d-block w-100" v-lazy="img.pic" alt="slide">
            </div>
            <!--With controls-->
            <a class="carousel-control-prev" href="#MagicCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#MagicCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: "QuotesComponent",
    data() {
        return {
            quotesImages: [
                {
                    "id": "1",
                    "pic": "/img/1.jpg"
                },
                {
                    "id": "2",
                    "pic": "/img/2.jpg"
                },
                {
                    "id": "3",
                    "pic": "/img/10.jpg"
                },
                {
                    "id": "4",
                    "pic": "/img/15.jpg"
                },
                {
                    "id": "5",
                    "pic": "/img/4.jpg"
                },
            ],
        }
    },
}
</script>

<style scoped>

.carousel-inner {
    width: 90%;
    margin: 0 auto;
}

.carousel-item img {
    height: 430px;
    object-fit: cover;
}

</style>
