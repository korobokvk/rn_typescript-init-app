import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

type HelloScreenProps = {
  route: {
    params: {
      title: string;
    };
  };
};

const HelloScreen = ({route}: HelloScreenProps) => {
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>{route.params.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HelloScreen;
