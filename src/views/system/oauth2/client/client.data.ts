import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions, getStrDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'Client number',
    dataIndex: 'clientId',
    width: 200
  },
  {
    title: 'Client density',
    dataIndex: 'secret',
    width: 100
  },
  {
    title: 'App',
    dataIndex: 'name',
    width: 100
  },
  {
    title: 'Application icon',
    dataIndex: 'logo',
    width: 120,
    customRender: ({ text }) => {
      return useRender.renderImg(text)
    }
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
    title: 'Validity of access token',
    dataIndex: 'accessTokenValiditySeconds',
    width: 100,
    customRender: ({ text }) => {
      return useRender.renderText(text, 'Second')
    }
  },
  {
    title: 'Refresh the validity period of token',
    dataIndex: 'refreshTokenValiditySeconds',
    width: 100,
    customRender: ({ text }) => {
      return useRender.renderText(text, 'Second')
    }
  },
  {
    title: 'Authorized type',
    dataIndex: 'authorizedGrantTypes',
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
    label: 'App',
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

export const formSchema: FormSchema[] = [
  {
    label: 'serial number',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: 'Client number',
    field: 'clientId',
    required: true,
    component: 'Input'
  },
  {
    label: 'Client density',
    field: 'secret',
    required: true,
    component: 'Input'
  },
  {
    label: 'App',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Application icon',
    field: 'logo',
    required: true,
    component: 'FileUpload',
    componentProps: {
      fileType: 'image',
      maxCount: 1
    }
  },
  {
    label: 'Application description',
    field: 'description',
    component: 'InputTextArea'
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
    label: '访问令牌的有效期',
    field: 'accessTokenValiditySeconds',
    required: true,
    defaultValue: 0,
    component: 'InputNumber'
  },
  {
    label: '刷新令牌的有效期',
    field: 'refreshTokenValiditySeconds',
    required: true,
    defaultValue: 0,
    component: 'InputNumber'
  },
  {
    label: '授权类型',
    field: 'authorizedGrantTypes',
    required: true,
    component: 'Select',
    componentProps: {
      options: getStrDictOptions(DICT_TYPE.SYSTEM_OAUTH2_GRANT_TYPE),
      mode: 'multiple'
    }
  },
  {
    label: '授权范围',
    field: 'scopes',
    component: 'Select',
    componentProps: {
      mode: 'tags',
      options: []
    }
  },
  {
    label: '自动授权范围',
    field: 'autoApproveScopes',
    component: 'Select',
    componentProps: {
      mode: 'tags',
      options: []
    }
  },
  {
    label: '可重定向的 URI 地址',
    field: 'redirectUris',
    required: true,
    component: 'Select',
    componentProps: {
      mode: 'tags',
      options: []
    }
  },
  {
    label: '权限',
    field: 'authorities',
    component: 'Select',
    componentProps: {
      mode: 'tags',
      options: []
    }
  },
  {
    label: '资源',
    field: 'resourceIds',
    component: 'Select',
    componentProps: {
      mode: 'tags',
      options: []
    }
  },
  {
    label: '附加信息',
    field: 'additionalInformation',
    component: 'InputTextArea'
  }
]
