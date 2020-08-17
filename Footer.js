import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import project1f from '../project1f.png';
import project1g from '../project1g.png';
import project1h from '../project1h.png';
import project1i from '../project1i.png';
export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.edgecolor}>
        <View>
          <Image source={project1f} style={styles.image} />
        </View>
        <View>
          <Text style={styles.color}>Home</Text>
        </View>
      </View>

      <View style={styles.edge}>
        <View>
          <Image source={project1g} style={styles.image} />
        </View>
        <View>
          <Text>Inbox</Text>
        </View>
      </View>

      <View style={styles.edge}>
        <View>
          <Image source={project1h} style={styles.image} />
        </View>
        <View>
          <Text>Search</Text>
        </View>
      </View>

      <View style={styles.edge}>
        <View>
          <Image source={project1i} style={styles.image} />
        </View>
        <View>
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: 'lightgray',
    borderWidth: 1,
  },
  image: {
    height: 25,
    width: 25,
  },
  edgecolor: {
    flexDirection: 'column',
    color: 'darkmagenta',
    alignItems:'center',
    marginTop: 10,
  },
  color: {
    color: 'darkmagenta',
  },

  edge: {
    flexDirection: 'column',
    marginTop: 10,
    alignItems:'center',
  },
});
