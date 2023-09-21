// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
            <TouchableOpacity>
                <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        alignSelf: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4
    },
    linkText: {
        alignSelf: 'flex-end',
        marginBottom: 16
    },
    button: {
        padding: 12,
        backgroundColor: '#007BFF',
        borderRadius: 4,
        marginBottom: 16
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});

export default LoginScreen;
