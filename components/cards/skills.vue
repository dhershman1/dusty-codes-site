<template>
  <a-col :span="8">
    <a-card class="full" :title="info.name">
      <a-row class="content">
        <a-col :span="7">
          <img class="brand" alt="product brand image" :src="`/imgs/${info.img}`" />
        </a-col>
        <a-col :span="8" :offset="9">
          <a-progress type="circle" :percent="convertLvl(info.level)" :format="() => info.level"></a-progress>
        </a-col>
      </a-row>
      <p class="card__summary">{{ info.summary }}</p>
    </a-card>
  </a-col>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({
        name: 'Uh Oh',
        summary: 'Something went wrong getting skills',
        versions: [],
        level: 0
      })
    }
  },
  methods: {
    getColor (lvl) {
      const colors = {
        beginner: 'red',
        novice: 'orange',
        intermediate: 'amber',
        professional: 'green',
        expert: 'primary'
      }

      return colors[lvl.toLowerCase()]
    },
    convertLvl (lvl) {
      const percents = {
        beginner: 20,
        novice: 40,
        intermediate: 60,
        professional: 80,
        expert: 100
      }

      return percents[lvl.toLowerCase()]
    }
  }
}
</script>

<style scoped>
.brand {
  height: 100%;
  width: 100%;
}

.full {
  height: 100%;
}

.card__summary {
  padding: 0.75rem;
  margin-bottom: 0;
}
</style>
