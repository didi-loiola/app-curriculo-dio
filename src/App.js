import React from 'react';
import { StyleSheet,View, Image, Text } from 'react-native';
import image from './assets/photo.jpeg'

const App = () => {
  
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={image} style={style.foto}/>
          <Text style={style.nome}>DIEGO LOIOLA</Text>
          <Text style={style.funcao}>Desenvolvedor Back-End</Text>
          <View>
            <Text>Github</Text>
            <Text>LinkedIn</Text>
            <Text>Instagram</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page:{
    backgroundColor: '#e7e7e7',
    flex: 1
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foto: {
    width: 220,
    height: 220,
    borderRadius: 100
  },
  nome: {
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    fontSize: 22,
    color: '#939393',
    marginBottom: 10
  }
})

export default App;