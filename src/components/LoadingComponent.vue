<template>
  <div class="relative bg-black w-full h-full opacity-50">
    <div class="absolute top-1/2 left-1/2 w-20 flex">
      <span><i class="fas fa-sync fa-spin text-white fa-3x mr-3"></i></span>
      <span class="flex items-center">
        <h5 class="text-white text-2xl">&nbsp; Loading...</h5>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingComponent"
};
</script>
