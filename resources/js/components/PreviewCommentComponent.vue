<template>
    <div id="commentComponent">
        <div class="card card-white post">
            <div class="post-heading">
                <div class="float-left image">
                    <img v-lazy="'/img/avatar.jpg'" class="img-circle avatar" alt="user profile image">
                </div>
                <div class="float-left meta">
                    <div class="title h5">
                        <b>Ryan Haywood</b>
                        made a comment.
                    </div>
                    <h6 class="text-muted time">1 minute ago</h6>
                </div>
            </div>
            <div class="post-description">
                <p>Bootdey is a gallery of free snippets resources templates and utilities for bootstrap css hmtl js framework. Codes for developers and web designers</p>
            </div>
        </div>
        <div class="card card-white post">
            <div class="post-heading">
                <div class="float-left image">
                    <img v-lazy="'/img/avatar.jpg'" class="img-circle avatar" alt="user profile image">
                </div>
                <div class="float-left meta">
                    <div class="title h5">
                        <b>Ryan Haywood</b>
                        made a comment.
                    </div>
                    <h6 class="text-muted time">1 minute ago</h6>
                </div>
            </div>
            <div class="post-description">
                <p>Bootdey is a gallery of free snippets resources templates and utilities for bootstrap css hmtl js framework. Codes for developers and web designers</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "PreviewCommentComponent"
}
</script>

<style scoped>
.post{
    margin-bottom: 20px;
}
.card-white .time {
    font-size:15px;
}
.post .post-heading {
    height: 95px;
    padding: 20px 15px;
}
.post .post-heading .avatar {
    width: 60px;
    height: 60px;
    display: block;
    margin-right: 15px;
}
.post .post-heading .meta .title {
    margin-bottom: 0;
}
.post .post-heading .meta .title b{
    font-size: 20px;
}
.post .post-heading .meta .title a {
    color: black;
}
.post .post-heading .meta .title a:hover {
    color: #aaaaaa;
}
.post .post-heading .meta .time {
    margin-top: 8px;
    color: #999;
}
.post .post-image .image {
    width: 100%;
    height: auto;
}
.post .post-description {
    padding: 15px;
}
.post .post-description p {
    font-size: 20px;
}
.post .post-description .stats {
    margin-top: 20px;
}
.post .post-description .stats .stat-item {
    display: inline-block;
    margin-right: 15px;
}
.post .post-description .stats .stat-item .icon {
    margin-right: 8px;
}
.post .post-footer {
    border-top: 1px solid #ddd;
    padding: 15px;
}
.post .post-footer .input-group-addon a {
    color: #454545;
}
.post .post-footer .comments-list {
    padding: 0;
    margin-top: 20px;
    list-style-type: none;
}
.post .post-footer .comments-list .comment {
    display: block;
    width: 100%;
    margin: 20px 0;
}
.post .post-footer .comments-list .comment .avatar {
    width: 35px;
    height: 35px;
}
.post .post-footer .comments-list .comment .comment-heading {
    display: block;
    width: 100%;
}
.post .post-footer .comments-list .comment .comment-heading .user {
    font-size: 14px;
    font-weight: bold;
    display: inline;
    margin-top: 0;
    margin-right: 10px;
}
.post .post-footer .comments-list .comment .comment-heading .time {
    font-size: 16px;
    color: #aaa;
    margin-top: 0;
    display: inline;
}
.post .post-footer .comments-list .comment .comment-body {
    margin-left: 50px;
}
.post .post-footer .comments-list .comment > .comments-list {
    margin-left: 50px;
}
</style>
