import 'react-native-gesture-handler'

import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ThemeProvider} from '@shopify/restyle'
import {theme} from 'shared/theme'
import {Prompt} from 'components/prompt'
import {usePrompt} from 'shared/hooks'
import {Stack} from 'shared/navigation'
import {LoginNavigator} from './navigators/login'
import {MainNavigator} from './navigators/main'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          translucent={true}
          barStyle='dark-content'
          backgroundColor='transparent'
        />

        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='main-stack'
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name='main-stack' component={MainNavigator} />
            <Stack.Screen
              name='login-stack'
              component={LoginNavigator}
              options={{
                headerShown: false,
                presentation: 'containedModal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>

        <Prompt ref={usePrompt().ref} />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
