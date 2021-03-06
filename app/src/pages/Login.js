import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png'

export default function Login(){
    return (
        <View style={styles.container}>
            <Image source={logo} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Guithub Username" 
                placeholderTextColor="#999"
                style={styles.input}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    },
    button:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#df4723',
        borderRadius: 4,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});