<template>
  <div class="home">
    <DefaultBar />
    <div class="home_title">Phone Verification</div>
    <div class="home_content">Enter your OPT code here</div>
    <div class="input_class">
      <div class="input_item" v-for="(item, i) in fieldArr" :key="i">
        <v-text-field
          maxlength="1"
          variant="solo"
          ref="inputs"
          @keyup="changeValue($event, i)"
        ></v-text-field>
      </div>
    </div>
    <div class="my-5 mx-5">
      <span>
        code expires in: {{ countdownHour }}:{{ countdownMinute }}:{{
          countdownSecond
        }}</span
      >
      <v-btn
        block
        variant="flat"
        rounded="pill"
        color="#f93963"
        class="py-6 my-4"
        @click="goPath"
      >
        <span class="text-white-darken-2">Verify</span>
      </v-btn>
      <v-btn block variant="outlined" rounded="pill" class="my-2 py-6">
        Send Again
      </v-btn>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import { mapState } from 'vuex'
import DefaultBar from "@/layouts/default/AppBar.vue";
export default {
  name: "Home",
  components: {
    DefaultBar,
  },
  data() {
    return {
      fieldArr: ["", "", "", ""],
      now: NaN,
      time: 300000,
      focused: false,
    };
  },
  computed: {
    // ...mapState("products", ["all"]),
    finishTime() {
      return Date.now() + this.time;
    },

    countdown() {
      return Math.max(0, this.finishTime - this.now);
    },
    countdownHour() {
      return String.prototype.padStart.call(
        (this.countdown / 3.6e6) | 0,
        2,
        "0"
      );
    },
    countdownMinute() {
      return String.prototype.padStart.call(
        ((this.countdown % 3.6e6) / 6e4) | 0,
        2,
        "0"
      );
    },
    // 秒
    countdownSecond() {
      return String.prototype.padStart.call(
        ((this.countdown % 6e4) / 1e3) | 0,
        2,
        "0"
      );
    },
  },
  created() {
    const update = () => {
      this.now = Date.now();
      requestAnimationFrame(update);
    };
    update();
  },
  watch: {
    countdown(countdown) {
      if (0 === countdown) {
        alert("時間到");
      }
    },
  },
  mounted() {},
  methods: {
    goPath() {
      this.$router.push("/login");
    },
    changeValue(e, i) {
      if (e.keyCode >= 48 && e.keyCode <= 57) {
        if (i === this.fieldArr.length - 1) return;
        this.$refs.inputs[i + 1].focus();
      } else {
        e.preventdefault();
        return false;
      }
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
</style>

<style scoped>
.home__field {
  display: flex;
  align-items: stretch;
}
.input_class {
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input_item {
  margin: 10px;
}

.input_item {
}
.input_class input {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
