import { getMerchantListByName } from '@/api/pay/merchant'
import { DescItem } from '@/components/Description'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'serial number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'Payment channel',
    children: [
      {
        title: 'Business Name',
        dataIndex: 'merchantName',
        width: 120
      },
      {
        title: 'Application Name',
        dataIndex: 'appName',
        width: 120
      },
      {
        title: 'Channel name',
        dataIndex: 'channelCodeName',
        width: 160
      }
    ]
  },
  {
    title: 'Merchant order number',
    children: [
      {
        title: 'Refund',
        dataIndex: 'merchantRefundNo',
        width: 200
      },
      {
        title: 'trade',
        dataIndex: 'merchantOrderId',
        width: 100
      }
    ]
  },
  {
    title: 'Pay order number',
    children: [
      {
        title: 'trade',
        dataIndex: 'tradeNo',
        width: 100
      },
      {
        title: 'channel',
        dataIndex: 'channelOrderNo',
        width: 200
      }
    ]
  },
  {
    title: 'Payment amount(Yuan)',
    dataIndex: 'payAmount',
    width: 120,
    customRender: ({ text }) => {
      return '￥' + parseFloat(text / 100).toFixed(2)
    }
  },
  {
    title: 'Refund amount(Yuan)',
    dataIndex: 'refundAmount',
    width: 120,
    customRender: ({ text }) => {
      return '￥' + parseFloat(text / 100).toFixed(2)
    }
  },
  {
    title: 'Refund type',
    dataIndex: 'type',
    width: 100,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.PAY_REFUND_ORDER_TYPE)
    }
  },
  {
    title: 'Refund status',
    dataIndex: 'status',
    width: 100,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.PAY_REFUND_ORDER_STATUS)
    }
  },
  {
    title: 'Callback status',
    dataIndex: 'notifyStatus',
    width: 100,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.PAY_ORDER_NOTIFY_STATUS)
    }
  },
  {
    title: 'reason for return',
    dataIndex: 'reason',
    width: 100
  },
  {
    title: 'Creation time',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  },
  {
    title: 'Refunds success time',
    dataIndex: 'successTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'Affiliated merchant',
    field: 'merchantId',
    component: 'ApiSelect',
    componentProps: {
      api: () => getMerchantListByName('')
    },
    colProps: { span: 8 }
  },
  {
    label: 'Application number',
    field: 'appId',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Channel code',
    field: 'channelCode',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.PAY_CHANNEL_CODE_TYPE)
    },
    colProps: { span: 8 }
  },
  {
    label: 'Refund type',
    field: 'type',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.PAY_REFUND_ORDER_TYPE)
    },
    colProps: { span: 8 }
  },
  {
    label: 'Merchant refund order number',
    field: 'merchantRefundNo',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Application number',
    field: 'appId',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Refund status',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.PAY_REFUND_ORDER_STATUS)
    },
    colProps: { span: 8 }
  },
  {
    label: 'Refund',
    field: 'notifyStatus',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.PAY_ORDER_NOTIFY_STATUS)
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

export const descSchema: DescItem[] = [
  {
    label: 'Business Name',
    field: 'merchantName'
  },
  {
    label: 'Application Name',
    field: 'appName'
  },
  {
    label: 'product name',
    field: 'subject'
  },
  {
    label: 'Merchant refund order number',
    field: 'merchantRefundNo',
    render: (curVal) => {
      return useRender.renderTag(curVal)
    }
  },
  {
    label: 'Merchant order number',
    field: 'merchantOrderId'
  },
  {
    label: 'Payment amount',
    field: 'payAmount',
    render: (curVal) => {
      return '￥' + parseFloat(curVal / 100).toFixed(2)
    }
  },
  {
    label: 'Refund amount',
    field: 'refundAmount',
    render: (curVal) => {
      return '￥' + parseFloat(curVal / 100).toFixed(2)
    }
  },
  {
    label: 'Refund type',
    field: 'type',
    render: (curVal) => {
      return useRender.renderDict(curVal, DICT_TYPE.PAY_REFUND_ORDER_TYPE)
    }
  },
  {
    label: 'Refund status',
    field: 'status',
    render: (curVal) => {
      return useRender.renderDict(curVal, DICT_TYPE.PAY_REFUND_ORDER_STATUS)
    }
  },
  {
    label: 'Creation time',
    field: 'createTime',
    render: (curVal) => {
      return useRender.renderDate(curVal)
    }
  },
  {
    label: 'Refunds success time',
    field: 'successTime',
    render: (curVal) => {
      return useRender.renderDate(curVal)
    }
  },
  {
    label: 'Return failure time',
    field: 'expireTime',
    render: (curVal) => {
      return useRender.renderDate(curVal)
    }
  },
  {
    label: 'Update time',
    field: 'updateTime',
    render: (curVal) => {
      return useRender.renderDate(curVal)
    }
  },
  {
    label: 'Payment channel',
    field: 'channelCodeName'
  },
  {
    label: 'Payment IP',
    field: 'userIp'
  },
  {
    label: 'Callback address',
    field: 'notifyUrl'
  },
  {
    label: 'Callback status',
    field: 'notifyStatus',
    render: (curVal) => {
      return useRender.renderDict(curVal, DICT_TYPE.PAY_ORDER_NOTIFY_STATUS)
    }
  },
  {
    label: 'Callback time',
    field: 'notifyTime',
    render: (curVal) => {
      return useRender.renderDate(curVal)
    }
  },
  {
    label: 'Channel order number',
    field: 'channelOrderNo'
  },
  {
    label: 'Channel refund order number',
    field: 'channelRefundNo'
  },
  {
    label: 'Channel error code',
    field: 'channelErrorCode'
  },
  {
    label: '渠道错误码描述',
    field: 'notifchannelErrorMsgyUrl'
  },
  {
    label: 'Channel additional parameters',
    field: 'channelExtras'
  },
  {
    label: 'reason for return',
    field: 'reason'
  }
]
