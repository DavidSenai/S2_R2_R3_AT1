import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// IMPORT STYLES
import { styles } from "../styles/styles";

// Quando importamos o useNavigation ele nos retorna uma instancia de navegação
// Isso nos permite acessar todos os métodos referente a navegação( navigate, goBack)
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function LoginScreen() {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const navigation = useNavigation();

  function isLogin() {
    const emailSemEspacos = Email.replace(/\s+/g, "");
    const senhaSemEspacos = Senha.replace(/\s+/g, "");

    if (emailSemEspacos === "DAVID" && senhaSemEspacos === "123456") {
      console.log(emailSemEspacos, senhaSemEspacos);
      navigation.navigate("Sobre");
    }
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/fundo.jpg")}
      resizeMode="cover"
    >
      <Text style={styles.snoopyapp}>Faça Seu Login</Text>

      <View style={styles.visao}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          secureTextEntry={true}
          placeholderTextColor="#fff"
          inputMode={"text"}
          autoCapitalize="characters"
          multiline={true}
          value={Email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={styles.visao}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          placeholderTextColor="white"
          inputMode={"numeric"}
          autoCapitalize="characters"
          multiline={true}
          value={Senha}
          onChangeText={(value) => setSenha(value)}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={isLogin}>
        <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
