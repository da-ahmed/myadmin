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
        state: 'account',
        name: 'Comptes',
        type: 'sub',
        icon: 'ti-user',
        children: [
          {
            state: 'list',
            name: 'liste des comptes valide'
          },{
            state: 'add',
            name: 'Ajouter un véhicule'
          }, {
            state: 'invalid',
            name: 'valider un comptes'
          }

        ]

      },{
        state: 'vehicle',
        name: 'vehicule',
        type: 'sub',
        icon: 'ti-car',
        children: [
          {
            state: 'list',
            name: 'liste des vehicules'
          },{
            state: 'add',
            name: 'Ajouter un véhicule'
          }

        ]
      },{
        state: 'destination',
        name: 'destinations',
        type: 'sub',
        icon: 'ti-control-shuffle',
        children: [
          {
            state: 'list',
            name: 'ajouter des destination'
          },{
            state: 'add',
            name: 'Ajouter une destination'
          },

        ]
      },{
        state: 'transaction',
        name: 'transaction',
        type: 'link',
        icon: 'ti-control-shuffle'
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
