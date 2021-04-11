import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const itemMeta = props =>{
    return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
        <View style={styles.itens}>
            <Text style={styles.textoMeta}>{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itens:{
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#00A170',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1
  },
  textoMeta:{
      fontSize: 20,
      color: 'white'
  }
})

export default itemMeta