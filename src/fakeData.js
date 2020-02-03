export const category = [
  {
    id: '1',
    order: '1',
    name: 'communication',
    isActive: true
  },
  {
    id: '2',
    order: '2',
    name: 'Development',
    isActive: false
  },
  {
    id: '3',
    order: '3',
    name: 'HR',
    isActive: false
  }
]
export const application = [
  {
    id: '1',
    type: 'ARP',
    logo: require('@/assets/images/brand.png'),
    app: 'brandcenter',
    name: 'communication & marketing',
    url: 'www.weshare.us',
    tags: [
      {
        id: 'marketing',
        label: 'marketing'
      },
      {
        id: 'survey',
        label: 'survey'
      }
    ],
    isActive: true
  },
  {
    id: '2',
    type: 'external',
    logo: require('@/assets/images/brand.png'),
    app: 'survey',
    name: 'business',
    url: 'www.weshare.us',
    tags: [
      {
        id: 'Kpi',
        label: 'Kpi'
      },
      {
        id: 'Goal',
        label: 'Goal'
      }
    ],
    isActive: false
  }
]
