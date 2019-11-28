<template>
  <div id="app">
    <PostItem
      title="Testing App"
      :item-index="2"
      :total-length="10"
      @movePostUp="movePostUp"
      @movePostDown="movePostUDown"
    />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "App",
  components: { PostItem },
  methods: {
    movePostUp() {
      console.log("I was called up");
    },
    movePostDown() {
      console.log("I wass called down");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
