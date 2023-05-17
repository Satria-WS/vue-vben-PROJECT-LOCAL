interface GroupItem {
  title: string
  icon: string
  color: string
  desc: string
  date: string
  group: string
}

interface NavItem {
  title: string
  icon: string
  color: string
}

interface DynamicInfoItem {
  avatar: string
  name: string
  date: string
  desc: string
}

export const navItems: NavItem[] = [
  {
    title: 'front page',
    icon: 'ion:home-outline',
    color: '#1fdaca'
  },
  {
    title: 'dash board',
    icon: 'ion:grid-outline',
    color: '#bf0c2c'
  },
  {
    title: 'Component',
    icon: 'ion:layers-outline',
    color: '#e18525'
  },
  {
    title: 'System M',
    icon: 'ion:settings-outline',
    color: '#3fb27f'
  },
  {
    title: 'Authority M',
    icon: 'ion:key-outline',
    color: '#4daf1bc9'
  },
  {
    title: 'Chart',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff'
  }
]

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'dynamic-avatar-1|svg',
    name: 'William',
    date: 'just',
    desc: `The project was created in the <a> open source group </a> <a>Vue</a>`
  },
  {
    avatar: 'dynamic-avatar-2|svg',
    name: 'Awen',
    date: '1 hour ago',
    desc: `Follow <a> William</a> `
  },
  {
    avatar: 'dynamic-avatar-3|svg',
    name: 'Chris',
    date: '1 day ago',
    desc: `Published <a> Personal News</a> `
  },
  {
    avatar: 'dynamic-avatar-4|svg',
    name: 'XingyuV',
    date: '2 days ago',
    desc: `Published an article <a> How to write a VITE plugin</a> `
  },
  {
    avatar: 'dynamic-avatar-5|svg',
    name: 'Pitter',
    date: '3 days ago',
    desc: `The question of <a> Jack </a> <a> How to optimize the project?</a>`
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: 'Jack',
    date: '1 week ago',
    desc: `Close the question <a> How to run the project</a> `
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: 'William',
    date: '1 week ago',
    desc: `Published <a> Personal News </a> `
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: 'William',
    date: '2021-04-01 20:00',
    desc: `Push code to <a> github </a>`
  }
]

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'carbon:logo-github',
    color: '',
    desc: 'Do not wait for opportunities, and to create opportunities.',
    group: 'Open source group',
    date: '2021-04-01'
  },
  {
    title: 'Vue',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: 'You decide you in the future.',
    group: 'Algorithm',
    date: '2021-04-01'
  },
  {
    title: 'Html5',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: 'Nothing can be more important than hard work.',
    group: 'Touching fish at work',
    date: '2021-04-01'
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: 'Passion and desire can break through all difficulties.',
    group: 'UI',
    date: '2021-04-01'
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: 'A healthy body is the cornerstone of the goal.',
    group: 'Technical cow',
    date: '2021-04-01'
  },
  {
    title: 'Js',
    icon: 'ion:logo-javascript',
    color: '#EBD94E',
    desc: 'The road came out, not imagined.',
    group: 'Architecture',
    date: '2021-04-01'
  }
]
