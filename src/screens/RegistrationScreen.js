import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import theme from '../styles/theme';

const RegistrationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                placeholder="Full Name"
                placeholderTextColor={theme.colors.placeholder}
                style={styles.input}
            />
            <TextInput
                placeholder="Email"
                placeholderTextColor={theme.colors.placeholder}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor={theme.colors.placeholder}
                secureTextEntry={true}
                style={styles.input}
            />
            <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={theme.colors.placeholder}
                secureTextEntry={true}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Already have an account? Log in</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: theme.colors.background
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        alignSelf: 'center',
        color: theme.colors.text
    },
    input: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        padding: 12,
        marginBottom: 16,
        borderRadius: 4,
        color: theme.colors.text,
        backgroundColor: 'white'
    },
    button: {
        padding: 12,
        backgroundColor: theme.colors.accent,
        borderRadius: 4,
        marginBottom: 16
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});

export default RegistrationScreen;
