import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const typeColumns: BasicColumn[] = [
  {
    title: 'Dictionary number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'Dictionary name',
    dataIndex: 'name',
    width: 180
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

export const typeSearchFormSchema: FormSchema[] = [
  {
    label: 'Dictionary name',
    field: 'name',
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

export const typeFormSchema: FormSchema[] = [
  {
    label: 'serial number',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: 'Dictionary name',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Dictionary',
    field: 'type',
    required: true,
    component: 'Input'
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
