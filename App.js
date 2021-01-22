import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableNativeFeedback } from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text Pressed!");
  
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native</Text>
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
      <Image
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300" }}/>
      </TouchableNativeFeedback>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
