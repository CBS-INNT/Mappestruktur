import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStyles from '../styles/HomeStyles';
import Header from '../components/Header';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={HomeStyles.container}>
      <Header title="Profile" />
      <View style={HomeStyles.content}>
        <Text style={HomeStyles.text}>Her er din profilside 🧑‍💻</Text>
      </View>
    </SafeAreaView>
  );
}
