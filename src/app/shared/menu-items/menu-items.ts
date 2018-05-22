import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}
;
export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Menu',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'account',
        name: 'Comptes',
        type: 'link',
        icon: 'ti-user'
      },{
        state: 'vehicle',
        name: 'vehicule',
        type: 'sub',
        icon: 'ti-car',
        children: [
          {
            state: 'add',
            name: 'Ajouter un véhicule'
          },
          {
            state: 'list',
            name: 'liste des vehicules'
          },

        ]
      },{
        state: 'transaction',
        name: 'transaction',
        type: 'link',
        icon: 'ti-control-shuffle'
      },{
        state: 'destination',
        name: 'destinations',
        type: 'sub',
        icon: 'ti-control-shuffle',
        children: [
          {
            state: 'add',
            name: 'Ajouter une destination'
          },
          {
            state: 'list',
            name: 'ajouter des destination'
          },

        ]
      },
      {
        state: 'search',
        name: 'recherches',
        type: 'link',
        icon: 'ti-search'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
