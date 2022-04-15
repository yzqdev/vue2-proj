<template>
  <div class="like">
    <Bigtitle msg="编辑markdown" />
    <Markdown></Markdown>
  </div>
</template>

<script>
import Bigtitle from "@/components/BigTitle";
import Markdown from "@/components/Markdown";

export default {
  name: "MyTitle",
  components: {
    Markdown,
    Bigtitle,
  },
};
</script>
