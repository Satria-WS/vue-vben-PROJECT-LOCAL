import { changeAppStatus } from '@/api/pay/app'
import { getMerchantListByName } from '@/api/pay/merchant'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { PayChannelEnum } from '@/enums/systemEnum'
import { useMessage } from '@/hooks/web/useMessage'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { Tag, Switch } from 'ant-design-vue'
import { h } from 'vue'

export const columns: BasicColumn[] = [
  {
    title: 'Application number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'App',
    dataIndex: 'name',
    width: 100
  },
  {
    title: 'Open state',
    dataIndex: 'status',
    width: 100,
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
          changeAppStatus({ id: record.id, status: newStatus })
            .then(() => {
              record.status = newStatus
              createMessage.success(`The application status has been successfully modified`)
            })
            .catch(() => {
              createMessage.error('Modify the application status and fail')
            })
            .finally(() => {
              record.pendingStatus = false
            })
        }
      })
    }
  },
  {
    title: 'Business Name',
    dataIndex: 'payMerchant.name',
    width: 100,
    customRender: ({ record }) => {
      return record.payMerchant.name || ''
    }
  },
  {
    title: 'Alipay configuration',
    children: [
      {
        title: PayChannelEnum.ALIPAY_APP.name,
        dataIndex: PayChannelEnum.ALIPAY_APP.code,
        width: 160,
        customRender: ({ record }) => {
          const isUpdate = record.channelCodes.indexOf(PayChannelEnum.ALIPAY_APP.code) !== -1
          return h(Tag, { color: isUpdate ? '#108EE9' : '#F50000' }, () => (isUpdate ? 'Has been set' : 'Not set'))
        }
      },
      {
        title: PayChannelEnum.ALIPAY_PC.name,
        dataIndex: PayChannelEnum.ALIPAY_PC.code,
        width: 160,
        customRender: ({ record }) => {
          const isUpdate = record.channelCodes.indexOf(PayChannelEnum.ALIPAY_PC.code) !== -1
          return h(Tag, { color: isUpdate ? '#108ee9' : '#f50000' }, () => (isUpdate ? 'Has been set' : 'Not set'))
        }
      },
      {
        title: PayChannelEnum.ALIPAY_WAP.name,
        dataIndex: PayChannelEnum.ALIPAY_WAP.code,
        width: 160,
        customRender: ({ record }) => {
          const isUpdate = record.channelCodes.indexOf(PayChannelEnum.ALIPAY_WAP.code) !== -1
          return h(Tag, { color: isUpdate ? '#108ee9' : '#f50000' }, () => (isUpdate ? 'Has been set' : 'Not set'))
        }
      },
      {
        title: PayChannelEnum.ALIPAY_QR.name,
        dataIndex: PayChannelEnum.ALIPAY_QR.code,
        width: 160,
        customRender: ({ record }) => {
          const isUpdate = record.channelCodes.indexOf(PayChannelEnum.ALIPAY_QR.code) !== -1
          return h(Tag, { color: isUpdate ? '#108ee9' : '#f50000' }, () => (isUpdate ? 'Has been set' : 'Not set'))
        }
      },
      {
        title: PayChannelEnum.ALIPAY_BAR.name,
        dataIndex: PayChannelEnum.ALIPAY_BAR.code,
        width: 160,
        customRender: ({ record }) => {
          const isUpdate = record.channelCodes.indexOf(PayChannelEnum.ALIPAY_BAR.code) !== -1
          return h(Tag, { color: isUpdate ? '#108ee9' : '#f50000' }, () => (isUpdate ? 'Has been set' : 'Not set'))
        }
      }
    ]
  },
  {
    title: 'WeChat configuration',
    children: [
      {
        title: PayChannelEnum.WX_LITE.name,
        dataIndex: PayChannelEnum.WX_LITE.code,
        width: 160,
        customRender: ({ record }) => {
          const isUpdate = record.channelCodes.indexOf(PayChannelEnum.WX_LITE.code) !== -1
          return h(Tag, { color: isUpdate ? '#108ee9' : '#f50000' }, () => (isUpdate ? 'Has been set' : 'Not set'))
        }
      },
      {
        title: PayChannelEnum.WX_PUB.name,
        dataIndex: PayChannelEnum.WX_PUB.code,
        width: 160,
        customRender: ({ record }) => {
          const isUpdate = record.channelCodes.indexOf(PayChannelEnum.WX_PUB.code) !== -1
          return h(Tag, { color: isUpdate ? '#108ee9' : '#f50000' }, () => (isUpdate ? 'Set up ':' No settings'))
        }
      },
      {
        title: PayChannelEnum.WX_APP.name,
        dataIndex: PayChannelEnum.WX_APP.code,
        width: 160,
        customRender: ({ record }) => {
          const isUpdate = record.channelCodes.indexOf(PayChannelEnum.WX_APP.code) !== -1
          return h(Tag, { color: isUpdate ? '#108ee9' : '#f50000' }, () => (isUpdate ? 'Set up ':' Unable to set'))
        }
      }
    ]
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
    label: 'App',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Business Name',
    field: 'merchantName',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Open state',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.COMMON_STATUS)
    },
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
    label: 'App',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Affiliated merchant',
    field: 'shortName',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: () => getMerchantListByName(''),
      labelField: 'name',
      valueField: 'id'
    }
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
    label: 'The callback address of the payment result',
    field: 'payNotifyUrl',
    required: true,
    component: 'Input'
  },
  {
    label: 'Return result recovery address',
    field: 'refundNotifyUrl',
    required: true,
    component: 'Input'
  },
  {
    label: 'Remark',
    field: 'remark',
    component: 'InputTextArea'
  }
]
