import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'Log number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'user ID',
    dataIndex: 'userId',
    width: 100
  },
  {
    title: 'user type',
    dataIndex: 'userType',
    width: 120,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.USER_TYPE)
    }
  },
  {
    title: 'App',
    dataIndex: 'applicationName',
    width: 120
  },
  {
    title: 'Method name',
    dataIndex: 'requestMethod',
    width: 120
  },
  {
    title: 'Request address',
    dataIndex: 'requestUrl',
    width: 250
  },
  {
    title: 'Request time',
    dataIndex: 'beginTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  },
  {
    title: 'Execute time',
    dataIndex: 'duration',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderText(text, 'ms')
    }
  },
  {
    title: 'Operating result',
    dataIndex: 'status',
    width: 180,
    customRender: ({ record }) => {
      return useRender.renderTag(record.resultCode === 0 ? 'success' : 'fail(' + record.resultMsg + ')')
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'user ID',
    field: 'userId',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'user type',
    field: 'userType',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.USER_TYPE)
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
    label: 'Request address',
    field: 'requestUrl',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Request time',
    field: 'beginTime',
    component: 'RangePicker',
    colProps: { span: 8 }
  },
  {
    label: 'Execute time',
    field: 'duration',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Result code',
    field: 'resultCode',
    component: 'Input',
    colProps: { span: 8 }
  }
]
