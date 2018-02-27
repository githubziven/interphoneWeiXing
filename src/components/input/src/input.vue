<template>
  <div
    class="r-input"
    :class="{'r-input--prefix':$slots.prefix?true:false, 'r-input--suffix':$slots.suffix?true:false}"
  >
    <div class="r-input__inner">
      <input
        type="text"
      >
      <span v-if="$slots.prefix"><slot name="prefix"></slot></span>
      <span v-if="$slots.suffix"><slot name="suffix"></slot></span>
    </div>
    <span class="r-input__tips">ss</span>
  </div>
</template>

<script>
  export default {
    name: "RInput",
    mounted() {
      console.log(this.$slots)
    }
  }
</script>

