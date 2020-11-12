import Settings from '../../pages/settings'
import Profile from '../../pages/settings/Profile.js'
import Company from '../../pages/settings/Company'

const routes = [
  {
    redirect: true,
    from: '/',
    to: '/settings/profile',
    exact: true
  },
  {
    redirect: true,
    from: '/settings',
    to: '/settings/profile',
    exact: true
  },
  {
    path: '/settings/:type',
    component: Settings,
    routes: [
      {
        path: '/settings/profile',
        exact: true,
        component: Profile,
      },
      {
        path: '/settings/company',
        exact: true,
        component: Company,
      },
    ]
  }
];

export default routes;