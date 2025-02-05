import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

  const third_image = 'https://www.dexerto.com/cdn-image/wp-content/uploads/2021/08/30/pokemon-go-lugia-raid-guide.jpg?width=768&quality=60&format=auto';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Source: Local Image!</Text>
      <Image style={styles.image} source={require('./assets/lugia.png')}/>
      <Text style={styles.title}>Source: Third Image!</Text>
      <Image style={styles.image} source={{uri: third_image}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 250,
  }
});
