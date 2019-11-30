<template>
  <div id="app" class="bg-gray-100">
    <LoadingComponent v-if="getLoadingState" />

    <div class="m-auto w-10/12">
      <div class="flex flex-wrap -mx-3 pt-20 pb-10">
        <PostsList :posts-list="getPostLists" v-on:move-post="movePostItem" />

        <ActionsList
          :actions-list="getActionsList"
          v-on:perform-time-travel="performTimeTravel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostsList from "@/components/PostsList";
import ActionsList from "@/components/ActionsList";
import LoadingComponent from "@/components/LoadingComponent";

export default {
  name: "App",
  components: {
    PostsList,
    ActionsList,
    LoadingComponent
  },
  created() {
    this.fetchPostItems({ limit: 5 });
  },
  methods: {
    ...mapActions(["movePostItem", "fetchPostItems", "performTimeTravel"])
  },
  computed: {
    ...mapGetters(["getPostLists", "getActionsList", "getLoadingState"])
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background: linear-gradient(
    170deg,
    rgba(68, 51, 122, 1) 0%,
    rgba(68, 51, 122, 1) 39%,
    rgba(247, 250, 252, 1) 39%,
    rgba(247, 250, 252, 1) 55%,
    rgba(247, 250, 252, 1) 100%
  );
}
</style>
