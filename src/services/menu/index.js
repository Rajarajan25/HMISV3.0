export default async function getMenuData() {
  return [
    {
      category: true,
      title: 'Dashboards',
    },
    {
      title: 'Dashboards',
      key: 'dashboards',
      icon: 'fe fe-home',
      // roles: ['admin'], // set user roles with access to this route
      count: 4,
      children: [
        {
          title: 'Staff',
          key: 'formExamples',
          icon: 'fe fe-menu',
          url: '/advanced/form-examples',
        },
        {
          title: 'Dashboard Beta',
          key: 'dashboardBeta',
          url: '/dashboard/beta',
        },
        {
          title: 'Dashboard Gamma',
          key: 'dashboardGamma',
          url: '/dashboard/gamma',
        },
        {
          title: 'Crypto Terminal',
          key: 'dashboardCrypto',
          url: '/dashboard/crypto',
        },
      ],
    },
    
    
    {
      title: 'Nested Items',
      key: 'nestedItem1',
      icon: 'fe fe-layers',
      disabled: true,
      children: [
        {
          title: 'Nested Item 1-1',
          key: 'nestedItem1-1',
          children: [
            {
              title: 'Nested Item 1-1-1',
              key: 'nestedItem1-1-1',
            },
            {
              title: 'Nested Items 1-1-2',
              key: 'nestedItem1-1-2',
              disabled: true,
            },
          ],
        },
        {
          title: 'Nested Items 1-2',
          key: 'nestedItem1-2',
        },
      ],
    },
  
  ]
}
