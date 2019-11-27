<template>
  <div id="app">
    <CardComponent />
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent";
export default {
  name: "App",
  components: { CardComponent }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
