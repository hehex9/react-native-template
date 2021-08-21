import React from 'react'
import {Platform} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useNavigation} from 'shared/navigation'
import {useTheme} from 'shared/theme'
import SmsVerificationScreen from 'screens/login/sms-verification'
import RegisterScreen from 'screens/login/register'
import LoginScreen from 'screens/login'
import {Text} from 'components'

const {Navigator, Screen} = createNativeStackNavigator()

export function LoginNavigator() {
  const appTheme = useTheme()
  const navigation = useNavigation()

  return (
    <Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#f2f2f2'},
        headerTitle: '登录注册',
        headerBackTitle: '',
        headerShadowVisible: false,
        headerTintColor: appTheme.colors.text,
      }}
    >
      <Screen
        name='login'
        component={LoginScreen}
        options={Platform.select({
          ios: {
            headerLeft: () => (
              <Text onPress={() => navigation.goBack()}>返回</Text>
            ),
          },
        })}
      />
      <Screen name='sms-verification' component={SmsVerificationScreen} />
      <Screen name='register' component={RegisterScreen} />
    </Navigator>
  )
}
