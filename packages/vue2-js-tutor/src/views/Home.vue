<template>
  <div class="home">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld";
export default {
  name: "home",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.home {
  margin: auto;
}
</style>
