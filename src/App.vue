<template>
  <div id="app">
    <PostItem
      v-for="(post, postIndex) in postsList"
      :key="post.id"
      :item="post"
      :item-index="postIndex"
      :total-length="postsList.length"
      v-on:move-post="movePostItem"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostItem from "@/components/PostItem";
export default {
  name: "App",
  components: { PostItem },
  created() {
    this.fetchPostItems({ limit: 5 });
  },
  methods: {
    ...mapActions(["movePostItem", "fetchPostItems"])
  },
  computed: {
    ...mapGetters({
      postsList: ["getPostLists"]
    })
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
