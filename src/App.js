import React from 'react';
import { StyleSheet,View, Image, Text, SafeAreaView } from 'react-native';
import image from './assets/photo.jpeg'
import Icon from 'react-native-vector-icons/Feather'

const App = () => {
  
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={image} style={style.foto}/>
          <Text style={style.nome}>DIEGO LOIOLA</Text>
          <Text style={style.funcao}>Desenvolvedor Back-End</Text>
          <View style={style.redes_sociais}>
            <Icon name="github" size={30}/>
            <Icon name="instagram" size={30}/>
            <Icon name="linkedin" size={30}/>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
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
  },
  redes_sociais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  }
})

export default App;