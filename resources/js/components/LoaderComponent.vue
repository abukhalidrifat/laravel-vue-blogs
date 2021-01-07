<template>
  <transition leave-active-class="animate__animated animate__fadeOut">
    <div v-if="loading" class="loader">
      <img :src="'/lazyImg/preloader.gif'" alt="pre Loader" />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    disappear() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    this.disappear();
  },
};
</script>

<style scoped>
.loader {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  background-color: #1f6dc7;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
