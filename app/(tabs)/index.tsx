import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#121212',

    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: 'white',
    textAlign: 'center'
  }
});
