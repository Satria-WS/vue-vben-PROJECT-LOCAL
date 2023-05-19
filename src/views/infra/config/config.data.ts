import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: '参数主键',
    dataIndex: 'id',
    width: 100
  },
  {
    title: '参数分类',
    dataIndex: 'category',
    width: 180
  },
  {
    title: '参数名称',
    dataIndex: 'name',
    width: 100
  },
  {
    title: '参数键名',
    dataIndex: 'key',
    width: 120
  },
  {
    title: '参数键值',
    dataIndex: 'value',
    width: 120
  },
  {
    title: '系统内置',
    dataIndex: 'type',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_CONFIG_TYPE)
    }
  },
  {
    title: '是否可见',
    dataIndex: 'visible',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderTag(text ? '是' : '否')
    }
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 180
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'parameter name',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Parameter key name',
    field: 'key',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Built -in',
    field: 'type',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.INFRA_CONFIG_TYPE)
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
    label: 'Parameter classification',
    field: 'category',
    required: true,
    component: 'Input'
  },
  {
    label: 'parameter name',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Parameter key name',
    field: 'key',
    required: true,
    component: 'Input'
  },
  {
    label: 'Parameter key value',
    field: 'value',
    required: true,
    component: 'Input'
  },
  {
    label: 'Whether it is visible',
    field: 'visible',
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { key: true, label: 'yes', value: true },
        { key: false, label: 'no', value: false }
      ]
    }
  },
  {
    label: 'Remark',
    field: 'remark',
    component: 'InputTextArea'
  }
]
