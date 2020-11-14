import {
  SettingsProfile,
  SettingsCompany,
  SettingsAddresses,
  SettingsLocation,
  SettingsBusiness,
  SettingsApps,
  SettingsTeam,
  SettingsBilling,
  SettingsSecurity,
  SettingsNotifications,
} from '../../assets/icons';

export const SettingsItems = [
  {
    id: 'profile',
    name: 'Profile',
    pathname: '/settings/profile',
    Icon: SettingsProfile,
  },
  {
    id: 'company',
    name: 'Company',
    pathname: '/settings/company',
    Icon: SettingsCompany,
  },
  {
    id: 'addresses',
    name: 'Addresses',
    pathname: '/',
    Icon: SettingsAddresses,
  },
  {
    id: 'location',
    name: 'Locations & Storefronts',
    pathname: '/',
    Icon: SettingsLocation,
  },
  {
    id: 'business',
    name: 'Business Verification',
    pathname: '/',
    isNew: true,
    Icon: SettingsBusiness,
  },
  {
    id: 'apps',
    name: 'Apps',
    pathname: '',
    Icon: SettingsApps,
  },
  {
    id: 'team',
    name: 'Team',
    pathname: '',
    Icon: SettingsTeam,
  },
  {
    id: 'billing',
    name: 'billing & Subscriptions',
    pathname: '',
    Icon: SettingsBilling,
  },
  {
    id: 'no',
    name: 'Notifications',
    pathname: '',
    Icon: SettingsNotifications,
  },
  {
    id: 'security',
    name: 'Security',
    pathname: '',
    Icon: SettingsSecurity,
  },
];

export const AllSocialAccounts = [
  {
    icon: 'twitter',
    isOpened: true,
    label: 'Twitter',
    url: '',
    value: 'twitter',
  },
  {
    icon: 'facebook',
    isOpened: false,
    label: 'Facebook',
    url: '',
    value: 'facebook',
  },
  {
    icon: 'linkedin',
    isOpened: false,
    label: 'LinkedIn',
    url: '',
    value: 'linkedin',
  },
  {
    icon: 'instagram',
    isOpened: false,
    label: 'Instagram',
    url: '',
    value: 'instagram',
  },
  {
    icon: 'youtube-play',
    isOpened: false,
    label: 'YouTube',
    url: '',
    value: 'youtube',
  },
];

export const LanguageSelectData = [
  {
    label: 'English',
    value: 'english',
  },
  {
    label: 'French',
    value: 'french',
  },
  {
    label: 'German',
    value: 'german',
  },
];

export const CurrencySelectData = [
  {
    label: 'USD',
    value: 'usd',
  },
  {
    label: 'GBP',
    value: 'gbp',
  },
  {
    label: 'EUR',
    value: 'eur',
  },
];

export const BusinessEntityTypeSelectData = [
  {
    label: 'Sole proprietorship',
    value: 'sole',
  },
  {
    label: 'Partnerships',
    value: 'partner',
  },
  {
    label: 'Corporation',
    value: 'corporation',
  },
  {
    label: 'S corporation',
    value: 'scorporation',
  },
  {
    label: 'Limited Liability Company (LLC)',
    value: 'llc',
  },
];

export const TaxIDTypeSelectData = [
  {
    label: 'EIN',
    value: 'ein',
  },
  {
    label: 'SSN',
    value: 'ssn',
  },
  {
    label: 'TIN',
    value: 'tin',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

export const AnnualRevenueSelectData = [
  {
    label: 'Less than $1M',
    value: 'revenue1',
  },
  {
    label: '$1M-5M',
    value: 'revenue2',
  },
  {
    label: '$5M-10M',
    value: 'revenue3',
  },
  {
    label: '$10M-50M',
    value: 'revenue4',
  },
  {
    label: '$50M-250M',
    value: 'revenue5',
  },
  {
    label: '$250M-1B',
    value: 'revenue6',
  },
  {
    label: '$1B-3B',
    value: 'revenue7',
  },
  {
    label: 'More than $3B',
    value: 'revenue8',
  },
];

export const AnnualMarketingBudgetSelectData = [
  {
    label: 'Less than 6% of annual revenue',
    value: 'marketing1',
  },
  {
    label: '6-12% of annual revenue',
    value: 'marketing2',
  },
  {
    label: '12-20% of annual revenue',
    value: 'marketing3',
  },
  {
    label: 'More than 20% of annual revenue',
    value: 'marketing4',
  },
];

export const EmployeesNumSelectData = [
  {
    label: '1',
    value: 'employee1',
  },
  {
    label: '2-9',
    value: 'employee2',
  },
  {
    label: '10-24',
    value: 'employee3',
  },
  {
    label: '25-99',
    value: 'employee4',
  },
  {
    label: '100-499',
    value: 'employee5',
  },
  {
    label: '500-999',
    value: 'employee6',
  },
  {
    label: '1,000-4,999',
    value: 'employee7',
  },
  {
    label: 'More than 5,000',
    value: 'employee8',
  },
];

export const HeadquartersSelectData = [
  {
    label: 'Corporate Office',
    value: 'corporate',
    groupBy: 'origin',
  },
  {
    label: 'Headquarters',
    value: 'headquarters',
    groupBy: 'origin',
  },
  {
    label: 'Home Office',
    value: 'home',
    groupBy: 'origin',
  },
];

export const OriginSelectData = [
  {
    label: 'Made in',
    value: 'made',
    groupBy: 'origin',
  },
  {
    label: 'Manufactured in',
    value: 'manufactured',
    groupBy: 'origin',
  },
  {
    label: 'Developed in',
    value: 'developed',
    groupBy: 'origin',
  },
  {
    label: 'Designed in',
    value: 'designed',
    groupBy: 'origin',
  },
];

export const TeamMemberSelectData = [
  {
    label: 'Ruth Eechaute',
    value: 'ruth_eechaute',
    groupBy: 'member',
  },
  {
    label: 'Howie Thompson',
    value: 'howie_thompson',
    groupBy: 'member',
  },
  {
    label: 'Jamie Jones',
    value: 'jamie_jones',
    groupBy: 'member',
  },
  {
    label: 'Jason Kuenkler',
    value: 'jason_kuenkler',
    groupBy: 'member',
  },
];

export const DesignationSelectData = [
  {
    label: 'CEO',
    value: 'ceo',
    groupBy: 'origin',
  },
  {
    label: 'Founder',
    value: 'founder',
    groupBy: 'origin',
  },
  {
    label: 'Account/Brand Owner',
    value: 'owner',
    groupBy: 'origin',
  },
  {
    label: 'Brand Manager',
    value: 'brand_manager',
    groupBy: 'origin',
  },
  {
    label: 'Primary Contact',
    value: 'primary_contact',
    groupBy: 'origin',
  },
];

export const CompanyOfficialsData = [
  {
    id: 'ruth_eechaute-ceo',
    member: {
      label: 'Ruth Eechaute',
      value: 'ruth_eechaute',
      groupBy: 'member',
    },
    designation: {
      label: 'CEO',
      value: 'ceo',
      groupBy: 'origin',
    },
  },
  {
    id: 'jamie_jones-primary_contact',
    member: {
      label: 'Jamie Jones',
      value: 'jamie_jones',
      groupBy: 'member',
    },
    designation: {
      label: 'Primary Contact',
      value: 'primary_contact',
      groupBy: 'origin',
    },
  },
];

export const IndustrySelectData = [
  {
    label: 'Animals & Pet Supplies',
    value: 'animal',
  },
  {
    label: 'Apparel & Accessorles',
    value: 'apparel',
  },
  {
    label: 'Arts & Entertainment',
    value: 'arts',
  },
  {
    label: 'Baby & Toddler',
    value: 'baby',
  },
  {
    label: 'Business & Industrial',
    value: 'business',
  },
  {
    label: 'Automotive',
    value: 'automotive',
  },
];

export const CategoriesSelectData = [
  {
    label: 'Motor Vehicles',
    value: 'motor_vehicles',
  },
  {
    label: 'Motor Vehicle Carpet & Upholstery',
    value: 'upholstery',
  },
  {
    label: 'Motor Vehicle Climate Control',
    value: 'climate_control',
  },
  {
    label: 'Motor Vehicle braking',
    value: 'braking',
  },
  {
    label: 'Parts and accessories',
    value: 'parts_accessories',
  },
];

export const ProductLinesSelectData = [
  {
    label: 'Pick-ups',
    value: 'pickups',
  },
  {
    label: 'Class-8 trucks',
    value: 'class8-trucks',
  },
  {
    label: 'Marine',
    value: 'marine',
  },
];

export const ServicesSelectData = [
  {
    label: 'Sales',
    value: 'sales',
  },
  {
    label: 'Installation',
    value: 'installation',
  },
  {
    label: 'Repair',
    value: 'repair',
  },
];
