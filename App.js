import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {

  const [text, setText] = useState('');

  const buttonPressed = () => {
    Alert.alert("You answered: " + text);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 200, height: 300 }}
          source={require("./assets/images/img1.jpg")}
          // Photo by Eduardo Gorghetto (https://www.pexels.com/fi-fi/kuva/elain-sopo-kissanpentu-suloinen-14834011/) 
        />
      </View>
      <View>
        <Text style={{ fontSize: 18, paddingTop: 10 }}>How are you?</Text>
      </View>
      <View style={{ padding: 10 }}>
        <TextInput 
          style={{ width: 200, borderColor: "black", borderWidth: 1 }}
          onChangeText={text => setText(text)}
          value={text}
        />
      </View>
      <Button onPress={buttonPressed} title="Answer" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
