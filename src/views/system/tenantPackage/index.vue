<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" v-auth="['system:tenant-package:create']" :preIcon="IconEnum.ADD" @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: IconEnum.EDIT,
                label: t('action.edit'),
                auth: 'system:tenant-package:update',
                onClick: handleEdit.bind(null, record)
              },
              {
                icon: IconEnum.DELETE,
                color: 'error',
                label: t('action.delete'),
                auth: 'system:tenant-package:delete',
                popConfirm: {
                  title: t('common.delMessage'),
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                }
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <TenantPackageModal @register="registerModal" @success="reload()" />
  </div>
</template>
<script lang="ts" setup name="SystemTenantPackage">
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { useModal } from '@/components/Modal'
import { IconEnum } from '@/enums/appEnum'
import TenantPackageModal from './TenantPackageModal.vue'
import { BasicTable, useTable, TableAction } from '@/components/Table'
import { deleteTenantPackage, getTenantPackagePage } from '@/api/system/tenantPackage'
import { columns, searchFormSchema } from './tenantPackage.data'

const { t } = useI18n()
const { createMessage } = useMessage()
const [registerModal, { openModal }] = useModal()
const [registerTable, { reload }] = useTable({
  title: 'Practitioner package list',
  api: getTenantPackagePage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
  showIndexColumn: false,
  actionColumn: {
    width: 140,
    title: t('common.action'),
    dataIndex: 'action',
    fixed: 'right'
  }
})

function handleCreate() {
  openModal(true, { isUpdate: false })
}

function handleEdit(record: Recordable) {
  openModal(true, { record, isUpdate: true })
}

async function handleDelete(record: Recordable) {
  await deleteTenantPackage(record.id)
  createMessage.success(t('common.delSuccessText'))
  reload()
}
</script>
