import { BackHandler, Text, View } from "react-native";
import { Fragment } from "react";
export default function App() {
  return (
    <Fragment>
      <View style={{
        flex:1,
        backgroundColor:'#131016',
        padding:25
      }}>
        <Text style={{fontSize:24, marginTop:48, color:'#FFF'}}>Nome do evento</Text>
        <Text style={{color:"#6b6b6b"}}>
          Sexta, 31 de Março de 2023.
        </Text>
      </View>
    </Fragment>
  );
}



