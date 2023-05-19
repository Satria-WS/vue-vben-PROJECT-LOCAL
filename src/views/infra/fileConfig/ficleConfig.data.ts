import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: '编号',
    dataIndex: 'id',
    width: 100
  },
  {
    title: '配置名',
    dataIndex: 'name',
    width: 180
  },
  {
    title: '存储器',
    dataIndex: 'storage',
    width: 100,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_FILE_STORAGE)
    }
  },
  {
    title: '主配置',
    dataIndex: 'master',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_BOOLEAN_STRING)
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
    label: 'Configuration name',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Memory',
    field: 'storage',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.INFRA_FILE_STORAGE)
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
    label: 'Configuration name',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Memory',
    field: 'storage',
    component: 'Select',
    required: true,
    dynamicDisabled: ({ values }) => !!values.id,
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.INFRA_FILE_STORAGE)
    }
  },
  {
    label: 'Basic path',
    field: 'config.basePath',
    required: true,
    ifShow: ({ values }) => values.storage >= 10 && values.storage <= 12,
    component: 'Input'
  },
  {
    label: 'Host address',
    field: 'config.host',
    required: true,
    ifShow: ({ values }) => values.storage >= 11 && values.storage <= 12,
    component: 'Input'
  },
  {
    label: 'Host port',
    field: 'config.port',
    required: true,
    ifShow: ({ values }) => values.storage >= 11 && values.storage <= 12,
    component: 'Input'
  },
  {
    label: 'username',
    field: 'config.username',
    required: true,
    ifShow: ({ values }) => values.storage >= 11 && values.storage <= 12,
    component: 'Input'
  },
  {
    label: 'password',
    field: 'config.password',
    required: true,
    ifShow: ({ values }) => values.storage >= 11 && values.storage <= 12,
    component: 'Input'
  },
  {
    label: 'Connection mode',
    field: 'config.basePath',
    required: true,
    ifShow: ({ values }) => values.storage === 11,
    component: 'Select',
    componentProps: {
      options: [
        { lable: 'Active mode', key: 'Active', value: 'Active' },
        { lable: 'Passive mode', key: 'Passive', value: 'Passive' }
      ]
    }
  },
  {
    label: 'Node address',
    field: 'config.endpoint',
    required: true,
    ifShow: ({ values }) => values.storage === 20,
    component: 'Input'
  },
  {
    label: 'storage bucket',
    field: 'config.bucket',
    required: true,
    ifShow: ({ values }) => values.storage === 20,
    component: 'Input'
  },
  {
    label: 'accessKey',
    field: 'config.accessKey',
    ifShow: ({ values }) => values.storage === 20,
    component: 'Input'
  },
  {
    label: 'accessSecret',
    field: 'config.accessSecret',
    ifShow: ({ values }) => values.storage === 20,
    component: 'Input'
  },
  {
    label: 'Custom domain name',
    field: 'config.domain',
    required: true,
    component: 'Input'
  },
  {
    label: 'Remark',
    field: 'remark',
    component: 'InputTextArea'
  }
]
