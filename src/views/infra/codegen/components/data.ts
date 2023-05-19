import { listSimpleDictType } from '@/api/system/dict/type'
import { listSimpleMenus } from '@/api/system/menu'
import { FormSchema } from '@/components/Form'
import { BasicColumn } from '@/components/Table'
import { getIntDictOptions, DICT_TYPE } from '@/utils/dict'

async function getDictTypeOptions() {
  const dictTypeOptions: any[] = []
  const res = await listSimpleDictType()
  dictTypeOptions.push(...res)
  return dictTypeOptions
}

export const basicInfoSchemas: FormSchema[] = [
  {
    label: 'Basic Information',
    field: 'basicInfo',
    component: 'Divider',
    colProps: { span: 24 }
  },
  {
    label: 'Table name',
    field: 'tableName',
    required: true,
    component: 'Input',
    colProps: { span: 12 }
  },
  {
    label: 'Table description',
    field: 'tableComment',
    required: true,
    component: 'Input',
    colProps: { span: 12 }
  },
  {
    label: 'Sports name',
    field: 'className',
    required: true,
    helpMessage: '默认去除表名的前缀。如果存在重复，则需要手动添加前缀，避免 MyBatis 报 Alias 重复的问题。',
    component: 'Input',
    colProps: { span: 12 }
  },
  {
    label: 'author',
    field: 'author',
    required: true,
    component: 'Input',
    colProps: { span: 12 }
  },
  {
    label: 'Generate information',
    field: 'genInfo',
    component: 'Divider',
    colProps: { span: 24 }
  },
  {
    label: 'Generate template',
    field: 'templateType',
    required: true,
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.INFRA_CODEGEN_TEMPLATE_TYPE)
    },
    colProps: { span: 12 }
  },
  {
    label: 'Front -end type',
    field: 'frontType',
    required: true,
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.INFRA_CODEGEN_FRONT_TYPE)
    },
    colProps: { span: 12 }
  },
  {
    label: 'Generation scene',
    field: 'scene',
    required: true,
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.INFRA_CODEGEN_SCENE)
    },
    colProps: { span: 12 }
  },
  {
    label: 'Module name',
    field: 'moduleName',
    required: true,
    helpMessage: '模块名，即一级目录，例如 system、infra、tool 等等',
    component: 'Input',
    colProps: { span: 12 }
  },
  {
    label: 'Business name',
    field: 'businessName',
    required: true,
    component: 'Input',
    helpMessage: '业务名，即二级目录，例如 user、permission、dict 等等',
    colProps: { span: 12 }
  },
  {
    label: 'Class name',
    field: 'className',
    required: true,
    component: 'Input',
    helpMessage: '类名称（首字母大写），例如SysUser、SysMenu、SysDictData 等等',
    colProps: { span: 12 }
  },
  {
    label: 'Classification',
    field: 'classComment',
    required: true,
    component: 'Input',
    helpMessage: '用作类描述，例如 用户',
    colProps: { span: 12 }
  },
  {
    label: 'Superior menu',
    field: 'parentMenuId',
    required: true,
    component: 'ApiTreeSelect',
    componentProps: {
      api: () => listSimpleMenus(),
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id'
      },
      handleTree: 'id'
    },
    colProps: { span: 12 }
  },
  {
    label: 'Custom path',
    field: 'genPath',
    component: 'Input',
    helpMessage: '填写磁盘绝对路径，若不填写，则生成到当前Web项目下',
    defaultValue: '/',
    ifShow: ({ values }) => values.genType === '1',
    colProps: { span: 12 }
  },
  {
    label: 'Remark',
    field: 'remark',
    component: 'InputTextArea',
    colProps: { span: 24 }
  }
]

export const columns: BasicColumn[] = [
  {
    title: '字段列名',
    dataIndex: 'columnName',
    width: 60
  },
  {
    title: '基础属性',
    children: [
      {
        title: '物理类型',
        dataIndex: 'dataType',
        editComponent: 'Select',
        width: 50
      },
      {
        title: '字段描述',
        dataIndex: 'columnComment',
        editRow: true,
        editComponent: 'Input',
        width: 50
      },
      {
        title: 'Java类型',
        dataIndex: 'javaType',
        editRow: true,
        editComponent: 'Select',
        editComponentProps: {
          options: [
            {
              label: 'Long',
              value: 'Long'
            },
            {
              label: 'String',
              value: 'String'
            },
            {
              label: 'Integer',
              value: 'Integer'
            },
            {
              label: 'Double',
              value: 'Double'
            },
            {
              label: 'BigDecimal',
              value: 'BigDecimal'
            },
            {
              label: 'LocalDateTime',
              value: 'LocalDateTime'
            },
            {
              label: 'Boolean',
              value: 'Boolean'
            }
          ]
        },
        width: 50
      },
      {
        title: 'java属性',
        dataIndex: 'javaField',
        editRow: true,
        editComponent: 'Input',
        width: 50
      }
    ]
  },
  {
    title: '增删改查',
    children: [
      {
        title: '插入',
        dataIndex: 'createOperation',
        editRow: true,
        editComponent: 'Checkbox',
        editValueMap: (value) => {
          return value ? '是' : '否'
        },
        width: 40
      },
      {
        title: '编辑',
        dataIndex: 'updateOperation',
        editRow: true,
        editComponent: 'Checkbox',
        editValueMap: (value) => {
          return value ? '是' : '否'
        },
        width: 40
      },
      {
        title: '列表',
        dataIndex: 'listOperationResult',
        editRow: true,
        editComponent: 'Checkbox',
        editValueMap: (value) => {
          return value ? '是' : '否'
        },
        width: 40
      },
      {
        title: '查询',
        dataIndex: 'listOperation',
        editRow: true,
        editComponent: 'Checkbox',
        editValueMap: (value) => {
          return value ? '是' : '否'
        },
        width: 40
      },
      {
        title: '查询方式',
        dataIndex: 'listOperationCondition',
        editRow: true,
        editComponent: 'Select',
        editComponentProps: {
          options: [
            { label: '=', value: '=' },
            { label: '!=', value: '!=' },
            { label: '>', value: '>' },
            { label: '>=', value: '>=' },
            { label: '<', value: '<' },
            { label: '<=', value: '<=' },
            { label: 'LIKE', value: 'LIKE' },
            { label: 'BETWEEN', value: 'BETWEEN' }
          ]
        },
        width: 80
      },
      {
        title: '允许空',
        dataIndex: 'nullable',
        editRow: true,
        editComponent: 'Checkbox',
        editValueMap: (value) => {
          return value ? '是' : '否'
        },
        width: 40
      },
      {
        title: '显示类型',
        dataIndex: 'htmlType',
        editRow: true,
        editComponent: 'Select',
        editComponentProps: {
          options: [
            { label: 'Text box', value: 'input' },
            { label: 'Text domain', value: 'textarea' },
            { label: 'Drop -down box', value: 'select' },
            { label: 'Single box', value: 'radio' },
            { label: 'Check box', value: 'checkbox' },
            { label: 'Date control', value: 'datetime' },
            { label: 'upload picture', value: 'imageUpload' },
            { label: 'File Upload', value: 'fileUpload' },
            { label: 'Rich text control', value: 'editor' }
          ]
        },
        width: 60
      },
      {
        title: '字典类型',
        dataIndex: 'dictType',
        editRow: true,
        editComponent: 'Select',
        editComponentProps: {
          options: (await getDictTypeOptions()).map((item) => ({ value: item.type, label: item.name }))
        },
        width: 100
      },
      {
        title: '示例',
        dataIndex: 'example',
        editRow: true,
        editComponent: 'Input',
        width: 60
      }
    ]
  }
]
