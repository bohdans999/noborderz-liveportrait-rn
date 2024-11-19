import PickImageBtn from '@/components/PickImageBtn';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  console.log('🔔🔔🔔 ~ file: index.tsx:7 ~ HomeScreen ~ image => ', image);

  return (
    <View style={styles.container}>
      <PickImageBtn setImage={setImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#121212',

    alignItems: 'center',
    justifyContent: 'center'
  }
});
