import React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Header from '../../../components/Header';

const Favorites = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header title="Favorites" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
