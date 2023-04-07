import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

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
    },
    
    input: {
      flex:1,
      backgroundColor: "#1F1E25",
      height:56,
      borderRadius:5,
      color: "#FFF",
      fontSize:16,
      padding:16,
      marginRight:12,
    },
    buttonText: {
      color:"#FFF",
      fontSize:24,
    },
    button: {
      width:56,
      height:56,
      borderRadius:5,
      backgroundColor: "#31CF67",
      justifyContent: "center",
      alignItems:"center",
    },
    form: {
      width:"100%",
      flexDirection:'row',
      marginTop:36,
      marginBottom:42,
    },
    listEmptyText: {
      color:"#FFF",
      fontSize: 14,
      textAlign: "center",
    }
    
  
  });