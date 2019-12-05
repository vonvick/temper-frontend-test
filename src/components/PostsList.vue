<template>
  <div class="md:w-1/2 w-full px-3">
    <h2 class="text-2xl text-white">Sortable Post List</h2>

    <span class="flex-col" v-if="errorMessage || postsList.length < 1">
      <CardComponent>
        <div class="flex h-12 items-center justify-between">
          <h2 class="text-2xl" id="noPostText">No Posts to load!</h2>
        </div>
      </CardComponent>

      <CardComponent>
        <div class="flex h-12 items-center justify-between">
          <h2 class="text-2xl" id="postError">{{ errorMessage }}</h2>
        </div>
      </CardComponent>
    </span>

    <transition-group name="flip-list" tag="span" v-else>
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
import CardComponent from "@/components/utility/CardComponent";

export default {
  name: "PostsLists",
  components: {
    PostItem,
    CardComponent
  },
  props: {
    postsList: Array,
    errorMessage: String
  }
};
</script>
<style lang="scss" scoped>
.flip-list-move {
  transition: transform 300ms;
}
</style>
