import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainView: {
      flex: 1,
    },
  
    appBar: {
      margin: '5%',
      alignItems: 'center',
    },
  
    heading: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'green',
    },
  
    addButtonView: {
      height: 48,
      width: 48,
      backgroundColor: 'green',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '40%',
      marginBottom: '4%',
    },
  
    container: {
      padding: '5%',
      marginVertical: 9,
      backgroundColor: 'aliceblue',
      flexDirection: 'row',
    },
  
    textInput: {
      width: '88%',
      borderRadius: 50,
      borderColor: 'green',
      borderWidth: 1,
      paddingLeft:10,
    },
  
    searchView: {
      alignItems: 'center',
    },
  });

  export default styles;