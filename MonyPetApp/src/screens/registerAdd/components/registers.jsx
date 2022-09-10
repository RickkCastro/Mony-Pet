import { Text, View, StyleSheet, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function(props) {
    return (
      <View>
        <Text style={styles.lineRegister}>Avalie a condição do sono:</Text>
                <View style={styles.backgroundRegister}>
                    {dataDog.rest.map((item) => {
                        return (
                            <Pressable
                                style={item.value === restV ? [styles.selected, { borderColor: iconColor(item.value) }] : styles.unselected}
                                onPress={() => setRestV(item.value)}>
                                <MaterialCommunityIcons name={item.icon} size={iconSize} color={iconColor(item.value)} />
                            </Pressable>
                        )
                    })}
                </View>
                <View style={styles.viewTxt}>
                    {dataDog.rest.map((item) => {
                        return (
                            <Text style={styles.txt}> {item.text} </Text>
                        )
                    })}
                </View>
      </View>
    )
}

const styles = StyleSheet.create({
    
    lineRegister: {
        color: '#527BCB',
        fontSize: 18,
        marginBottom: 3,
        textAlign: 'center',
        marginTop: 10
      },
    
      txtDesc: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#5c79b2',
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 12,
        backgroundColor: '#fff',
        width: '90%',
        textAlignVertical: 'top',
        height: 125,
        color: 'black',
        alignSelf: 'center'
      },

      backgroundRegister: {
        paddingHorizontal: 20,
        backgroundColor: '#ece4fc',
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 3
      },
    
      viewTxt: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
      txt: {
        textAlign: 'center',
        fontSize: 11,
        width: 54,
        color: '#527bcb'
      },
})