  import React from 'react';
import { Text, StyleSheet, ImageBackground, Image } from 'react-native';
// Quando importamos o useNavigation ele nos retorna uma instancia de navegação
// Isso nos permite acessar todos os métodos referente a navegação( navigate, goBack)
import { useNavigation } from "@react-navigation/native";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function Sobre() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/fundoHome.jpg")}
      resizeMode="cover"
    >
      
      <Text style={styles.titulo}>Bem-vindo</Text>
      <Text style={styles.titulo}> ao </Text>
      <Text style={styles.titulo}>Meu App!</Text>
      <Image
      style={styles.logo}
      source={require("../assets/images/joia.jpg")} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  logo: {
    width: 194,
    height: 120,
    marginBottom: 30
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },

});

