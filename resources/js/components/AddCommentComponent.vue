<template>
<div id="addCommentComponent">
    <h4>Comment</h4>
    <textarea v-model="comment" name="addComment" class="addComment" cols="30" rows="10"></textarea>
    <button @click="makeComment, changeComponent()" class="btn btn-primary">Send</button>
</div>
</template>

<script>
export default {
    name: "AddCommentComponent",
    data() {
        return {
            comment: ''
        }
    },
    methods:{
       makeComment(){
            this.comment = null;
        },
        changeComponent (){
            this.$emit('changeComponent','PreviewCommentComponent')
        }
    }
}
</script>

<style scoped>
.addComment{
    width: 100%;
    font-size: 18px;
}
.btn{
    font-size: 18px;
    margin-top: 10px;
}
</style>
