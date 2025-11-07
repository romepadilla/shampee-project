import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo :>> ', userInfo);
    } catch (error) {
      console.error('Google Sign-In error:', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // cancel flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available
      } else {
        //some other error
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleGoogleLogin}
      style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/gmailVector.png')}
      />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
