import React from 'react';
import {ScrollView, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Signin = ({navigation}) => {
  const onBack = () => {
    navigation.goBack();
  };
  const onSignUp = () => {
    navigation.navigate('Signup');
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />

        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="********" />

        <Button style={styles.buttonSignin} title="Sign In" />
        <Seperator text="Or sign in with" />
        <GoogleLogin />

        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignUp} style={styles.footerLink}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
