import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
      },
      card:{
        width: '60%',
        borderRadius:5,
        borderWidth: 2,
        borderColor: "#939393",
        padding: 8,
        backgroundColor: '#fff'
      },
      card_content: {
        marginTop: 10,
      },
      card_header_text:{
        fontWeight: 'bold'
      }
})

export default style