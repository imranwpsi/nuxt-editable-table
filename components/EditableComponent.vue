<template>
  <div>
      <div
        class="text-sm text-gray-900"
        v-if="!editable"
        v-on:dblclick="editable = true"
      >
        {{ data }}
      </div>

      <input
        type="text"
        v-if="editable"
        v-model="data"
        @blur="editable = false"
      >
  </div>
</template>

<script>
export default {
  name: 'editable-component',
  props: {
    data: {},
    index: '',
  },
  data() {
    return {
      editable: false,
    }
  }
}
</script>

<style scoped>
  table input {
    outline: 1px solid #ddd;
    padding: 5px 10px;
  }
</style>
