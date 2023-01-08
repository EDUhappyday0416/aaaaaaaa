<template>
  <div class="Verifycode">
    <DefaultBar />
    <div class="Verifycode__title">Verify your phone number</div>
    <div class="Verifycode__content">
      We have sent you an SMS with a code to number
    </div>
  </div>
</template>
<script>
import DefaultBar from "@/layouts/default/AppBar.vue";

export default {
  name: "Verifycode",
  components: {
    DefaultBar,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.Verifycode {
  padding: 0px 13px;
  &__title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  &__content {
    font-size: 1rem;
    color: #bec2d5;
  }
}
</style>
