import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'Job number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'Position Title',
    dataIndex: 'name',
    width: 180
  },
  {
    title: 'Job code',
    dataIndex: 'code',
    width: 100
  },
  {
    title: 'Job order',
    dataIndex: 'sort',
    width: 120
  },
  {
    title: 'state',
    dataIndex: 'status',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.COMMON_STATUS)
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
    label: 'Position Title',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Job code',
    field: 'code',
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
    label: 'Position Title',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Job code',
    field: 'code',
    required: true,
    component: 'Input'
  },
  {
    label: 'Job order',
    field: 'sort',
    required: true,
    defaultValue: 0,
    component: 'InputNumber'
  },
  {
    label: 'state',
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
