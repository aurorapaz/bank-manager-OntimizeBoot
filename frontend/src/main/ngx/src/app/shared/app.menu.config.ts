
import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  {id: 'views', name: 'VIEWS', icon: 'menu', opened: true,
  items: [
     {
        id: 'candidate',
        name: 'CANDIDATE',
        tooltip: 'HR'+"'"+'S CANDIDATES',
        route: '/main/candidate',
        icon: 'people'
      },
      {
        id: 'offer',
        name: 'OFFER',
        tooltip: 'HR'+"'"+'S OFFERS',
        route: '/main/offer',
        icon: 'text_snippet'
      },
      {
        id: 'user',
        name: 'USER',
        tooltip: 'HR'+"'"+'S USERS',
        route: '/main/user',
        icon: 'engineering'
      }
    
  ]},
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
