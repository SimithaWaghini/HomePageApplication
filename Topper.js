import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Topper() {
  return (
    <View style={styles.top}>
      <View style={styles.top1}>
        <Text style={styles.color}>209</Text>
        <Text style={styles.text}>Viewed you</Text>
      </View>
      <View style={styles.top2}>
        <Text style={styles.color}>20028</Text>
        <Text style={styles.text}>Matches for you</Text>
      </View>
      <View style={styles.top2}>
        <Text style={styles.color}>134</Text>
        <Text style={styles.text}>Interest received</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  top1: {
    borderRadius: 10,
    marginTop: 10,
    height: 100,
    width: 100,
    padding: 10,
    backgroundColor: 'white',
    elevation: 7,
  },
  color: {
    color: 'darkmagenta',
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
  },
  top2: {
    borderRadius: 10,
    marginTop: 10,
    height: 100,
    width: 120,
    padding: 10,
    backgroundColor: 'white',
    elevation: 7,
  },
});
