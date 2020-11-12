import { SettingsProfile, SettingsCompany, SettingsAddresses, SettingsLocation, SettingsBusiness, SettingsApps, SettingsTeam, SettingsBilling, SettingsSecurity, SettingsNotifications } from '../../assets/icons'

export const SettingsItems = [
  {
    id: 'profile',
    name: 'Profile',
    pathname: '/settings/profile',
    Icon: SettingsProfile
  },
  {
    id: 'company',
    name: 'Company',
    pathname: '/settings/company',
    Icon: SettingsCompany
  },
  {
    id: 'addresses',
    name: 'Addresses',
    pathname: '/',
    Icon: SettingsAddresses
  },
  {
    id: 'location',
    name: 'Locations & Storefronts',
    pathname: '/',
    Icon: SettingsLocation
  },
  {
    id: 'business',
    name: 'Business Verification',
    pathname: '/',
    isNew: true,
    Icon: SettingsBusiness
  },
  {
    id: 'apps',
    name: 'Apps',
    pathname: '',
    Icon: SettingsApps
  },
  {
    id: 'team',
    name: 'Team',
    pathname: '',
    Icon: SettingsTeam
  },
  {
    id: 'billing',
    name: 'billing & Subscriptions',
    pathname: '',
    Icon: SettingsBilling
  },
  {
    id: 'no',
    name: 'Notifications',
    pathname: '',
    Icon: SettingsNotifications
  },
  {
    id: 'security',
    name: 'Security',
    pathname: '',
    Icon: SettingsSecurity
  }
]

export const LanguageSelectData = [
  {
    label: 'English',
    value: 'english'
  },
  {
    label: 'French',
    value: 'french'
  },
  {
    label: 'German',
    value: 'german'
  }
]

export const CurrencySelectData = [
  {
    label: 'USD',
    value: 'usd'
  },
  {
    label: 'GBP',
    value: 'gbp'
  },
  {
    label: 'EUR',
    value: 'eur'
  }
]
