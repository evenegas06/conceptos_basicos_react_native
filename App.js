import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Saludo from './src/components/Saludo';
import LoginForm from './src/components/LoginForm';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';

export default function App() {
  return (
    <NavigationContainer>

      {/* <View style={styles.container}>
        <Text>Así es esto de ser un Desarrollador Movil</Text>
        <Saludo name='Eduardo' />
        <Saludo name='Alejandro' />
        <StatusBar style="auto" />
      </View> */}

      {/* <NavigationStack /> */}
      <NavigationTab />

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
