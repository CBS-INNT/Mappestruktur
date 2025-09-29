import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeStyles from '../styles/HomeStyles';
import Header from '../components/Header';
import Button from '../components/Button';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={HomeStyles.container}>
      <Header title="Home" />
      <View style={HomeStyles.content}>
        <Text style={HomeStyles.text}>Velkommen til den simple app 👋</Text>
        <Button
          label="Gå til profil"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </SafeAreaView>
  );
}
