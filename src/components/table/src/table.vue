<template>
  <div class="r-table"
       :style="{ width: width ? width + 'vw' : '' , height:height?height +'vmin':'' }"
  >
    <table
      class="r-table__inner"
      :style="{ width: width ? width + 'vw' : '' , height:height?height +'vmin':'' }"
    >
      <thead class="r-table__thead">
      <tr>
        <td v-for="val in headers">
          <div>{{val}}</div>
        </td>
      </tr>
      </thead>
      <tbody class="r-table__tbody">
      <tr v-for="object in data">
        <td v-for="cell in object">
          <div>{{cell}}</div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "RTable",
    props: ['data', 'headers', 'width','height'],
    data() {
      return {}
    },
    mounted() {
      console.log(this)
    },
    methods: {}
  }
</script>
