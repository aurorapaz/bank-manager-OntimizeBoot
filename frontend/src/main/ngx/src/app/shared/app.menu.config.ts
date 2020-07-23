import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'candidate', name: 'CANDIDATE', icon: 'people', route: '/main/candidate' },
  { id: 'offer', name: 'OFFER', icon: 'people', route: '/main/offer' },
  { id: 'user', name: 'USER', icon: 'people', route: '/main/user' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
