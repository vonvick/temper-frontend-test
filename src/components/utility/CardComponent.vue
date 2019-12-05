<template>
  <div class="bg-white shadow-lg w-full p-3" :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    classNames: Object,
    default: () => ({})
  }
};
</script>
