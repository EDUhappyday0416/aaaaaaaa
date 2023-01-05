<template>
  <div class="custom_input">
    <v-text-field
      :prepend-inner-icon="prependicon"
      :append-inner-icon="appendicon"
      @click:append-inner="sendMessage"
      :type="type"
      :variant="solo"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "InputCustom",
  components: {},
  data() {
    return {};
  },
  props: {
    appendicon: String,
    prependicon: String,
    type: {
      type: String,
      default: "text",
    },
    solo: {
      type: String,
      default: "solo",
    },
  },
  computed: {},
  created() {},
  watch: {},
  mounted() {},
  methods: {
    sendMessage() {
      this.$emit("goIconMessage");
    },
  },
};
</script>
