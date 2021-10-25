import React from "react";
import {View,Text} from 'react-native'

import style from './style'

const Card = () => {
    return(
        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.card_header_text}>Experiência Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>NodeJs</Text>
              <Text style={style.card_content_text}>Docker</Text>
              <Text style={style.card_content_text}>ReactJS</Text>
            </View>
          </View>
        </View>
    )
}

export default Card;