import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  function imageLoaded() {
    alert('Image chargée');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bonjour les DI ! </Text>
      <Text style={styles.p }>Testons le React-Native</Text>
      <StatusBar style="auto" />
      <Image style={styles.image}
      source = {{
      uri: "https://picsum.photos/536/354"}}
      accessible={true}
      accessibilityLabel={'An image from Lorem Picsum'}
      onLoad={imageLoaded}
      />
      <Image style={styles.appicon}
      source={require('./assets/icon.png')}
      />
    <StatusBar style='light'/>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  image:{
    width:300,
    height:200,
    marginVertical: 10
  },
  appicon:{
    width:100,
    height:100,
    marginVertical: 10
  },

title:{
  color:'white',
  fontSize: 22
},

  p:{
    color:'white',
    fontSize: 16,
    marginTop: 5
  }
});
