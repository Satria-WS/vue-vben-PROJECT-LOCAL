import { changeMerchantStatus } from '@/api/pay/merchant'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { useMessage } from '@/hooks/web/useMessage'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { Switch } from 'ant-design-vue'
import { h } from 'vue'

export const columns: BasicColumn[] = [
  {
    title: 'Merchant number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'business number',
    dataIndex: 'no',
    width: 180
  },
  {
    title: 'Full name of merchants',
    dataIndex: 'name',
    width: 100
  },
  {
    title: 'Merchant abbreviation',
    dataIndex: 'shortName',
    width: 120
  },
  {
    title: 'Open state',
    dataIndex: 'status',
    width: 180,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false
      }
      return h(Switch, {
        checked: record.status === 0,
        checkedChildren: 'activated',
        unCheckedChildren: 'disabled',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true
          const newStatus = checked ? 0 : 1
          const { createMessage } = useMessage()
          changeMerchantStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus
              createMessage.success(`The state of merchants has been successfully modified`)
            })
            .catch(() => {
              createMessage.error('Modify the state of the merchant failed')
            })
            .finally(() => {
              record.pendingStatus = false
            })
        }
      })
    }
  },
  {
    title: 'Remark',
    dataIndex: 'remark',
    width: 180
  },
  {
    title: 'Creation time',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'business number',
    field: 'no',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Full name of merchants',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Merchant abbreviation',
    field: 'shortName',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'state',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.COMMON_STATUS)
    },
    colProps: { span: 8 }
  },
  {
    label: 'Remark',
    field: 'remark',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Creation time',
    field: 'createTime',
    component: 'RangePicker',
    colProps: { span: 8 }
  }
]

export const formSchema: FormSchema[] = [
  {
    label: 'serial number',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: 'Full name of merchants',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Merchant abbreviation',
    field: 'shortName',
    required: true,
    component: 'Input'
  },
  {
    label: 'Open state',
    field: 'status',
    component: 'Select',
    defaultValue: 0,
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.COMMON_STATUS)
    }
  },
  {
    label: 'Remark',
    field: 'remark',
    component: 'InputTextArea'
  }
]
