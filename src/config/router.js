import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';

import MyProfile from '../scenes/MyProfile';
import newUsers from '../scenes/NewUsers';
import Search from '../scenes/Search';
import UserProfile from '../scenes/UserProfile';
import SearchResult from '../scenes/SearchResult';
import Settings from '../scenes/Settings';

import Login from '../scenes/Login';
import Register from '../scenes/Register';


export const Tabs = createBottomTabNavigator({
  newUsers: {
    screen: createStackNavigator({
      newUsers: {
        screen: newUsers,
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
    screen: createStackNavigator({
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
          headerTitle: `${navigation.state.params.user.instagram}`,
        }),
      }
    }),
    navigationOptions: {
      tabBarLabel: 'Rechercher'
    }
  },
  MyProfile: {
    screen: createStackNavigator({
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

export const SingUp = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
})
