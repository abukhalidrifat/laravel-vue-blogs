require('./bootstrap');
window.Vue = require('vue');


//  Vue imports
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex"
import {routes} from "./routes";

//Slug
window.slug = require('slug');
slug.defaults.mode ='rfc3986';

//Vue lazy-load image  (vue lazy-load)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '/lazyImg/error.jpeg',
    loading: '/lazyImg/loading.gif',
    attempt: 3,
})

// highlight filter
Vue.filter('highlight', function(words, query){
    var iQuery = new RegExp(query, "ig");
    return words.toString().replace(iQuery, function(matchedTxt){
        return ('<span class=\'highlight\'>' + matchedTxt + '</span>');
    });
});


//  Vue use
Vue.use(Vuex);
Vue.use(VueRouter);

//  Vue router
const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

// Vuex Import Module
import state from "./store/state"
import getters from "./store/getters"
import mutations from "./store/mutations"
import actions from "./store/actions"

// Vuex
const store = new Vuex.Store({
    state, getters, mutations, actions
})

// Import Components
import MainApp from "./components/MainApp";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import CategoryParamsComponent from "./components/CategoryParamsComponent";
import DashboardComponent from "./components/DashboardComponent";
import ArticleComponent from "./components/ArticleComponent";

const app = new Vue({
    el: '#app',
    router,
    store,
    components:
        {
            MainApp,
            HomeComponent,
            LoginComponent,
            RegisterComponent,
            CategoryParamsComponent,
            DashboardComponent,
            ArticleComponent,
        }
});


