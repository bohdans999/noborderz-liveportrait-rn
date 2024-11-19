import RecordingCamera, { CameraRecording } from '@/components/RecordingCamera';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface RecordVideoBtnProps {
  setRecording: Dispatch<SetStateAction<CameraRecording>>;
}

const RecordVideoBtn: FC<RecordVideoBtnProps> = ({ setRecording }) => {
  const [isShowingCam, setIsShowingCam] = useState(false);

  return (
    <>
      <Pressable style={styles.button} onPress={() => setIsShowingCam(true)}>
        <Text>Record video</Text>
      </Pressable>

      {isShowingCam && (
        <RecordingCamera setIsShowingCam={setIsShowingCam} setRecording={setRecording} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 8,

    borderRadius: 16
  }
});

export default RecordVideoBtn;
