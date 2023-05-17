import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'Visit token',
    dataIndex: 'accessToken',
    width: 300
  },
  {
    title: 'Refresh token',
    dataIndex: 'refreshToken',
    width: 300
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
    title: 'Creation time',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  },
  {
    title: 'Expiration',
    dataIndex: 'expiresTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
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
    label: 'Client number',
    field: 'clientId',
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
  }
]
