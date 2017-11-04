import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';

import MyProfile from '../scenes/MyProfile';
import NewUser from '../scenes/NewUser';
import Search from '../scenes/Search';
import UserProfile from '../scenes/UserProfile';
import SearchResult from '../scenes/SearchResult';
import Settings from '../scenes/Settings';

import Login from '../scenes/Login';
import SingUp from '../scenes/SingUp';


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
          headerTitle: `${navigation.state.params.user.snapchat}`,
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
        navigationOptions: ({navigation}) => ({
          headerTitle: 'Profil',
          headerRight: (
            <Icon
              name='settings'
              onPress={() => navigation.navigate('Settings')} />
          )
        })
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
          headerTitle: 'Settings',
        }
      }
    }),
    navigationOptions: {
      tabBarLabel: 'Profil'
    },
  },
}, {
  tabBarPosition: 'bottom',
});

export const Register = StackNavigator({
  Login: {
    screen: Login
  },
  SingUp: {
    screen: SingUp
  }
})
