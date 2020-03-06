export const application = [
  {
    id: '1',
    type: 'ARP',
    logo: require('@/assets/images/brand.png'),
    app: 'brandcenter',
    name: 'communication & marketing',
    url: 'www.weshare.news',
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
    url: 'www.google.com',
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
