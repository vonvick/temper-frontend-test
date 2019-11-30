<template>
  <CardComponent>
    <div class="flex h-12 items-center justify-between">
      <div>
        <p>{{ description }}</p>
      </div>
      <div>
        <Button
          v-on:handle-click-event="$emit('perform-time-travel', actionIndex)"
          :class="{
            rounded: true,
            'text-black': true,
            'bg-green-400': true
          }"
        >
          Time Travel
        </Button>
      </div>
    </div>
  </CardComponent>
</template>
<script>
import CardComponent from "@/components/utility/CardComponent";
import Button from "@/components/utility/Button";

export default {
  name: "ActionItem",
  components: {
    CardComponent,
    Button
  },
  props: {
    description: String,
    actionIndex: Number
  },
  data() {
    return {};
  }
};
</script>
