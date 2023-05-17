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
    title: 'Occasionary time',
    dataIndex: 'exceptionTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  },
  {
    title: 'Abnormal name',
    dataIndex: 'exceptionName',
    width: 250
  },
  {
    title: 'Processing status',
    dataIndex: 'processStatus',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_API_ERROR_LOG_PROCESS_STATUS)
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
    label: 'user name',
    field: 'username',
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
    label: 'Abnormal time',
    field: 'exceptionTime',
    component: 'RangePicker',
    colProps: { span: 8 }
  },
  {
    label: 'Processing status',
    field: 'processStatus',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.INFRA_API_ERROR_LOG_PROCESS_STATUS)
    },
    colProps: { span: 8 }
  }
]
