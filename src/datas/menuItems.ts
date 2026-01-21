import { MenuItem } from "@/@types/menuItem";

export const menuItems: MenuItem[] = [
  {
    nom:"Prestations", 
    path: 'prestations',
    dropdown: [
      {
        nom:"Massage californien", 
        path: 'massage-californien',
      },
      {
        nom:"Massage personnalisé", 
        path: 'massage-personnalise',
      },
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
      // {
      //   nom:"Kobido", 
      //   path: 'kobido',
      // },
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
    nom:"Photos", 
    path: 'photos'
  },
  {
    nom:"Carde-cadeau", 
    path: 'carte-cadeau'
  },
  {
    nom:"Infos & contact", 
    path: 'infospratiques'
  },
]