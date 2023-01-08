<template>
  <div class="Login">
    <CarouselItem />
  </div>
  <CustomDialog
    :visible="isShowCustomDialog"
    width="100%"
    height="100%"
    position="center"
    :showCloseIcon="false"
    customHeight="100px"
    :radius="['top-left', 'top-right']"
  >
    <div class="home_title">Welcome back</div>
    <div class="home_content">Login to your account</div>
    <div class="input_class">
      <InputCustom :prependicon="`mdi-account`" :Placeholder="`Email`" />
      <InputCustom
        :Placeholder="`Password`"
        :type="show2 ? 'text' : 'password'"
        :appendicon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        @goIconMessage="goMessage"
        :prependicon="`mdi-lock`"
      />
      <v-btn
        block
        variant="flat"
        rounded="pill"
        color="#f93963"
        class="py-6 my-4"
      >
        <span class="text-white-darken-2" @click="goPath">Login</span>
      </v-btn>
    </div>
    <div class="home_forgotPassword">Forgot your Password ?</div>
    <div class="home_content">
      Don't have an account? <span class="home_content_sign">Sign up</span>
    </div>
  </CustomDialog>
</template>

<script>
import InputCustom from "@/components/InputCustom";
import CarouselItem from "@/components/cardCarouselItem/carouselItem";
import CustomDialog from "@/components/CustomDialog";

export default {
  name: "Login",
  components: {
    InputCustom,
    CarouselItem,
    CustomDialog,
  },
  data() {
    return {
      show2: true,
      isShowCustomDialog: true,
    };
  },
  computed: {},
  created() {
    // this.isShowCustomDialog = true;
  },
  watch: {},
  mounted() {},
  methods: {
    goMessage() {
      this.show2 = !this.show2;
    },

    // openPage() {
    //   this.isShowCustomDialog = true;
    // },
  },
};
</script>

<style lang="scss" scoped>
.Login {
  width: 100%;
  height: auto;
}
.home_title {
  font-size: 1.8rem;
  font-weight: bold;
}
.home_content {
  font-size: 1rem;
  color: #bec2d5;

  &_sign {
    color: rgb(249 57 99);
  }
}

.input_class {
  margin: 10px;
}
</style>
