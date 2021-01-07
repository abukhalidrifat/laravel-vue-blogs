<template>
    <transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
      mode="out-in"
    >
      <router-view />
    </transition>
</template>

<script>
export default {
  name: "MainApp",
};
</script>

<style>
:root {
  --zumthor: #cdd5d5;
  --zucchini-cream: #97a98b;
  --lightyellow: #f4fa9c;
  --lightorange: #f469a9;
  --lightpurple: #ba53de;
  --lightskyblue: #88bef5;
  --lightgrey: #303a52;
  --deeplightpink: #fcefee;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
