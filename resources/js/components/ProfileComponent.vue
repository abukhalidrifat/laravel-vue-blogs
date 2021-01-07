<template>
    <div class="profile-component">
        <div class="left-section">
            <div class="profile-info">
                <img :src="'/img/avatar.jpg'" alt="avatar" class="avatar">
                <b><h4 class="name">John Doe</h4></b>
                <h5 class="description">Full stack developer</h5>
            </div>
            <div class="profile-social-site">
                <label for="website">
                    <i class="fas fa-globe"></i> Website
                    <a href="#">https://google.com</a>
                </label>
                <hr>
                <label for="github">
                    <i class="fab fa-github"></i> Github
                    <a href="#">https://github.com</a>
                </label>
                <hr>
                <label for="twitter">
                    <i class="fab fa-twitter"></i> Twitter
                    <a href="#">https://github.com</a>
                </label>
                <hr>
                <label for="facebook">
                    <i class="fab fa-facebook"></i> Facebook
                    <a href="#">https://github.com</a>
                </label>
                <hr>
                <label for="instagram">
                    <i class="fab fa-instagram"></i> Instagram
                    <a href="#">https://github.com</a>
                </label>
            </div>
        </div>
        <div class="right-section">
            <div class="profile-bio">
                <label for="full-name">
                    <h5> Full Name </h5>
                    <p>John Doe</p>
                </label>
                <hr>
                <label for="full-name">
                    <h5> Email </h5>
                    <p>johndoe@gmail.com</p>
                </label>
                <hr>
                <label for="full-name">
                    <h5> Country </h5>
                    <p>USA</p>
                </label>
                <hr>
                <label for="full-name">
                    <h5> Address </h5>
                    <p>California</p>
                </label>
            </div>
            <div class="recent-posts">
                <h5>Recent Posts</h5>
                <hr>
                <div class="recent-post-container">
                    <div class="posts">
                        <div class="image">
                            <img :src="'/img/1.jpg'" alt="image">
                        </div>
                        <div class="title">
                            <h5>How to be a good amn</h5>
                        </div>
                    </div>
                    <div class="posts">
                        <div class="image">
                            <img :src="'/img/1.jpg'" alt="image">
                        </div>
                        <div class="title">
                            <h5>How to be a good amn</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileComponent"
}
</script>

<style scoped>
.profile-component {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    /*background: linear-gradient(to right, rgb(255, 65, 108), rgb(255, 75, 43))*/
}

/*profile-info starts*/

.profile-info {
    border: 1px solid darkgrey;
    padding: 15px;
    margin: 0 5px 5px 0;
    background-color: #fff;
}

.avatar {
    height: 100px;
    border-radius: 50px;
    object-fit: cover;
    -o-object-fit: cover;
    display: block;
    margin: 0 auto;
}

.name {
    text-align: center;
    margin-top: 10px;
}

.description {
    text-align: center;
}

/*profile-info end*/
/*profile-social-site starts*/

.profile-social-site {
    border: 1px solid darkgrey;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 0 5px 5px 0;
    background-color: #fff;
}

.profile-social-site label a {
    margin-left: 100px;
}

/*profile-social-site ends*/
/*profile-bio starts*/

.profile-bio {
    min-width: 380px;
    border: 1px solid darkgrey;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 0 0 5px 0;
    background-color: #fff;
}

.profile-bio label h5 {
    display: inline;
    margin-left: 45px;
}

.profile-bio label p {
    display: inline;
    margin-left: 45px;
}

/*profile-bio ends*/
/*recent-posts starts*/

.recent-posts {
    border: 1px solid darkgrey;
    padding: 10px;
    margin: 0 0 5px 0;
    background-color: #fff;
}

.recent-post-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.recent-posts h5 {
    text-align: center;
}

.posts {
    width: 160px;
    padding: 4px;
    border: 1px solid darkgrey;
}

.image img {
    height: 126px;
    width: 150px;
    object-fit: cover;
    -o-object-fit: cover;
}

.title {
    font-size: 24px;
    text-align: center;
}

/*recent-posts ends*/

@media screen and (max-width: 713px) {
    .right-section{
        margin-top: -160px;
    }
}
</style>
