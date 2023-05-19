import { getSimpleAccounts } from '@/api/mp/account'
import { getSimpleTags } from '@/api/mp/tag'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'

export const columns: BasicColumn[] = [
  {
    title: 'Job number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: '用户标识',
    dataIndex: 'openid',
    width: 180
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: 100
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 120
  },
  {
    title: '标签',
    dataIndex: 'tagIds',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderTags(text)
    }
  },
  {
    title: '订阅状态',
    dataIndex: 'subscribeStatus',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderTag(text === 0 ? '已订阅' : '未订阅', text === 0 ? 'purple' : 'orange')
    }
  },
  {
    title: '订阅时间',
    dataIndex: 'subscribeTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'No public',
    field: 'accountId',
    component: 'ApiSelect',
    componentProps: {
      api: () => getSimpleAccounts(),
      labelField: 'name',
      valueField: 'id'
    },
    colProps: { span: 8 }
  },
  {
    label: 'User logo',
    field: 'openid',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Nick name',
    field: 'nickname',
    component: 'Input',
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
    label: 'Nick name',
    field: 'nickname',
    required: true,
    component: 'Input'
  },
  {
    label: 'Remark',
    field: 'remark',
    required: true,
    component: 'Input'
  },
  {
    label: 'Label',
    field: 'tagIds',
    helpMessage: '在微信公众平台（mp.weixin.qq.com）的菜单 [设置与开发 - 公众号设置 - 基本设置] 中能找到「开发者ID(AppID)」',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: () => getSimpleTags(),
      labelField: 'name',
      valueField: 'tagId',
      mode: 'tags'
    }
  }
]
