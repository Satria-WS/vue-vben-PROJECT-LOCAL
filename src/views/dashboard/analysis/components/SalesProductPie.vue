<template>
  <Card title="Transaction ratio" :loading="loading">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts" setup>
import { Ref, ref, watch } from 'vue'
import { Card } from 'ant-design-vue'
import { useECharts } from '@/hooks/web/useECharts'
import { propTypes } from '@/utils/propTypes'

const props = defineProps({
  loading: Boolean,
  width: propTypes.string.def('100%'),
  height: propTypes.string.def('300px')
})

const chartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)

watch(
  () => props.loading,
  () => {
    if (props.loading) {
      return
    }
    setOptions({
      tooltip: {
        trigger: 'item'
      },

      series: [
        {
          name: 'Access source',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          data: [
            { value: 500, name: 'electronic product' },
            { value: 310, name: 'clothing' },
            { value: 274, name: 'cosmetic' },
            { value: 400, name: 'Home' }
          ].sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'exponentialInOut',
          animationDelay: function () {
            return Math.random() * 400
          }
        }
      ]
    })
  },
  { immediate: true }
)
</script>
