import React, { useEffect } from "react"
import { View, StyleSheet, TextInput} from "react-native"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import OnBoard from './screens/OnBoardingScreen'
import Menu from './screens/Home'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import Beranda from "./components/Home"
// import SelamatDatang from "./components/Welcome"

// const Stack = createStackNavigator()

// const root = ( { navigation } ) => {
//     return (
//     <View style={Styles.body}>
//     <Text style={Styles.text}> Bismillah! Lagi dalam Pengerjaan!</Text>
//     <br />
//     <ActivityIndicator color={"white"} />
//     <br />
//     <Button
//     title='Buka'
//     color="#ff7f50"
//     onPress={navigation.navigate('Beranda')}
//     />
//     </View>
// )}

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

// const Styles = StyleSheet.create({
//   body: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: '#ff6348',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: '#fff',
//     fontSize: '20px'
//   },
//   text: {
//     color: '#fff'
//   }  
// })

export default App;