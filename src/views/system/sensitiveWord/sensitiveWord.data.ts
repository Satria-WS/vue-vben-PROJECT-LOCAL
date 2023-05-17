import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'serial number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'Sensitive words',
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
    title: 'describe',
    dataIndex: 'description',
    width: 200
  },
  {
    title: 'Label',
    dataIndex: 'tags',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderTags(text)
    }
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
    label: 'Sensitive words',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Label',
    field: 'tag',
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
    label: 'Sensitive words',
    field: 'name',
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
  },
  {
    label: 'Label',
    field: 'tags',
    required: true,
    component: 'Select',
    componentProps: {
      mode: 'tags',
      options: []
    }
  }
]
