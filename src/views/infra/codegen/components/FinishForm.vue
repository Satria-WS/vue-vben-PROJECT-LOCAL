<template>
  <div class="m-5 result-success">
    <Result status="success" title="Code generation success" sub-title="You can click the button below to preview, download, or return to the list page.">
      <template #extra>
        <a-button key="console" type="primary" @click="handleGoList"> Back to list </a-button>
        <a-button key="preview" @click="handlePreview"> Preview </a-button>
        <a-button key="download" @click="handleGenTable"> generate </a-button>
      </template>
    </Result>
    <PreviewModal @register="registerPreviewModal" />
  </div>
</template>
<script lang="ts" setup>
import { Result } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { useModal } from '@/components/Modal'
import { useGo } from '@/hooks/web/usePage'
import { useI18n } from '@/hooks/web/useI18n'
import { useTabs } from '@/hooks/web/useTabs'
import { useMessage } from '@/hooks/web/useMessage'
import PreviewModal from './PreviewModal.vue'
import { downloadCodegen, getCodegenTable } from '@/api/infra/codegen'

const go = useGo()
const { closeCurrent } = useTabs()
const { query } = useRoute()
const { t } = useI18n()
const { createMessage } = useMessage()
const [registerPreviewModal, { openModal: openPreviewModal }] = useModal()

function handlePreview() {
  const tableId = query.id as unknown as number
  const record = { id: tableId }
  openPreviewModal(true, { record })
}

async function handleGenTable() {
  const tableId = query.id as unknown as number
  const res = await getCodegenTable(tableId)
  await downloadCodegen(res.table)
  createMessage.success(t('common.successText'))
}

function handleGoList() {
  closeCurrent()
  go('/infra/codegen')
}
</script>
<style lang="less" scoped>
.result-success {
  padding: 48px 32px;
  background-color: @component-background;

  &__content {
    padding: 24px 40px;
    background-color: @background-color-light;
  }
}
</style>
