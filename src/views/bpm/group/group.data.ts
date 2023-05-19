import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { getListSimpleUsers } from '@/api/system/user'

let users: any[] = []

async function getUserList() {
  const res = await getListSimpleUsers()
  users = res
}

await getUserList()

export const columns: BasicColumn[] = [
  {
    title: '编号',
    dataIndex: 'id',
    width: 100
  },
  {
    title: '组名',
    dataIndex: 'name',
    width: 180
  },
  {
    title: '描述',
    dataIndex: 'description',
    width: 200
  },
  {
    title: '成员',
    dataIndex: 'memberUserIds',
    width: 180,
    customRender: ({ record, text }) => {
      const names: any[] = []
      if (text) {
        for (const userId of record.memberUserIds) {
          let isUser = false
          users.forEach((user) => {
            if (userId === user.id) {
              names.push(user.nickname)
              isUser = true
            }
          })
          if (!isUser) {
            names.push('未知(' + userId + ')')
          }
        }
        return useRender.renderTags(names)
      }
    }
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.COMMON_STATUS)
    }
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
    label: 'group name',
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
    label: 'group name',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'describe',
    field: 'description',
    required: true,
    component: 'Input'
  },
  {
    label: 'member',
    field: 'memberUserIds',
    required: true,
    component: 'ApiTransfer',
    componentProps: {
      api: () => getListSimpleUsers(),
      showSearch: true,
      labelField: 'nickname',
      valueField: 'id'
    }
  },
  {
    label: 'state',
    field: 'status',
    component: 'Select',
    defaultValue: 0,
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.COMMON_STATUS)
    }
  }
]
