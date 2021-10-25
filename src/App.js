import React from 'react';
import { StyleSheet,View, Image, Text, TouchableOpacity, Alert } from 'react-native';

import image from './assets/photo.jpeg'
import Icon from 'react-native-vector-icons/Feather'
import Card from './components/Card'

const App = () => {

  function handleRedesSociais(redes_social){
    switch(redes_social){
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://linkedin.com/didi-loiola')
        break;
      case 'github':
        Alert.alert('Meu Github','https://github.com/didi-loiola')
        break;
      case 'instagram':
        Alert.alert('Meu Instagram','https://instagram.com/didi.loiola')
        break;
    }
  }
  
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={image} style={style.foto}/>
          <Text style={style.nome}>DIEGO LOIOLA</Text>
          <Text style={style.funcao}>Desenvolvedor Back-End</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={()=>handleRedesSociais('github')}>
              <Icon name="github" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedesSociais('instagram')}>
              <Icon name="instagram" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedesSociais('linkedin')}>
              <Icon name="linkedin" size={30}/>
            </TouchableOpacity>
          </View>
        </View>

        <Card />

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
    marginTop: 5
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
    marginTop: 15
  },
  
})

export default App;