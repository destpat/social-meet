import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MyProfile from '../scenes/MyProfile';
import NewUser from '../scenes/NewUser';
import Search from '../scenes/Search';


export const Tabs = TabNavigator({
  NewUser: {
    screen: NewUser,
    navigationOptions: {
      tabBarLabel: 'Nouveauté'
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Rechercher'
    }
  },
  MyProfile: {
    screen: MyProfile,
    navigationOptions: {
      tabBarLabel: 'Profil'
    }
  }, 
}, {
  tabBarPosition: 'bottom',
});
