import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'Access number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'Log',
    dataIndex: 'logType',
    width: 120,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_LOGIN_TYPE)
    }
  },
  {
    title: 'user name',
    dataIndex: 'username',
    width: 120
  },
  {
    title: 'Login address',
    dataIndex: 'userIp',
    width: 120
  },
  {
    title: 'userAgent',
    dataIndex: 'userAgent',
    width: 400
  },
  {
    title: 'result',
    dataIndex: 'result',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_LOGIN_RESULT)
    }
  },
  {
    title: 'Login date',
    dataIndex: 'loginTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'Login address',
    field: 'userIp',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'user name',
    field: 'username',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'result',
    field: 'result',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'success', value: 'true', key: 'true' },
        { label: 'fail', value: 'false', key: 'false' }
      ]
    },
    colProps: { span: 8 }
  },
  {
    label: 'Log in time',
    field: 'createTime',
    component: 'RangePicker',
    colProps: { span: 8 }
  }
]
