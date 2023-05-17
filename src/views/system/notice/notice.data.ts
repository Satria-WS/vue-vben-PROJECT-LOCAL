import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'Announcement number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'Announce',
    dataIndex: 'title',
    width: 180
  },
  {
    title: 'Announcement',
    dataIndex: 'type',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_NOTICE_TYPE)
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
    title: 'Creation time',
    dataIndex: 'createTime',
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'Announce',
    field: 'title',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Announcement status',
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
    label: 'Announce',
    field: 'title',
    required: true,
    component: 'Input'
  },
  {
    label: 'Announcement',
    field: 'type',
    component: 'Select',
    defaultValue: 0,
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.SYSTEM_NOTICE_TYPE)
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
  },
  {
    label: 'content',
    field: 'content',
    component: 'Editor'
  }
]
