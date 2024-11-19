import {
  CameraType,
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions
} from 'expo-camera';
import { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type CameraRecording = { uri: string } | undefined;

interface RecordingCamera {
  setIsShowingCam: Dispatch<SetStateAction<boolean>>;
  setRecording: Dispatch<SetStateAction<CameraRecording>>;
}

const RecordingCamera: FC<RecordingCamera> = ({ setIsShowingCam, setRecording }) => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const [isRecording, setIsRecording] = useState(false);

  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted || !micPermission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>

        <Button
          onPress={() => {
            requestPermission();
            requestMicPermission();
          }}
          title='Grant permission'
        />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const startRecording = () => {
    cameraRef.current?.recordAsync().then(setRecording).catch(console.log);

    setIsRecording(true);
  };

  const stopRecording = () => {
    cameraRef.current?.stopRecording();
    setIsRecording(false);
    setIsShowingCam(false);
  };

  return (
    <View style={styles.container}>
      <CameraView mode='video' ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>

          <View style={styles.lowerButtons}>
            {isRecording ? (
              <TouchableOpacity style={styles.button} onPress={stopRecording}>
                <Text style={styles.text}>Stop recording</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={startRecording}>
                <Text style={styles.text}>Record</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1000,

    justifyContent: 'center',
    backgroundColor: '#121212'
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    margin: 48
  },
  lowerButtons: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default RecordingCamera;
