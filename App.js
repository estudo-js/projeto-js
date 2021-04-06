import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image } from "react-native";

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};


const App = () => (
  <View style={styles.screen}>
    <View>
      <Text style={styles.title}>Lista de Objetivos</Text>
    </View>
    <View style={styles.entrada}>
      <TextInput placeholder = "Objetivos" style = {styles.entrada_texto}/>
      <Button title="Adicionar"/>
    </View>
    <View>
    <ScrollView>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 20 }}>React Native</Text>
    </ScrollView>  
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  entrada_texto: {
    borderColor: 'black',
    borderWidth: 1,
    width: '60%',
    padding: 10
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:  'center',
  }
});

export default App;
