import React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Header from '../../../components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header
          title="Find All You Need"
          imageSource={require('../../../assets/tabs/header/search.png')}
          imageHeight={24}
          imageWidth={24}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
