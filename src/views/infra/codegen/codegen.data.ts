import { getDataSourceConfigList } from '@/api/infra/dataSourceConfig'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

const dataSourceConfigs = await getDataSourceConfigList()

export const columns: BasicColumn[] = [
  {
    title: 'data source',
    dataIndex: 'dataSourceConfigId',
    width: 100,
    customRender: ({ text }) => {
      for (const config of dataSourceConfigs) {
        if (text === config.id) {
          return config.name
        }
      }
      return 'unknown【' + text + '】'
    }
  },
  {
    title: 'Table name',
    dataIndex: 'tableName',
    width: 200
  },
  {
    title: 'Table description',
    dataIndex: 'tableComment',
    width: 120
  },
  {
    title: 'entity',
    dataIndex: 'className',
    width: 200
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
    title: 'Update time',
    dataIndex: 'updateTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'Table name',
    field: 'tableName',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Table description',
    field: 'tableComment',
    component: 'Input',
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
    label: 'Position Title',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Job code',
    field: 'code',
    required: true,
    component: 'Input'
  },
  {
    label: 'Job order',
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

export const importTableColumns: BasicColumn[] = [
  {
    title: 'Table name',
    dataIndex: 'name',
    width: 200
  },
  {
    title: 'Table description',
    dataIndex: 'comment',
    width: 120
  }
]

export const importTableSearchFormSchema: FormSchema[] = [
  {
    label: 'data source',
    field: 'dataSourceConfigId',
    component: 'ApiSelect',
    defaultValue: 0,
    componentProps: {
      api: () => getDataSourceConfigList(),
      labelField: 'name',
      valueField: 'id'
    },
    colProps: { span: 8 }
  },
  {
    label: 'Table name',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Table description',
    field: 'comment',
    component: 'Input',
    colProps: { span: 8 }
  }
]
