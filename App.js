import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const gravity = 9.81

  const doSomeMaths = (x, y) => {
    const addition = x + y
    const multiplication = x * y

    const remainder = multiplication%addition

    if(multiplication < 13){
      if(addition > 4){
        if(remainder > 2){
          return "oh no! Not again"
        }
      }
    } else if( multiplication < gravity){
      return "those were some low numbers"
    }

    return `${x} + ${y} = ${addition} and ${x} x ${y} = ${multiplication}`
  }

  const onButtonPress = () => {
    const math = doSomeMaths(4, 2)
    console.log(math)
  }

  const addOne = () => {
    setCount((prev) => prev+1)
  }
  return (
    <View style={styles.container}>
      <Button onPress={onButtonPress} title='Click Me' />
      <Button onPress={addOne} title='Add' />
      <Text>{count}</Text>
      <Text>Open up App.js to start working on your app!</Text>
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
