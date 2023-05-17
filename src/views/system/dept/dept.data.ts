import { listSimpleDept } from '@/api/system/dept'
import { getListSimpleUsers } from '@/api/system/user'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

let userOptions: any[] = []

async function getUserList() {
  const res = await getListSimpleUsers()
  userOptions = res
}

await getUserList()

export const columns: BasicColumn[] = [
  {
    title: 'Department name',
    dataIndex: 'name',
    width: 260,
    align: 'left'
  },
  {
    title: 'principal',
    dataIndex: 'leaderUserId',
    width: 120,
    customRender: ({ text }) => {
      if (!text) {
        return 'Not set'
      }
      for (const user of userOptions) {
        if (text === user.id) {
          return user.nickname
        }
      }
      return 'unknown【' + text + '】'
    }
  },
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 60
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
    label: 'Department name',
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
    label: 'Higher office',
    field: 'parentId',
    required: true,
    defaultValue: 0,
    component: 'ApiTreeSelect',
    componentProps: {
      api: () => listSimpleDept(),
      parentLabel: 'pillar',
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id'
      },
      handleTree: 'id'
    }
  },
  {
    label: 'Department name',
    field: 'name',
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
    label: 'principal',
    field: 'leaderUserId',
    component: 'ApiSelect',
    componentProps: {
      api: () => getListSimpleUsers(),
      labelField: 'nickname',
      valueField: 'id'
    }
  },
  {
    label: 'contact number',
    field: 'phone',
    required: true,
    rules: [
      {
        pattern: /^(?:(?:\+|00)86)?1(?:3[\d]|4[5-79]|5[0-35-9]|6[5-7]|7[0-8]|8[\d]|9[189])\d{8}$/,
        message: 'Please enter the correct phone number',
        trigger: 'blur'
      }
    ],
    component: 'Input'
  },
  {
    label: 'Mail',
    field: 'email',
    required: true,
    component: 'Input'
  },
  {
    label: 'Departmental status',
    field: 'status',
    component: 'Select',
    defaultValue: 0,
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.COMMON_STATUS)
    }
  }
]
