<template>
    <div>
        <div class="componentNav tab">
            <ul>
                <li :class="{ active: component == 'PreviewCommentComponent' }" @click="component = 'PreviewCommentComponent'">Comments</li>
                <li :class="{ active: component == 'AddCommentComponent' }" @click="component = 'AddCommentComponent'">Add-Comments</li>
            </ul>
        </div>
        <div class="tabcontent">
            <component :is="component" @changeComponent="updateComponent($event)"/>
        </div>

    </div>
</template>

<script>
import PreviewCommentComponent from "./PreviewCommentComponent";
import AddCommentComponent from "./AddCommentComponent.vue";

export default {
    name: "CommentComponent",
    components: {AddCommentComponent, PreviewCommentComponent},
    data() {
        return {
            component: 'PreviewCommentComponent'
        }
    },
    methods: {
        updateComponent(event) {
            this.component = event
        }
    }
}
</script>

<style scoped>
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

/*Nav Tab*/

.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}
.tab li:hover {
    background-color: var(--lightyellow);
}

.active {
    background-color:#faee1c;
}

.tabcontent {
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
}
</style>
