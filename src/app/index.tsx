import { View, Text, StyleSheet } from "react-native"
// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index () {
    return ( 
        // Componente Text sendo usando para Renderizar um texto na tela
       <View>

        <Text style={style.title} > eu AAAAAAAAAAAAAg </Text>

       <Text style={style.title2}>João Pedro</Text>
       <Text style={style.title3}> Pokémon </Text>
       <Text style={style.title4}> Minecreft </Text>
       </View>
    

    
    );
}

const style = StyleSheet.create({
    title:{
        color:"red",
        fontSize: 22,

    },
    title2: {
        color: "blue",
        fontSize:26,
    },


     title3: {
     color: "blue",
     fontSize:30,

},
title4: {
    color: "blue",
    fontSize:40,
},

})