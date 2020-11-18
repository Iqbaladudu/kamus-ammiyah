import React, { useEffect } from "react"
import { View, StyleSheet, TextInput} from "react-native"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import OnBoard from './screens/OnBoardingScreen'
import Menu from './screens/Home'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AppStack = createStackNavigator();

function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(false)

  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if (value == null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true')
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   })
  // }, [])
  
  if (isFirstLaunch == null) {
    return null;
  } else if ( isFirstLaunch == true) {
    return (
      <NavigationContainer>
      <AppStack.Navigator
      headerMode="none">
        <AppStack.Screen name='OnBoarding' component={OnBoard} />
        <AppStack.Screen name='Beranda' component={Menu} />
      </AppStack.Navigator>
    </NavigationContainer>
    );
  } else {
    return (
      <Menu />
    )
  }
}

export default App;