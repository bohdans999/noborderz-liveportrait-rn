import * as ImagePicker from 'expo-image-picker';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface PickImageBtnProps {
  setImage: Dispatch<SetStateAction<string | null>>;
}

const PickImageBtn: FC<PickImageBtnProps> = ({ setImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Pressable style={styles.button} onPress={pickImage}>
      <Text>Select source image</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 8,

    borderRadius: 16
  }
});

export default PickImageBtn;
