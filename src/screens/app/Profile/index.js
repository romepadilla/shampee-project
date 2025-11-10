import React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Header from '../../../components/Header';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header
          title="Profile"
          imageSource={require('../../../assets/tabs/header/logout.png')}
          imageHeight={24}
          imageWidth={24}
          position="right"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
