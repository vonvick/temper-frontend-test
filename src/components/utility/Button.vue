<template>
  <button
    :class="classNames"
    class="px-3 py-2"
    @click="$emit('handle-click-event')"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    classNames: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {}
};
</script>
