import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import project1j from '../project1j.png';

export default function Bottom() {
  return (
    <View style={styles.bottom}>
      <View style={styles.myclass}>
        <View>
          <Text style={styles.demo1}>Who Viewed you.</Text>
        </View>
        <View style={styles.myclass1}>
          <Image source={project1j} style={styles.image} />

          <View>
            <Text style={styles.text}>Dskfs asdsdj</Text>
            <Text style={styles.font}>
              25 yrs, Engineer{'\n'}kerala, Alappuzha
            </Text>
          </View>
        </View>
        <View style={styles.myclass1}>
          <Image source={project1j} style={styles.image} />

          <View>
            <Text style={styles.text}>Dskfs asdsdj</Text>
            <Text style={styles.font}>
              25 yrs, Engineer{'\n'}kerala, Alappuzha
            </Text>
          </View>
        </View>
        <View style={styles.myclass1}>
          <Image source={project1j} style={styles.image} />

          <View>
            <Text style={styles.text}>Dskfs asdsdj</Text>
            <Text style={styles.font}>
              25 yrs, Engineer{'\n'}kerala, Alappuzha
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.demo4}>View more</Text>
        </View>
      </View>

      <View style={styles.vr}></View>

      <View style={styles.content}>
        <View style={styles.context}>
          <View>
            <Text style={styles.demo2}>Last Contacted</Text>
          </View>
          <View>
            <Text style={styles.demo3}>View more</Text>
          </View>
        </View>
        <View style={styles.myclass1}>
          <Image source={project1j} style={styles.image} />
          <View>
            <Text style={styles.text}>Dskfs asdsdj</Text>
            <Text style={styles.font}>
              25 yrs, Engineer{'\n'}kerala, Alappuzha
            </Text>
          </View>
        </View>
        <View style={styles.round}>
          <View style={styles.circle}></View>
          <View style={styles.circle1}></View>
          <View style={styles.circle2}></View>
          <View style={styles.circle2}></View>
        </View>

        <View style={styles.flex}>
          <View>
            <Text style={styles.flex1}>Shortlisted me</Text>
          </View>
          <View>
            <Text style={styles.flex2}>View more</Text>
          </View>
        </View>

        <View style={styles.myclass1}>
          <Image source={project1j} style={styles.image} />
          <View>
            <Text style={styles.text}>Dskfs asdsdj</Text>
            <Text style={styles.font}>
              25 yrs, Engineer {'\n'}kerala, Alappuzha
            </Text>
          </View>
        </View>
        <View style={styles.round}>
          <View style={styles.circle}></View>
          <View style={styles.circle1}></View>
          <View style={styles.circle2}></View>
          <View style={styles.circle2}></View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
  },
  demo1: {
    fontSize: 15,
    marginTop: 10,
  },
  myclass: {
    flexDirection: 'column',
  },
  myclass1: {
    flexDirection: 'row',
  },
  text: {
    marginTop: 5,
    textAlign: 'left',
    fontSize: 17,
    fontWeight: 'bold',
  },
  font: {
    fontSize: 12,
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 2,
  },
  content: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  context: {
    fontSize: 20,
    flexDirection: 'row',
  },
  demo2: {
    marginTop: 10,
    fontSize: 15,
  },
  flex: {
    flexDirection: 'row',
  },
  flex1: {
    marginTop: 10,
    fontSize: 15,
  },
  flex2: {
    backgroundColor: 'darkmagenta',
    color: 'white',
    fontSize: 8,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 30,
    marginTop: 15,
    height: 11,
    width: 50, 
  },
  demo: {
    fontSize: 11,
    textAlign: 'left',
  },
  demo3: {
    backgroundColor: 'darkmagenta',
    color: 'white',
    fontSize: 8,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 30,
    marginTop: 15,
    height: 11,
    width: 50,
  },
  demo4: {
    backgroundColor: 'darkmagenta',
    color: 'white',
    fontSize: 8,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 100,
    height: 11,
    width: 50,
  },
  round: {
    flexDirection: 'row',
    marginLeft: 50,
    marginTop: 10,
  },
  circle: {
    backgroundColor: 'gray',
    borderRadius: 3.5,
    height: 7,
    width: 7,
  },
  circle1: {
    backgroundColor: 'white',
    height: 7,
    width: 7,
    borderColor: 'gray',
    borderRadius: 3.5,
    borderStyle: 'solid',
    marginLeft: 5,
    borderWidth: 1,
  },
  circle2: {
    backgroundColor: 'gray',
    borderRadius: 3.5,
    height: 7,
    width: 7,
    marginLeft: 5,
  },
  vr: {
    backgroundColor: 'black',
    width: 2,

    marginLeft: 20,
  },
});
