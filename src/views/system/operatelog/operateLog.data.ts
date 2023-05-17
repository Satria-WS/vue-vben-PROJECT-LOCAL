import { getIntDictOptions } from '@/utils/dict'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'Log number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'Operating module',
    dataIndex: 'module',
    width: 120
  },
  {
    title: 'Operating name',
    dataIndex: 'name',
    width: 180
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_OPERATE_TYPE)
    }
  },
  {
    title: 'Operator',
    dataIndex: 'userNickname',
    width: 120
  },
  {
    title: 'userAgent',
    dataIndex: 'userAgent',
    width: 400
  },
  {
    title: 'Operating result',
    dataIndex: 'resultCode',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderTag(text === 0 ? 'success' : 'fail')
    }
  },
  {
    title: 'Operating date',
    dataIndex: 'startTime',
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
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'System module',
    field: 'title',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'operator',
    field: 'operName',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'type',
    field: 'type',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.SYSTEM_OPERATE_TYPE)
    },
    colProps: { span: 8 }
  },
  {
    label: 'state',
    field: 'success',
    component: 'Select',
    componentProps: {
      options: [
        { value: true, key: true, label: 'success' },
        { value: false, key: false, label: 'fail' }
      ]
    },
    colProps: { span: 8 }
  },
  {
    label: 'Operation time',
    field: 'startTime',
    component: 'RangePicker',
    colProps: { span: 8 }
  }
]
