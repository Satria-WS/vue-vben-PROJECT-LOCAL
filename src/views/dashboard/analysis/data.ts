export interface GrowCardItem {
  icon: string
  title: string
  value: number
  total: number
  color: string
  action: string
}

export const growCardList: GrowCardItem[] = [
  {
    title: 'number of visits',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: 'moon'
  },
  {
    title: 'turnover',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: 'moon'
  },
  {
    title: 'Downloads',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: 'week'
  },
  {
    title: 'Turnover',
    icon: 'transaction|svg',
    value: 5000,
    total: 50000,
    color: 'purple',
    action: 'Year'
  }
]
