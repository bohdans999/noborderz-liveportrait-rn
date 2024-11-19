import PickImageBtn from '@/components/PickImageBtn';
import { CameraRecording } from '@/components/RecordingCamera';
import RecordVideoBtn from '@/components/RecordVideoBtn';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [recording, setRecording] = useState<CameraRecording>(undefined);

  return (
    <View style={styles.container}>
      <PickImageBtn setImage={setImage} />

      <RecordVideoBtn setRecording={setRecording} />

      <Pressable
        style={styles.button}
        onPress={() => {
          console.log(recording);
        }}
      >
        <Text>Send data</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#121212',

    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },

  button: {
    backgroundColor: 'white',
    padding: 8,

    borderRadius: 16
  }
});
