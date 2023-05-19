import { DescItem } from '@/components/Description'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: '日志编号',
    dataIndex: 'id',
    width: 100
  },
  {
    title: '任务编号',
    dataIndex: 'jobId',
    width: 180
  },
  {
    title: '处理器的名字',
    dataIndex: 'handlerName',
    width: 180
  },
  {
    title: '处理器的参数',
    dataIndex: 'handlerParam',
    width: 180
  },
  {
    title: '第几次执行',
    dataIndex: 'executeIndex',
    width: 100
  },
  {
    title: '执行时间',
    dataIndex: 'beginTime',
    width: 180,
    customRender: ({ record }) => {
      return useRender.renderDate(record.beginTime) + ' ~ ' + useRender.renderDate(record.endTime)
    }
  },
  {
    title: '执行时长',
    dataIndex: 'duration',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderText(text, ' 毫秒')
    }
  },
  {
    title: '任务状态',
    dataIndex: 'status',
    width: 180,
    customRender: ({ record }) => {
      return useRender.renderDict(record.beginTime, DICT_TYPE.INFRA_JOB_LOG_STATUS)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'The name of the processor',
    field: 'handlerName',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: 'Start execution time',
    field: 'beginTime',
    component: 'DatePicker',
    colProps: { span: 8 }
  },
  {
    label: 'End execution time',
    field: 'endTime',
    component: 'DatePicker',
    colProps: { span: 8 }
  },
  {
    label: 'Mission status',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.INFRA_JOB_STATUS)
    },
    colProps: { span: 8 }
  },
  {
    label: 'The name of the processor',
    field: 'handlerName',
    component: 'Input',
    colProps: { span: 8 }
  }
]

export const descSchema: DescItem[] = [
  {
    label: 'Log number',
    field: 'id'
  },
  {
    label: 'Task number',
    field: 'jobId'
  },
  {
    label: 'The name of the processor',
    field: 'handlerName'
  },
  {
    label: 'Parameters of the processor',
    field: 'handlerParam'
  },
  {
    label: 'How many times are executed',
    field: 'executeIndex'
  },
  {
    label: 'execution time',
    field: 'beginTime',
    render: (data) => {
      return useRender.renderDate(data.beginTime) + ' ~ ' + useRender.renderDate(data.endTime)
    }
  },
  {
    label: 'Execute time',
    field: 'duration',
    render: (curVal) => {
      return useRender.renderText(curVal, ' 毫秒')
    }
  },
  {
    label: 'Mission status',
    field: 'status',
    render: (curVal) => {
      return useRender.renderDict(curVal, DICT_TYPE.INFRA_JOB_LOG_STATUS)
    }
  },
  {
    label: 'Results of the',
    field: 'duration',
    render: (curVal) => {
      return useRender.renderText(curVal, ' result')
    }
  }
]
