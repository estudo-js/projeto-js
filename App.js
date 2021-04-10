/*  ---   Projeto 1 em Javascript, com React Native: App básico ---  */
/*    
/*      Objetivo: Praticar as ferramentas que o react native porporcionam
/*      para a consterução da estrutura, do eslilo e dinâmica de um App
/*
/*      Autores: Igor Amorim dos Santos e Wesley Amorim dos Santos
/*      
/*********************************************************************/
/*********************************************************************/


/*Importando as bibliotecas do react e react native*/
/* Importando as componentes e elementos disponiveis pelo react native */
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image } from "react-native";
import modulo_figura_logo from "./modulo_figura_logo";

/************************/
/************************/
/*DEFINIÇÃO DOS MODULOS */
/************************/
//
//

const modulologo = require("./modulo_figura_logo")


/*****************************************************************************/
/*****************************************************************************/
/* Essa função vai renderizar alguns elementos, semelhantes a elementos html */
/*****************************************************************************/
//
//

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
    <Text style={{fontSize: 20}}>Salve</Text>
      <Image source={modulologo} />
      <Image source={modulologo} />
      <Image source={modulologo} />
      <Image source={modulologo} />
      <Image source={modulologo} />
      <Text style={{ fontSize: 20 }}>React Native</Text>
    </ScrollView>  
    </View>
  </View>
);

/***************************************************************************************/
/************************************************************************************* */
/* Regiao responsavel pela criação dos estilos do código,(StyleSheet) semelhante a CSS */
/************************************************************************************* */
//
//

const styles = StyleSheet.create({
  screen: { // estilos do conteiner (view) principal  que contem os elementos da tela
    flex: 1,
    padding: 30,
    backgroundColor: "#eaeaea"
  },
  title: { //estilos do titulo da tela
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

// export defaut App, comentário
export default App;
