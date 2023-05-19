import { DescItem } from '@/components/Description'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE } from '@/utils/dict'

export const baseInfoSchema: DescItem[] = [
  {
    label: 'Redis version',
    field: 'redis_version'
  },
  {
    label: 'Run mode',
    field: 'redis_mode',
    render: (val) => {
      return val === 'standalone' ? '单机' : '集群'
    }
  },
  {
    label: 'port',
    field: 'tcp_port'
  },
  {
    label: 'Number of clients',
    field: 'connected_clients'
  },
  {
    label: 'operation hours(天)',
    field: 'uptime_in_days'
  },
  {
    label: 'Use memory',
    field: 'used_memory_human'
  },
  {
    label: 'CPU',
    field: 'tcp_port',
    render: (val) => {
      return parseFloat(val).toFixed(2)
    }
  },
  {
    label: 'Memory configuration',
    field: 'maxmemory_human'
  },
  {
    label: 'Whether AOF opens',
    field: 'maxmemory_human',
    render: (val) => {
      return val === '0' ? '否' : '是'
    }
  },
  {
    label: 'Is RDB successful',
    field: 'rdb_last_bgsave_status'
  },
  {
    label: 'Quantity',
    field: 'expired_keys'
  },
  {
    label: 'Network entrance/exit',
    field: 'instantaneous_input_kbps',
    render: (val, data) => {
      console.info(val)
      return data.instantaneous_input_kbps + 'kps / ' + data.instantaneous_output_kbps + 'kps'
    }
  }
]

export const tableSchema: BasicColumn[] = [
  {
    title: 'Key 模板',
    dataIndex: 'keyTemplate',
    width: 200
  },
  {
    title: 'Key 类型',
    dataIndex: 'keyType',
    width: 100
  },
  {
    title: 'Value 类型',
    dataIndex: 'valueType',
    width: 300
  },
  {
    title: '超时类型',
    dataIndex: 'timeoutType',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_REDIS_TIMEOUT_TYPE)
    }
  },
  {
    title: '超时时间',
    dataIndex: 'timeout',
    width: 100,
    customRender: ({ text }) => {
      return useRender.renderText(text === 0 ? 0 : text / 1000, '秒')
    }
  }
]

export const formSchema: FormSchema[] = [
  {
    label: 'Cache key name',
    field: 'cacheForm.key',
    dynamicDisabled: true,
    component: 'Input'
  },
  {
    label: 'Cache content',
    field: 'cacheForm.value',
    dynamicDisabled: true,
    component: 'InputTextArea'
  }
]
