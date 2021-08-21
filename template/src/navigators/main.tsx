import React from 'react'
import {Platform} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Box, Text, Button} from 'components'
import {useNavigation} from 'shared/navigation'
import MainScreen from 'screens/main'
import ProfileScreen from 'screens/profile'

const {Navigator, Screen} = createBottomTabNavigator()
const EmptyComponent = () => null

export function MainNavigator() {
  const navigation = useNavigation()
  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({android: {height: 58}}),
      }}
    >
      <Screen
        name='main'
        component={MainScreen}
        options={{
          tabBarIcon: ({focused}) => <Text>{focused ? '🏠' : '🏡'}</Text>,
        }}
      />
      <Screen
        name='create'
        component={EmptyComponent}
        options={{
          tabBarButton: () => (
            <Box justifyContent='center'>
              <Button
                label=''
                height={40}
                width={40}
                borderRadius={20}
                onPress={() => navigation.navigate('login-stack')}
              />
            </Box>
          ),
        }}
      />
      <Screen
        name='profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => <Text>{focused ? '👨' : '👶'}</Text>,
        }}
      />
    </Navigator>
  )
}
