import axios from './123/axios';
import b from '/a';

function square(x) {
  return x * x;
}

export default {
  name: "nodataCom",
  props: ["fatherdatas"],

  data() {
    return {
      value: []
    };
  },

  computed: {},

  created() {},

  mounted() {
    const that = this;
    this.$nextTick(function () {});
  },

  methods: {
    handleCancelBtn() {
      this.$emit("fatherDataChange", 0);
    },

    selectChange(e) {
      this.$emit("fatherDataChange", e);
    }

  }
};