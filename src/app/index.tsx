import { View, Text, StyleSheet } from "react-native"
// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index () {
    return ( 
        // Componente Text sendo usando para Renderizar um texto na tela
       <View style={styles.container}>

        <Text style={style.title} > eu AAAAAAAAAAAAAg </Text>

       <Text style={style.title2}>João Pedro</Text>
       <Text style={style.title3}> Pokémon </Text>
       <Text style={style.title4}> Minecreft </Text>
       </View>
    

    
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1, // cosidera toda a area util da tela para os componetes
        justifyContent : "center",// justifica (ajusta) todos so elementos no centro da tela
        alignContent: "center",// Alinha todos so elementos no centro da tela
        flexDirection: "row",// Organiza todos so lementos dentro do flex box em linha (esquerda)
    },

    title:{
        color: "red",
        fontSize: 22,

    }
 


})

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