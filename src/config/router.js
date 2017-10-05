import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MyProfile from '../scenes/MyProfile';
import NewUser from '../scenes/NewUser';
import Search from '../scenes/Search';
import UserProfile from '../scenes/UserProfile';
import SearchResult from '../scenes/SearchResult';

export const Tabs = TabNavigator({

  NewUser: {
    screen: StackNavigator({
      NewUser: {
        screen: NewUser,
        navigationOptions: {
          headerTitle: 'Nouveauté'
        }
      },
      UserProfile: {
        screen: UserProfile,
        navigationOptions: ({navigation}) => ({
          headerTitle: `${navigation.state.params.user.name.first} ${navigation.state.params.user.name.last}`,
        }),
      }
    }),
    navigationOptions: {
      tabBarLabel: 'Nouveauté',
    }
  },

  Search: {
    screen: StackNavigator({
      Search: {
        screen: Search,
        navigationOptions: {
          headerTitle: 'Search'
        }
      },
      SearchResult: {
        screen: SearchResult,
        navigationOptions: {
          headerTitle: 'Search result'
        }
      },
      UserProfile: {
        screen: UserProfile,
        navigationOptions: ({navigation}) => ({
          headerTitle: `${navigation.state.params.user.name.first} ${navigation.state.params.user.name.last}`,
        }),
      }
    }),
    navigationOptions: {
      tabBarLabel: 'Rechercher'
    }
  },
  MyProfile: {
    screen: StackNavigator({
      MyProfile: {
        screen: MyProfile,
        navigationOptions: {
          headerTitle: 'Profil'
        }
      }
    }),
    navigationOptions: {
      tabBarLabel: 'Profil'
    }
  },
}, {
  tabBarPosition: 'bottom',
});
