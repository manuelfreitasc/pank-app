import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Home } from './src/pages/home';


export default function App() {
  return (
    <Container >
      <Home />
      <StatusBar style="auto" />
    </Container>
  );
}


const Container = styled.View`
  flex: 1;
`;