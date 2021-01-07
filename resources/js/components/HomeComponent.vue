<template>
  <div class="components">
      <loader-component/>
    <div class="head-quote-search">
      <div class="head-search">
        <header-component />

        <!--search component-->

        <div class="search-component" @focusout="hideSearchResultBox()">
          <!-- search button -->
          <div class="search-box">
            <input
              type="text"
              placeholder="start typing....."
              v-model="searchWords"
              autocomplete="off"
              @input="filteredSearch"
              @focus="modal = true"
            />
            <span></span>
          </div>
          <!-- search result -->
          <div
            class="filteredSearch"
            v-if="filteredData.length > 0 && modal && searchWords != ''"
          >
            <ul>
              <li
                v-for="search in filteredData"
                :key="search.id"
                @click="showBlog(search.id, search.title)"
                v-html="$options.filters.highlight(search.title,searchWords)"
              >
              </li>
            </ul>
          </div>
        </div>


      </div>
      <quotes-component />
    </div>
    <hr />
    <category-slider-component />
    <hr />
    <blog-component :blogProp="blogs" />
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import BlogComponent from "./BlogComponent";
import QuotesComponent from "./QuotesComponent";
import CategorySliderComponent from "./CategorySliderComponent";
import LoaderComponent from './LoaderComponent.vue';

export default {
  name: "HomeComponent",
  components: {
    CategorySliderComponent,
    QuotesComponent,
    BlogComponent,
    HeaderComponent,
    LoaderComponent,
  },
  data() {
    return {
      searchWords: "",
      filteredData: [],
      modal: true,
    };
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
  methods: {
    filteredSearch() {
      this.filteredData = this.blogs.filter((blog) => {
        return blog.title.toLowerCase().match(this.searchWords.toLowerCase());
      });
    },
    showBlog(eventId, eventTitle) {
      return this.$router.push("/blog/" + eventId + "-" + slug(eventTitle));
    },
    hideSearchResultBox(){
        setTimeout(() => {
            this.modal = false;
            this.searchWords = '';
            this.filteredData = [];
        }, 100);
    },
  },
};
</script>

<style scoped>
.head-quote-search {
  position: relative;
}
.head-search {
  position: relative;
}
/*search bar*/
.search-component {
  position: absolute;
  min-width: 350px;
  top: 70%;
  left: 62%;
}

.search-box input[type="text"] {
  position: absolute;
  border: none;
  background: none;
  z-index: 1;
  width: 25px;
  height: 25px;
  transition: all 0.25s ease-in 0.25s;
  color: transparent;
  font-size: 20px;
  /*line-height: 25px;*/
}

.search-box input[type="text"]:hover {
  cursor: pointer;
}

.search-box input[type="text"]:hover:focus {
  cursor: text;
}

.search-box input[type="text"]:hover + span {
  background: rgba(255, 255, 255, 0.2);
}

.search-box input[type="text"]:focus {
  width: 200px;
  padding: 0 10px;
  outline: none;
  color: black;
  background: none;
}

.search-box input[type="text"]:focus + span {
  width: 200px;
}

.search-box input[type="text"]:focus + span::before {
  width: 2px;
  opacity: 0;
  transition: all 0.25s ease-in;
}

.search-box input[type="text"] + span {
  z-index: -1;
  position: absolute;
  border: 2px solid black;
  top: 0;
  width: 25px;
  height: 25px;
  transition: all 0.25s ease-in 0.25s;
  border-radius: 25px;
  left: 0;
}

.search-box input[type="text"] + span::before {
  transition: all 0.25s ease-in 0.5s;
  transform-origin: left top;
  content: "";
  position: absolute;
  width: 10px;
  height: 4px;
  border-radius: 5px;
  background: black;
  transform: rotate(45deg) translate(26px, -2px);
  top: 0;
  left: 0;
}

/* search result box */
.filteredSearch {
  position: absolute;
  z-index: 1;
  top: 35px;
  left: -40%;
  background: var(--lightgrey);
  max-width: 350px;
  max-height: 350px;
  padding-left: 25px;
  color: aliceblue;
  overflow: auto;
  cursor: pointer;
}
.cross {
  cursor: pointer;
  padding: 0 7px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
}

/* Responsive */

@media screen and (min-width: 768px) {
  .search-component {
    left: 68%;
  }
}
</style>
