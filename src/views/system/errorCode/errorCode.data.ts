import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'serial number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'type',
    dataIndex: 'type',
    width: 80,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_ERROR_CODE_TYPE)
    }
  },
  {
    title: 'App',
    dataIndex: 'applicationName',
    width: 200
  },
  {
    title: 'Error code encoding',
    dataIndex: 'code',
    width: 120
  },
  {
    title: 'Error code prompt',
    dataIndex: 'message',
    width: 300
  },
  {
    title: 'Remark',
    dataIndex: 'memo',
    width: 200
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
    label: 'Error code type',
    field: 'type',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.SYSTEM_ERROR_CODE_TYPE)
    },
    colProps: { span: 8 }
  },
  {
    label: 'App',
    field: 'applicationName',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Error code encoding',
    field: 'code',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Error code prompt',
    field: 'message',
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
    label: 'App',
    field: 'applicationName',
    required: true,
    component: 'Input'
  },
  {
    label: 'Error code encoding',
    field: 'code',
    required: true,
    component: 'Input'
  },
  {
    label: 'Error code prompt',
    field: 'message',
    required: true,
    component: 'Input'
  },
  {
    label: 'Remark',
    field: 'memo',
    component: 'InputTextArea'
  }
]
