import React from 'react';
import project1b from '../project1b.png';
import project1c from '../project1c.png';
import project1d from '../project1d.png';
import project1e from '../project1e.png';
import {View, Text, Image, StyleSheet} from 'react-native';
export default function Container() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.image}>
          <Image source={project1b} style={styles.image1} />
        </View>
        <View>
          <Text style={styles.text}>Profession</Text>
        </View>
      </View>

      <View style={styles.container2}>
        <View style={styles.image}>
          <Image source={project1c} style={styles.image1} />
        </View>
        <View>
          <Text style={styles.text}>Education</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.image}>
          <Image source={project1d} style={styles.image1} />
        </View>
        <View>
          <Text style={styles.text}>Location</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.image}>
          <Image source={project1e} style={styles.image1} />
        </View>
        <View>
          <Text style={styles.text}>Interests</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    width: 380,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 2,
  },
  image: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    alignItems: 'center',
    width: 50,
    height: 50,
    padding: 5,
  },
  image1: {
    width: 40,
    height: 40,
  },
});
