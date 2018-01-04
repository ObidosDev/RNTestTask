import { StackNavigator, DrawerNavigator } from 'react-navigation'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import LoginScreen from './screens/login'

import HomeScreen from './screens/home'
import StackoverflowScreen from './screens/stackoverflow'
import LogOutScreen from './screens/logout'

const MenuButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigate('DrawerToggle')
      }}
    >
      <Icon
        name="ios-menu"
        style={{ color: 'black', padding: 10, marginLeft: 10, fontSize: 20 }}
      />
    </TouchableOpacity>
  )
}

const MainNavigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    headerMode: 'screen',
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home'
    }
  },
  Stackoverflow: {
    screen: StackoverflowScreen,
    headerMode: 'screen',
    navigationOptions: {
      title: 'Stackoverflow',
      drawerLabel: 'Stackoverflow'
    }
  },
  LogOut: {
    screen: LogOutScreen,
    headerMode: 'screen',
    navigationOptions: {
      title: 'Log Out',
      drawerLabel: 'Log Out'
    }
  }
})

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    headerMode: 'none',
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: MainNavigator,
    navigationOptions: args => {
      return {
        headerLeft: <MenuButton navigate={args.navigation.navigate} />
      }
    }
  }
})

export default RootNavigator
