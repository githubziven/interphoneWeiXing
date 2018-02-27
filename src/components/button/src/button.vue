<template>
  <div>
    <button
      @click="handleClick"
      class="r-button"
      :class="[
      type ? 'r-button--' + type : '',
      buttonSize ? 'r-button--' + buttonSize : ''
    ]"
    >
      <span v-if="$slots.default" @click="handleInnerClick"><slot></slot></span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "RButton",
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean
    },
    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      },
      handleInnerClick(evt) {
        if (this.disabled) {
          evt.stopPropagation();
        }
      }
    }
  }
</script>

