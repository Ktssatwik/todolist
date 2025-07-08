// assets
import { IconUser, IconCrown, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconUser,
  IconCrown,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-user',
      title: 'User',
      type: 'item',
      url: '/user',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'util-crown',
      title: 'Admin',
      type: 'item',
      url: '/Admin',
      icon: icons.IconCrown,
      breadcrumbs: false
    }
    // ,
    // {
    //   id: 'util-shadow',
    //   title: 'Shadow',
    //   type: 'item',
    //   url: '/shadow',
    //   icon: icons.IconShadow,
    //   breadcrumbs: false
    // }
  ]
};

export default utilities;
