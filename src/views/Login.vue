<template>
  <div class="Login">
    <div class="home_title">Welcome</div>
    <div class="home_content">Please enter your account here</div>
    <div class="input_class">
      <InputCustom :prependicon="`mdi-account`" />
      <InputCustom
        :type="show2 ? 'text' : 'password'"
        :appendicon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        @goIconMessage="goMessage"
        :prependicon="`mdi-lock`"
      />
    </div>
  </div>
</template>

<script>
import InputCustom from "@/components/InputCustom";
export default {
  name: "Login",
  components: {
    InputCustom,
  },
  data() {
    return {
      show2: true,
    };
  },
  computed: {},
  created() {},
  watch: {},
  mounted() {},
  methods: {
    goMessage() {
      this.show2 = !this.show2;
    },
  },
};
</script>

<style>
.home_title {
  font-size: 1.8rem;
  font-weight: bold;
}
.home_content {
  font-size: 1rem;
  color: #bec2d5;
}

.input_class {
  margin: 10px;
}
</style>
