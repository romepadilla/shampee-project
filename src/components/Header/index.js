import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';

const Header = ({
  title,
  onPress,
  imageSource,
  imageHeight,
  imageWidth,
  position = 'left', // default to left
}) => {
  return (
    <View style={styles.container}>
      {position === 'left' && (
        <Pressable style={styles.iconLeft} onPress={onPress}>
          <Image
            source={imageSource}
            style={{width: imageWidth, height: imageHeight}}
          />
        </Pressable>
      )}

      <Text style={styles.title}>{title}</Text>

      {position === 'right' && (
        <Pressable style={styles.iconRight} onPress={onPress}>
          <Image
            source={imageSource}
            style={{width: imageWidth, height: imageHeight}}
          />
        </Pressable>
      )}
    </View>
  );
};

export default React.memo(Header);
