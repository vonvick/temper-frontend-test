<template>
  <CardComponent>
    <template>
      <div class="flex items-center">
        <div class="w-4/5">
          <h6>{{ item.title }}</h6>
        </div>
        <div class="w-1/5 flex-col">
          <div
            v-if="itemIndex > 0"
            class="up-action-container"
            @click="
              $emit('move-post', {
                direction: -1,
                item,
                index: itemIndex
              })
            "
          >
            <span class="chevron top"></span>
          </div>

          <div
            v-if="itemIndex < totalLength - 1"
            class="down-action-container"
            @click="
              $emit('move-post', {
                direction: 1,
                item,
                index: itemIndex
              })
            "
          >
            <span class="chevron bottom"></span>
          </div>
        </div>
      </div>
    </template>
  </CardComponent>
</template>
<script>
import CardComponent from "@/components/CardComponent";

export default {
  name: "PostItem",
  components: { CardComponent },
  props: {
    item: Object,
    itemIndex: Number,
    totalLength: Number
  }
};
</script>
<style lang="postcss" scoped>
.up-action-container,
.down-action-container {
  position: relative;
}
.chevron::before {
  border-style: solid;
  border-width: 0.125rem 0.125rem 0 0;
  content: "";
  display: inline-block;
  height: 0.75rem;
  left: 0.15em;
  position: relative;
  top: 0.15em;
  transform: rotate(-45deg);
  vertical-align: top;
  width: 0.75rem;
  cursor: pointer;
}

.chevron.bottom:before {
  top: 0;
  transform: rotate(135deg);
}
</style>
