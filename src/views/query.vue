<template>
  <div>
    <div class="query-img">
      <img src="../assets/img/dianxing.png" alt="中国电信">
    </div>
    <div class="query-body">
      <r-input></r-input>
      <span class="query-tips"></span>
    </div>
    <div class="query-btn">
      <r-button>查询</r-button>
    </div>
    <div class="query-footer"></div>
  </div>
</template>

<script>
  export default {
    name: "Query"
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/scss/helps/var.scss";
  @import "../assets/scss/helps/function.scss";

  $selecter: query-;
  .#{$selecter} {
    &img {
      position: relative;
      top: pxTov(40px, 1vmin);
      margin-bottom: pxTov(44px, 1vmin);
      img {
        width: pxTov(121px, 1vmin);
        height: pxTov(45px, 1vmin);
        margin: 0 auto;
      }
    }
    &body {
      position: relative;
    }
    &tips {

    }
    &btn {

    }
    &footer {

    }
  }
</style>
