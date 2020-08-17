import React from 'react';
import Topper from './components/Topper';
import Match from './components/Match';
import Scroll from './components/Scroll';
import Find from './components/Find';
import Container from './components/Container';
import Bottom from './components/Bottom';
import Footer from './components/Footer';
import {View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.order}>
        <Topper />
        <Match />
        <Scroll />
        <Find />
        <Container />
        <Bottom />
      </View>
      <View style={styles.order1}>
        <Footer />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  order: {
    marginHorizontal: 10,
  },
  order1: {
    position: 'relative',
    marginTop: 10,
  },
});
