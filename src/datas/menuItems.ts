import { MenuItem } from "@/@types/menuItem";

export const menuItems: MenuItem[] = [
  {
    nom:"Types de massage", 
    path: 'types-massage',
    dropdown: [
      {
        nom:"Massage bébé", 
        path: 'massage-bebe',
      },
      {
        nom:"Massage à la bougie", 
        path: 'massage-bougie',
      },
      {
        nom:"Massage bambou", 
        path: 'massage-bambou',
      },
      {
        nom:"Soin visage", 
        path: 'soin-visage',
      },
      {
        nom:"Massage crânien", 
        path: 'massage-crane',
      },
      {
        nom:"Réflexologie", 
        path: 'reflexologie',
      }
    ]
  },
  {
    nom:"Yoga", 
    path: 'yoga'
  },
  {
    nom:"Ils me font confiance", 
    path: 'temoignages'
  },
  {
    nom:"Tarifs", 
    path: 'tarifs'
  },
  {
    nom:"Infos", 
    path: 'infospratiques'
  },
]