<template>
  <div id="app">
    <div class="app_content">
      <router-view class="app_body" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.app_content {
  width: 414px;
  height: 100%;
  max-width: 414px;
  display: flex;
  flex-direction: column;
}

.app_body {
  /* height: 100%; */
  overflow: auto;
  flex: auto;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 414px) {
  .app_content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
