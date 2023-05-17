import { listSimpleMenus } from '@/api/system/menu'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { SystemMenuTypeEnum } from '@/enums/systemEnum'

export const columns: BasicColumn[] = [
  {
    title: 'Menu name',
    dataIndex: 'name',
    width: 250,
    align: 'left'
  },
  {
    title: 'Menu',
    dataIndex: 'type',
    width: 80,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_MENU_TYPE)
    }
  },
  {
    title: 'icon',
    dataIndex: 'icon',
    width: 60,
    customRender: ({ record }) => {
      return useRender.renderIcon(record.icon)
    }
  },
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 60
  },
  {
    title: 'Permissions',
    dataIndex: 'permission',
    width: 140
  },
  {
    title: 'Component path',
    dataIndex: 'component',
    width: 140
  },
  {
    title: 'state',
    dataIndex: 'status',
    width: 80,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.COMMON_STATUS)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: 'Menu name',
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
    label: 'Superior menu',
    field: 'parentId',
    required: true,
    defaultValue: 0,
    component: 'ApiTreeSelect',
    componentProps: {
      api: () => listSimpleMenus(),
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
    label: 'Menu',
    field: 'type',
    required: true,
    defaultValue: '0',
    component: 'RadioButtonGroup',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.SYSTEM_MENU_TYPE)
    },
    colProps: { lg: 24, md: 24 }
  },
  {
    label: 'Menu name',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: 'Menu icon',
    field: 'icon',
    component: 'IconPicker',
    ifShow: ({ values }) => values.type !== SystemMenuTypeEnum.BUTTON
  },
  {
    label: 'Display sorting',
    field: 'sort',
    required: true,
    component: 'InputNumber',
    defaultValue: 0
  },
  {
    label: 'Routing address',
    field: 'path',
    required: true,
    component: 'Input',
    helpMessage: 'The routing address of the access, such as::`user`Essence If you need an external network address, you can use it `http(s)://` 开头',
    ifShow: ({ values }) => values.type !== SystemMenuTypeEnum.BUTTON
  },
  {
    label: 'Permissions',
    field: 'permission',
    component: 'Input',
    helpMessage: 'Controller The permissions characters on the method, such as:@PreAuthorize(`@ss.hasPermission("system:user:list")`)',
    ifShow: ({ values }) => values.type !== SystemMenuTypeEnum.DIR
  },
  {
    label: 'Component path',
    field: 'component',
    component: 'Input',
    helpMessage: 'For example: systemm/user/index',
    ifShow: ({ values }) => values.type === SystemMenuTypeEnum.MENU
  },
  {
    label: 'Component name',
    field: 'componentName',
    component: 'Input',
    helpMessage: 'For example: SystemUser',
    ifShow: ({ values }) => values.type === SystemMenuTypeEnum.MENU
  },
  {
    label: 'Menu status',
    field: 'status',
    required: true,
    component: 'RadioButtonGroup',
    defaultValue: 0,
    helpMessage: 'When choosing to stop, the route will not appear on the sidebar, nor can it be accessed',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.COMMON_STATUS)
    }
  },
  {
    label: 'Display state',
    field: 'visible',
    component: 'Switch',
    componentProps: {
      checkedChildren: 'show',
      unCheckedChildren: 'hide'
    },
    helpMessage: 'When choosing hidden, the route will not appear on the side bar, but you can still access',
    ifShow: ({ values }) => values.type !== SystemMenuTypeEnum.BUTTON
  },
  {
    label: 'Always display',
    field: 'alwaysShow',
    component: 'Switch',
    componentProps: {
      checkedChildren: 'show',
      unCheckedChildren: 'hide'
    },
    helpMessage: 'When the choice is not, when the menu has only one sub -menu, do not show itself, directly display the sub -menu',
    ifShow: ({ values }) => values.type !== SystemMenuTypeEnum.BUTTON
  },
  {
    label: 'Whether to cache',
    field: 'keepAlive',
    component: 'Switch',
    componentProps: {
      checkedChildren: 'Cache',
      unCheckedChildren: 'Not cache'
    },
    helpMessage: 'When choosing a cache, it will be affected `keep-alive` Caches, you must fill in the "Component Name" field',
    ifShow: ({ values }) => values.type === SystemMenuTypeEnum.MENU
  }
]
