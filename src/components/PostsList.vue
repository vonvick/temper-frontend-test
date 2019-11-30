<template>
  <div class="md:w-1/2 w-full px-3">
    <h2 class="text-2xl text-white">Sortable Post List</h2>

    <transition-group name="flip-list" tag="span">
      <PostItem
        v-for="(post, postIndex) in postsList"
        :item="post"
        :item-index="postIndex"
        :total-length="postsList.length"
        :key="post.id"
        v-on="$listeners"
      />
    </transition-group>
  </div>
</template>
<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostsLists",
  components: { PostItem },
  props: {
    postsList: Array
  }
};
</script>
<style lang="postcss">
.flip-list-move {
  transition: transform 300ms;
}
</style>
