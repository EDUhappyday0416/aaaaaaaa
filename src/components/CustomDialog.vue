<!--彈跳視窗-->
<template>
  <div class="CustomDialog" :class="{ visible: visible }">
    <div class="CustomDialog__popup" :class="customClass" :style="customStyle">
      <div
        @click="$emit('onClose')"
        class="CustomDialog__colse"
        :class="{ showCloseIcon: showCloseIcon }"
      >
        <button>
          <v-icon>mdi-close</v-icon>
        </button>
      </div>
      <div class="CustomDialog__title">{{ title }}</div>
      <div class="CustomDialog__content">
        <slot></slot>
      </div>
      <div>
        <div>
          <button></button>
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomDialog",
  props: {
    title: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    showCloseIcon: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    position: {
      type: String,
      default: "center",
    },
    radius: {
      type: Array,
      default: () => ["top-left", "top-right", "bottom-left", "bottom-right"],
    },
  },
  data() {
    return {};
  },
  computed: {
    customStyle() {
      let style = {};
      if (this.width) {
        style.width = this.width;
        style.height = this.height;
      }
      return style;
    },
    customClass() {
      let classes = `${this.position} ${this.radius.join(" ")}`;
      return classes;
    },
  },
  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.CustomDialog {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //   background: var(--transparent-black);
  background-color: rgb(35 35 35 / 60%);

  &__colse {
    display: none;
    &.showCloseIcon {
      display: flex;
      justify-content: flex-end;
    }
  }
  &.visible {
    display: block;
  }

  &__popup {
    max-width: 100vw;
    padding: 1rem;
    background: #f7f7f7;
    position: absolute;

    &.left {
      left: 0;
      top: 50%;
    }
    &.right {
      right: 0;
      top: 50%;
    }
    &.top {
      top: 0;
      left: 50%;
      transform: translate(-50%);
    }
    &.bottom {
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
    &.center {
      left: 50%;
      top: 29%;
      transform: translate(-50%);
    }
    &.top-left {
      border-top-left-radius: 16px;
    }
    &.top-right {
      border-top-right-radius: 16px;
    }
    &.bottom-left {
      border-bottom-left-radius: 16px;
    }
    &.bottom-right {
      border-bottom-right-radius: 16px;
    }
  }
}
</style>
