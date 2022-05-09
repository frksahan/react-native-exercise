import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{outputText}</Text>
      <Button style={styles.button} title="Change Text" onPress={() => setOutputText('Text Changed!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'red',
    paddingBottom: 10,
  },
  button: {
    marginTop: '30%',
  },
});
