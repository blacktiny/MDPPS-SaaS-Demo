import Settings from '../../pages/settings'
import Profile from '../../pages/settings/Profile.js'
import Company from '../../pages/settings/Company'

const routes = [
  {
    path: '/',
    exact: true,
    component: Profile,
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