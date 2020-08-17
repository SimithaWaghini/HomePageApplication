import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Match() {
  return (
    <View>
      <Text style={styles.text}>Matches for you</Text>
      <View style={styles.hr}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    backgroundColor: 'darkmagenta',
    width: 40,
    height: 3,
  },
});
