import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, IonIcons} from '@expo/vector-icons'
// import Onboarding from 'react-native-onboarding-swiper'

function OnBoard({navigation}) {

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontWeight: 'bold',
        }}>
          <Text style={{color: '#65582A',}}>Welcome</Text> To Dictionary!</Text>

      <Text
      style={{
        color: '#9F8C50',
        fontSize: '16px',
        fontFamily: 'Poppins',
      }}>
        Nama Aplikasi</Text>
      <StatusBar style="auto" />
      
      <View style={styles.box}>
        <View style={styles.topshadow}>
          <View style={styles.bottomshadow}>
            <View style={styles.inner}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Beranda")}>
                  Get Started
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC379',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    marginTop: '30px'
  },

  inner: {
    backgroundColor: '#FFC379',
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Poppins',
    borderRadius: '15px',
    width: '165px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '39px',
  },

  topshadow: {
    backgroundColor: '#FFC379',
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Poppins',
    borderRadius: '15px',
    width: '165px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '39px',
      shadowOffset: {
        width: -4,
        height: -4
      },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      shadowColor: '#FBFFFF'
    },

    bottomshadow: {
      backgroundColor: '#FFC379',
      color: 'white',
      fontSize: '18px',
      fontFamily: 'Poppins',
      borderRadius: '15px',
      width: '165px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '39px',
        shadowOffset: {
          width: 4,
          height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowColor: '#9B9B9B'
      },
});

export default OnBoard;
