<template>
  <CardComponent>
    <template>
      <div class="flex-inline items-center">
        <h6>{{ title }}</h6>
        <span class="flex-col justify-between">
          <span class="up-action-container">
            <span
              v-if="itemIndex > 0"
              class="chevron"
              @click="movePostUp"
            ></span>
          </span>

          <span class="down-action-container">
            <span
              v-if="itemIndex < totalLength"
              class="chevron bottom"
              @click="movePostDown"
            ></span>
          </span>
        </span>
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
    title: String,
    itemIndex: Number,
    totalLength: Number,
    movePostUp: Function,
    movePostDown: Function
  }
};
</script>
<style lang="postcss" scoped>
.chevron::before {
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: "";
  display: inline-block;
  height: 0.45em;
  left: 0.15em;
  position: relative;
  top: 0.15em;
  transform: rotate(-45deg);
  vertical-align: top;
  width: 0.45em;
}

.chevron.bottom:before {
  top: 0;
  transform: rotate(135deg);
}
</style>
