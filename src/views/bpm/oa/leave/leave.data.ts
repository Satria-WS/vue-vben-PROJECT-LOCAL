import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: 'Application number',
    dataIndex: 'id',
    width: 100
  },
  {
    title: 'state',
    dataIndex: 'result',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.BPM_PROCESS_INSTANCE_RESULT)
    }
  },
  {
    title: 'Starting time',
    dataIndex: 'startTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  },
  {
    title: 'End Time',
    dataIndex: 'endTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  },
  {
    title: 'Leave type',
    dataIndex: 'type',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.BPM_OA_LEAVE_TYPE)
    }
  },
  {
    title: 'reason',
    dataIndex: 'reason',
    width: 180
  },
  {
    title: 'application time',
    dataIndex: 'applyTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'Leave type',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.BPM_OA_LEAVE_TYPE)
    },
    colProps: { span: 8 }
  },
  {
    label: 'application time',
    field: 'createTime',
    component: 'RangePicker',
    colProps: { span: 8 }
  },
  {
    label: 'result',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.BPM_PROCESS_INSTANCE_RESULT)
    },
    colProps: { span: 8 }
  },
  {
    label: 'reason',
    field: 'reason',
    component: 'Input',
    colProps: { span: 8 }
  }
]
