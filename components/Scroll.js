import React from 'react';
import project1a from '../project1a.png';
import project1j from '../project1j.png';
import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';
export default function Scroll() {
  return (
    <View style={styles.scroll}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.card1}>
          <Image source={project1a} style={styles.image} />
          <Text style={styles.text}>Bhsfjd ssffnd</Text>
          <Text style={styles.font}>Ezhava,25 yrs,Engineer</Text>
        </View>
        <View style={styles.card2}>
          <Image source={project1j} style={styles.image} />
          <Text style={styles.text}>Bhsfjd ssffnd</Text>
          <Text style={styles.font}>Ezhava,25 yrs,Engineer</Text>
        </View>
        <View style={styles.card2}>
          <Image source={project1j} style={styles.image} />
          <Text style={styles.text}>Bhsfjd ssffnd</Text>
          <Text style={styles.font}>Ezhava,25 yrs,Engineer</Text>
        </View>
        {/* <View style={styles.card2}>
          <Image source={project1j} style={styles.image} />
          <Text style={styles.text}>Bhsfjd ssffnd</Text>
          <Text> style={styles.font}Ezhava,25 yrs,Engineer</Text>
        </View>
        <View style={styles.card2}>
          <Image source={project1j} style={styles.image} />
          <Text style={styles.text}>Bhsfjd ssffnd</Text>
          <Text style={styles.font}>Ezhava,25 yrs,Engineer</Text>
        </View>    */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scroll: {
    marginTop: 10,
  },
  image: {
    height: 90,
    width: 90,
    marginTop: 5,
    alignSelf: 'center',
  },

  card1: {
    textAlign: 'center',
    borderRadius: 5,
    borderStyle: 'dotted',
    borderWidth: 1,
    height: 150,
  },
  card2: {
    textAlign: 'center',
    borderRadius: 5,
    borderStyle: 'dotted',
    height: 150,
    borderWidth: 1,
    marginLeft: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  font: {
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
