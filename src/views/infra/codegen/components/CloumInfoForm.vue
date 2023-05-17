<template>
  <div class="step2">
    <div class="step2-table">
      <BasicTable :dataSource="columnsInfo" @register="registerTable" @row-click="handleEdit" />
    </div>
    <Divider />
    <div class="step2-button">
      <a-button @click="customResetFunc">Previous</a-button>
      <a-button type="primary" @click="customSubmitFunc">submit</a-button>
    </div>
    <h3>illustrate</h3>
    <h4>Configuration field</h4>
    <p> The field type of the configuration table, addition, deletion, change, dictionary, etc. </p>
  </div>
</template>
<script lang="ts" setup>
import { BasicTable, EditRecordRow, useTable } from '@/components/Table'
import { columns } from './data'
import { Divider } from 'ant-design-vue'
import { CodegenColumnVO } from '@/api/infra/codegen/types'

const emit = defineEmits(['next', 'prev'])

defineProps({
  columnsInfo: {
    type: Array as PropType<CodegenColumnVO[]>,
    default: () => null
  }
})

const [registerTable, { getDataSource }] = useTable({
  columns,
  maxHeight: 700,
  pagination: false,
  useSearchForm: false,
  showTableSetting: false,
  showIndexColumn: false
})

async function customResetFunc() {
  emit('prev')
}

async function customSubmitFunc() {
  const tableValue = getDataSource()
  emit('next', tableValue)
}

function handleEdit(record: EditRecordRow) {
  record.onEdit?.(true)
}
</script>
<style lang="less" scoped>
.step2 {
  &-table {
    width: 100%;
    margin: 0 auto;
  }

  &-button {
    display: flex;
    justify-content: center;
  }

  h3 {
    margin: 0 0 12px;
    font-size: 16px;
    line-height: 32px;
    color: @text-color;
  }

  h4 {
    margin: 0 0 4px;
    font-size: 14px;
    line-height: 22px;
    color: @text-color;
  }

  p {
    color: @text-color;
  }
}
</style>
