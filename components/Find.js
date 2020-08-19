import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Find() {
  return (
    <View>
      <Text style={styles.font}>Find Matches by</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  font: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
