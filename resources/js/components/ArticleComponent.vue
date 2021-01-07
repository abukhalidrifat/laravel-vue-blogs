<template>
  <div id="articleComponent">
    <header-component />
    <hr />
    <div class="container">
      <div class="title h1">
        {{ article.title }}
      </div>
      <div class="author h5">By {{ article.author }}</div>
      <div class="timeAndShare">
        <div class="time h6">
          {{ article.time }}
        </div>
        <div class="social">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <img class="blogImage" v-lazy="article.img" alt="image" />
      <div class="description">
        {{ article.description }}
      </div>
      <hr />
      <div class="commentSection">
        <comment-component />
      </div>
      <hr />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import CommentComponent from "./CommentComponent";

export default {
    name: "ArticleComponent",
    components: {CommentComponent, HeaderComponent},
   data() {
       return {
           article:
                       {
            "id": '1',
            "category":"nature",
            "author": 'Rifat',
            "time": '2 Hours ago',
            "views": '1000',
            "img": '/img/1.jpg',
            "title": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
            "user_id": '1',
            "description": '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa a? Sed maiores animi veniam quo aliquid modi, numquam consequuntur in fugit eligendi? Quidem error quibusdam, non dicta quis voluptatum dolor nesciunt doloremque distinctio, corrupti nam amet tenetur quasi incidunt dignissimos totam? Nisi, praesentium? Ipsam eaque voluptas consequatur quod nostrum mollitia sit corporis quis aut error alias nemo nisi consequuntur facilis voluptatum, fugiat distinctio eum natus accusantium esse cupiditate repudiandae, voluptates totam fugit! Id quod veritatis qui nisi earum aliquid perspiciatis iure, maiores labore adipisci ducimus harum aut rem. Harum, quos optio voluptatibus dolorum quod facilis consequuntur voluptatum fugiat. Labore maiores ipsam sequi culpa expedita, quos minima quae eius doloremque! Voluptatibus, quod. Ratione, dolore? Quasi blanditiis quas dignissimos illo, quae porro beatae sequi repellat, sunt voluptatum laudantium temporibus tempore sit laboriosam numquam sint nisi quia, cupiditate quibusdam optio aliquam nobis? Nesciunt, quaerat soluta, repellat dolorum vel voluptatem, ipsum vitae animi placeat accusamus iusto expedita provident exercitationem. Dicta non eaque architecto quod vel, ipsum ullam asperiores iure similique a modi provident. Ullam vel facilis veniam velit perferendis ad enim ex soluta minima. Nesciunt, laborum inventore accusamus adipisci necessitatibus rem officiis at a odio aliquam eum tenetur beatae, natus magni distinctio asperiores.'
        },

       }
   },
}
</script>

<style scoped>
.title {
  width: 88%;
  font-weight: bolder;
  margin: 0 auto 15px;
}

.author {
  font-weight: bold;
  margin-left: 5%;
}

.timeAndShare {
  display: flex;
  justify-content: space-between;
}

.time {
  font-weight: bold;
  margin-left: 5%;
}

.social {
  margin-right: 5%;
  font-size: 20px;
}

.social a {
  color: inherit;
}

.blogImage {
  width: 100%;
  height: 400px;
  object-fit: cover;
  -o-object-fit: cover;
  margin-top: 30px;
}

.description {
  margin-top: 30px;
  font-size: 25px;
  line-height: 30px;
}
</style>
