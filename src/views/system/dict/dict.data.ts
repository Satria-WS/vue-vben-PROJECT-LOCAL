import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const dataColumns: BasicColumn[] = [
  {
    title: 'Dictionary',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'Dictionary label',
    dataIndex: 'label',
    width: 180
  },
  {
    title: 'Dictionary key value',
    dataIndex: 'value',
    width: 100
  },
  {
    title: 'Dictionary',
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
    title: 'Color type',
    dataIndex: 'colorType',
    width: 180
  },
  {
    title: 'CSS Class',
    dataIndex: 'cssClass',
    width: 180
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

export const dataSearchFormSchema: FormSchema[] = [
  {
    label: 'Dictionary label',
    field: 'label',
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

export const dataFormSchema: FormSchema[] = [
  {
    label: 'serial number',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: 'Dictionary',
    field: 'dictType',
    required: true,
    component: 'Input',
    dynamicDisabled: ({ values }) => !!values.dictType
  },
  {
    label: 'Data label',
    field: 'label',
    required: true,
    component: 'Input'
  },
  {
    label: 'Data key',
    field: 'value',
    required: true,
    component: 'Input'
  },
  {
    label: 'Display sorting',
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
    label: 'Color type',
    field: 'colorType',
    component: 'Select',
    componentProps: {
      options: [
        {
          value: '',
          label: 'null'
        },
        {
          value: 'processing',
          label: 'main'
        },
        {
          value: 'success',
          label: 'success'
        },
        {
          value: 'default',
          label: 'default'
        },
        {
          value: 'warning',
          label: 'warn'
        },
        {
          value: 'error',
          label: 'Danger'
        },
        {
          value: 'pink',
          label: 'pink'
        },
        {
          value: 'red',
          label: 'red'
        },
        {
          value: 'orange',
          label: 'orange'
        },
        {
          value: 'green',
          label: 'green'
        },
        {
          value: 'cyan',
          label: 'cyan'
        },
        {
          value: 'blue',
          label: 'blue'
        },
        {
          value: 'purple',
          label: 'purple'
        }
      ]
    }
  },
  {
    label: 'CSS Class',
    field: 'cssClass',
    component: 'Input',
    helpMessage: 'Enter the color of the hex mode, such as#108ee9'
  },
  {
    label: 'Remark',
    field: 'remark',
    component: 'InputTextArea'
  }
]
