<template>
  <table>
    <tr>
      <th v-if="!short" class="px-1 subheading text-md-center">Name</th>
      <th class="px-1 subheading text-md-center">Type</th>
      <th class="px-1 subheading text-md-center">Description</th>
    </tr>
    <tr v-for="(arg, i) in items" :key="i">
      <td v-if="!short" class="px-2 py-2 text-md-center">{{ arg.paramName }}</td>
      <td class="px-2 py-2 text-md-center"><code>{{ arg.paramType }}</code></td>
      <td class="px-2 py-2 text-md-center">{{ arg.paramDesc }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    short: {
      type: Boolean,
      default: false
    },
    params: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    headers() {
      if (this.short) {
        return ['Type', 'Description'];
      }

      return ['Name', 'Type', 'Description'];
    },
    items() {
      return this.params.map(({ type, description, name }) => ({
        paramName: name,
        paramType: type.names[0] === '*' ? 'Any' : type.names[0].toLowerCase(),
        paramDesc: description
      }));
    }
  }
};
</script>

<style scoped>
td {
  border-left: 1px rgb(148, 148, 148)  solid;
  border-bottom: 1px rgb(148, 148, 148)  solid;
}
td:last-child {
  border-right: 1px rgb(148, 148, 148)  solid;
}
th {
  border-bottom: 1px rgb(148, 148, 148)  solid;
}
</style>

