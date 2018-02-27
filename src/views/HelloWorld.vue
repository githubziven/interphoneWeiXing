<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <r-button type="primary" size="small">按钮</r-button>
    <r-button type="primary">大按钮</r-button>
    <r-button type="plain" size="small">白底按钮</r-button>
    <r-lead>你好我是指导标题</r-lead>
    <r-cash-bulk-group v-model="bulkInfo">
      <r-cash-bulk :bulkInfo="bulkInfo1"></r-cash-bulk>
      <r-cash-bulk :bulkInfo="bulkInfo2"></r-cash-bulk>
      <r-cash-bulk :bulkInfo="bulkInfo3"></r-cash-bulk>
    </r-cash-bulk-group>
    <r-table
      :data="tableData"
      :headers="headTitle"
       width="60"
    >
    </r-table>
    <r-input>
      <i  slot="suffix" class="el-input__icon el-icon-date"></i>
    </r-input>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class App extends Vue {
    // 初始化数据
    msg = 123457
    bulkInfo ={duration:'1年', spend:'￥60'}
    bulkInfo1={duration:'1年', spend:'￥60'}
    bulkInfo2={duration:'2年', spend:'￥100'}
    bulkInfo3={duration:'3年', spend:'￥120'}
    tableData = [{data:1,msg:2},{data:1,msg:2},{data:1,msg:2}]
    headTitle = ['aaa','bbb']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
