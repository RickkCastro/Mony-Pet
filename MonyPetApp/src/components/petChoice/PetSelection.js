import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default props => {
    return(
      <TouchableOpacity style={styles.circle}>
        <FontAwesome5 name={props.animal} size={32} color="white"  style={{margin: 8}}/>
        <Text style={styles.txtName}>{props.name}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circle: {
      backgroundColor: '#7255AB',
      borderRadius: 100,
      width: 140,
      height: 140,
      margin: 5,
      padding: 35,
      alignItems:'center', 
      justifyContent: 'center',
      opacity: 0.98
    },
    txtName: {
        color: 'white',
        textAlign: 'center',
        fontSize:18
    }
});