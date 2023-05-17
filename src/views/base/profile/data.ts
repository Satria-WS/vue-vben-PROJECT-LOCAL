import { FormSchema } from '@/components/Form/index'
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

export interface ListItem {
  key: string
  title: string
  description: string
  extra?: string
  avatar?: string
  color?: string
}

// tab的list
export const settingList = [
  {
    key: '1',
    name: 'basic settings',
    component: 'BaseSetting'
  },
  {
    key: '2',
    name: 'Security Settings',
    component: 'SecureSetting'
  },
  {
    key: '3',
    name: 'Account binding',
    component: 'AccountBind'
  },
  {
    key: '4',
    name: 'New news notification',
    component: 'MsgNotify'
  }
]

// 基础设置 form
export const baseSetschemas: FormSchema[] = [
  {
    field: 'nickname',
    component: 'Input',
    label: t('profile.user.nickname'),
    colProps: { span: 18 }
  },
  {
    field: 'mobile',
    component: 'Input',
    label: t('profile.user.mobile'),
    colProps: { span: 18 }
  },
  {
    field: 'email',
    component: 'Input',
    label: t('profile.user.email'),
    colProps: { span: 18 }
  },
  {
    field: 'sex',
    component: 'RadioGroup',
    componentProps: {
      options: [
        { label: 'male', value: 1 },
        { label: '女', value: 2 }
      ]
    },
    label: t('profile.user.sex'),
    colProps: { span: 18 }
  }
]

// 安全设置 list
export const secureSettingList: ListItem[] = [
  {
    key: '1',
    title: 'account password',
    description: 'Current password strength: strong',
    extra: 'Revise'
  },
  {
    key: '2',
    title: 'Confine mobile phone',
    description: 'Mobile phone has been bound :: 138****8293',
    extra: 'Revise'
  },
  {
    key: '3',
    title: 'Security Question',
    description: 'If there is no security problem, the secret insurance problem can effectively protect account security',
    extra: '修改'
  },
  {
    key: '4',
    title: 'Backup email',
    description: 'The mailbox has been bound :: ANT***sign.com',
    extra: 'Revise'
  },
  {
    key: '5',
    title: 'MFA equipment',
    description: 'Unbound Equipment, after binding, you can make a second confirmation secondary confirmation',
    extra: 'Revise'
  }
]

// 账号绑定 list
export const accountBindList: ListItem[] = [
  {
    key: '20',
    title: 'Nail',
    description: 'Unbinded nail account',
    extra: 'Bind',
    avatar: 'ri:dingding-fill',
    color: '#2eabff'
  },
  {
    key: '30',
    title: 'Revise',
    description: 'Currently not bound companies WeChat',
    extra: 'Bind',
    avatar: 'ri:wechat-line',
    color: '#2eabff'
  }
]

// New news notification list
export const msgNotifyList: ListItem[] = [
  {
    key: '1',
    title: 'account password',
    description: 'The news of other users will notify the in -site letter in the form of a letter'
  },
  {
    key: '2',
    title: 'system information',
    description: 'The system message will be notified in the form of letter in the station'
  },
  {
    key: '3',
    title: 'Upcoming Tasks',
    description: 'The task to be handled will be notified in the form of the letter in the station'
  }
]

export const passwordSchema: FormSchema[] = [
  {
    field: 'oldPassword',
    label: 'Current Password',
    component: 'InputPassword',
    required: true
  },
  {
    field: 'newPassword',
    label: 'New Password',
    component: 'StrengthMeter',
    componentProps: {
      placeholder: 'New Password'
    },
    rules: [
      {
        required: true,
        message: 'Please enter a new password'
      }
    ]
  },
  {
    field: 'confirmPassword',
    label: 'Confirm Password',
    component: 'InputPassword',

    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject('password can not be blank')
            }
            if (value !== values.newPassword) {
              return Promise.reject('The passwords in two inputs are inconsistent!')
            }
            return Promise.resolve()
          }
        }
      ]
    }
  }
]
