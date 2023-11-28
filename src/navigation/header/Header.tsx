import {SafeAreaView, StyleSheet, View} from 'react-native';
import Aloha from '../../assets/svg/Aloha.svg';
import * as React from 'react';

const styles = StyleSheet.create({
  headerContainer: {backgroundColor: '#FFFFFF'},
  headerLogoContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function LogoHeader() {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerLogoContainer}>
        <Aloha width={94} height={35} />
      </View>
    </SafeAreaView>
  );
}

export default LogoHeader;
