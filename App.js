import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Button onPress={()=> {
          <Image
          style={{width: 350, height: 450}}
          source = {require('./assets/GOD.jpg')}
          />
      }}
      title="Fish"
      >
        </Button>  

      {/* <Image
        style={{width: 350, height: 450}}
        source = {require('./assets/GOD.jpg')}
       /> */}
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
