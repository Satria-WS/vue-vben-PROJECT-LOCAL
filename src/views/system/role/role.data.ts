import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { SystemDataScopeEnum } from '@/enums/systemEnum'

export const columns: BasicColumn[] = [
  {
    title: 'Character number',
    dataIndex: 'id',
    width: 120
  },
  {
    title: 'Role Name',
    dataIndex: 'name',
    width: 150
  },
  {
    title: 'Character identification',
    dataIndex: 'code',
    width: 150
  },
  {
    title: 'Character type',
    dataIndex: 'type',
    width: 150,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_ROLE_TYPE)
    }
  },
  {
    title: 'display order',
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
    label: 'Role Name',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Character identification',
    field: 'code',
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
    label: 'Role Name',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Character identification',
    field: 'code',
    required: true,
    component: 'Input'
  },
  {
    label: 'Role order',
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
    label: 'Remark',
    field: 'remark',
    component: 'InputTextArea'
  }
]

export const menuScopeFormSchema: FormSchema[] = [
  {
    label: 'Character number',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: 'Role Name',
    field: 'name',
    dynamicDisabled: true,
    component: 'Input'
  },
  {
    label: 'Character identification',
    field: 'code',
    dynamicDisabled: true,
    component: 'Input'
  },
  {
    label: 'Menu permissions',
    field: 'menuIds',
    component: 'Input',
    slot: 'menuIds'
  }
]

export const dataScopeFormSchema: FormSchema[] = [
  {
    label: 'Character number',
    field: 'roleId',
    show: false,
    component: 'Input'
  },
  {
    label: 'Role Name',
    field: 'name',
    dynamicDisabled: true,
    component: 'Input'
  },
  {
    label: 'Character identification',
    field: 'code',
    dynamicDisabled: true,
    component: 'Input'
  },
  {
    label: 'Scope',
    field: 'dataScope',
    required: true,
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.SYSTEM_DATA_SCOPE)
    }
  },
  {
    label: 'data permission',
    field: 'dataScopeDeptIds',
    ifShow: ({ values }) => values.dataScope === SystemDataScopeEnum.DEPT_CUSTOM,
    component: 'Input',
    slot: 'dataScopeDeptIds'
  }
]
