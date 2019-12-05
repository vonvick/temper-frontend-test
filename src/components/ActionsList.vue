<template>
  <div class="md:w-1/2 w-full px-3">
    <div class="bg-white shadow-md p-3 actions-container">
      <div class="bg-white p-2">
        <h3 class="text-xl">List of Actions committed</h3>
      </div>
      <div class="p-3 bg-gray-300">
        <CardComponent v-if="actionsList.length < 1">
          <div class="flex h-12 items-center justify-between">
            <h2>No actions yet!</h2>
          </div>
        </CardComponent>
        <ActionItem
          v-for="(action, actionIndex) in actionsList"
          :key="actionIndex"
          :description="action.description"
          :action-index="actionIndex"
          v-on="$listeners"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ActionItem from "@/components/ActionItem";
import CardComponent from "@/components/utility/CardComponent";

export default {
  name: "ActionsList",
  components: {
    ActionItem,
    CardComponent
  },
  props: {
    actionsList: Array
  }
};
</script>
<style lang="scss" scoped>
.actions-container {
  max-height: 40rem;
  overflow-y: auto;
}
</style>
