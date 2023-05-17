import { getMerchantListByName } from '@/api/pay/merchant'
import { DescItem } from '@/components/Description'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'Order number',
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
    title: 'Payment order',
    children: [
      {
        title: 'Merchant',
        dataIndex: 'merchantOrderId',
        width: 100
      },
      {
        title: 'Pay',
        dataIndex: 'channelOrderNo',
        width: 200
      }
    ]
  },
  {
    title: 'Product title',
    dataIndex: 'subject',
    width: 200
  },
  {
    title: 'Payment amount(Yuan)',
    dataIndex: 'amount',
    width: 120,
    customRender: ({ text }) => {
      return '￥' + parseFloat(text || 0 / 100).toFixed(2)
    }
  },
  {
    title: 'The procedures (yuan)',
    dataIndex: 'channelFeeAmount',
    width: 120,
    customRender: ({ text }) => {
      return '￥' + parseFloat(text || 0 / 100).toFixed(2)
    }
  },
  {
    title: 'Refund amount (yuan)',
    dataIndex: 'refundAmount',
    width: 120,
    customRender: ({ text }) => {
      return '￥' + parseFloat(text || 0 / 100).toFixed(2)
    }
  },
  {
    title: 'Payment status',
    dataIndex: 'status',
    width: 100,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.PAY_ORDER_STATUS)
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
    title: 'Creation time',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  },
  {
    title: 'Payment time',
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
    label: 'Merchant order number',
    field: 'merchantOrderId',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Channel order number',
    field: 'channelOrderNo',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Payment status',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.PAY_ORDER_STATUS)
    },
    colProps: { span: 8 }
  },
  {
    label: 'Refund status',
    field: 'refundStatus',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.PAY_ORDER_REFUND_STATUS)
    },
    colProps: { span: 8 }
  },
  {
    label: 'Return to merchant status',
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
    label: 'Merchant order number',
    field: 'merchantOrderId',
    render: (curVal) => {
      return useRender.renderTag(curVal)
    }
  },
  {
    label: 'Channel order number',
    field: 'channelOrderNo',
    render: (curVal) => {
      return useRender.renderTag(curVal)
    }
  },
  {
    label: 'Pay order number',
    field: 'payOrderExtension.no',
    render: (curVal) => {
      return useRender.renderTag(curVal)
    }
  },
  {
    label: 'Payment amount',
    field: 'amount',
    render: (curVal) => {
      return '￥' + parseFloat(curVal || 0 / 100).toFixed(2)
    }
  },
  {
    label: 'Handling fee',
    field: 'channelFeeAmount',
    render: (curVal) => {
      return '￥' + parseFloat(curVal || 0 / 100).toFixed(2)
    }
  },
  {
    label: 'Proportion of fees',
    field: 'channelFeeRate',
    render: (curVal) => {
      return parseFloat(curVal || 0 / 100).toFixed(2) + '%'
    }
  },
  {
    label: 'Payment status',
    field: 'status',
    render: (curVal) => {
      return useRender.renderDict(curVal, DICT_TYPE.PAY_ORDER_STATUS)
    }
  },
  {
    label: 'Callback status',
    field: 'notifyStatus',
    render: (curVal) => {
      return useRender.renderDict(curVal, DICT_TYPE.PAY_ORDER_NOTIFY_STATUS)
    }
  },
  {
    label: 'Callback address',
    field: 'notifyUrl'
  },
  {
    label: 'Creation time',
    field: 'createTime',
    render: (curVal) => {
      return useRender.renderDate(curVal)
    }
  },
  {
    label: 'Payment time',
    field: 'successTime',
    render: (curVal) => {
      return useRender.renderDate(curVal)
    }
  },
  {
    label: 'Failure time',
    field: 'expireTime',
    render: (curVal) => {
      return useRender.renderDate(curVal)
    }
  },
  {
    label: 'Notification time',
    field: 'notifyTime',
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
    label: 'Refund status',
    field: 'notifyStatus',
    render: (curVal) => {
      return useRender.renderDict(curVal, DICT_TYPE.PAY_ORDER_REFUND_STATUS)
    }
  },
  {
    label: 'Refundable number',
    field: 'refundTimes'
  },
  {
    label: 'Refund amount',
    field: 'refundAmount',
    render: (curVal) => {
      return '￥' + parseFloat(curVal / 100).toFixed(2)
    }
  },
  {
    label: 'product description',
    field: 'body'
  },
  {
    label: 'Payment channel asynchronous callback content',
    field: 'payOrderExtension.channelNotifyData'
  }
]
