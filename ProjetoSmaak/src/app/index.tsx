import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Obtém tamanho da tela

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Usuário:", username);
    console.log("Senha:", password);
    // Aqui o backend pode ser chamado, por exemplo: 
    // fetch("URL_DO_BACKEND", { method: "POST", body: JSON.stringify({ username, password }) })
  };

  return (
    <ImageBackground source={require("../../assets/images/background.png")} style={styles.backgroundImage}>
      <View style={styles.overlay} />

      {/* Curva superior */}
      <Image source={require("../../assets/images/curva-top.png")} style={styles.curvaSuperior} />

      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
        <TextInput 
          placeholder="Usuário" 
          style={styles.input} 
          placeholderTextColor="#351B01" 
          value={username}
          onChangeText={setUsername}
        />

        <TextInput 
          placeholder="Senha" 
          style={styles.input} 
          secureTextEntry 
          placeholderTextColor="#351B01" 
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Curva inferior */}
      <Image source={require("../../assets/images/curva-bottom.png")} style={styles.curvaInferior} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: width,    
    height: height,  
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
  },
  curvaSuperior: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: height * 0.12, // Ajuste dinâmico para diferentes telas
    resizeMode: "stretch", // Garante que a imagem cubra toda a largura sem sobras
  },
  curvaInferior: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: height * 0.12,
    resizeMode: "stretch",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#351B01",
    marginBottom: 20,
  },
  input: {
    width: "85%", 
    maxWidth: 400, 
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    width: "85%", 
    maxWidth: 400, 
    height: 50,
    backgroundColor: "#351B01",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Index;
