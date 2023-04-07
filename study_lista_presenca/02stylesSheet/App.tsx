import { BackHandler, Text, View, StyleSheet } from "react-native";
import { Fragment } from "react";
export default function App() {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>
          Sexta, 31 de Março de 2023.
        </Text>
      </View>
    </Fragment>
  );
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:'#131016',
    padding:25
  },

  eventName: {
    fontSize:24,
     marginTop:48,
      color:'#FFF'
  },

  eventDate: {
    color:'#6b6b6b',
    fontSize:16
  }


});