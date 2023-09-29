
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../styles/theme';
import auth from '@react-native-firebase/auth';


const RegistrationScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Successfully registered!');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
                placeholderTextColor={theme.colors.placeholder}
                style={styles.input}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor={theme.colors.placeholder}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor={theme.colors.placeholder}
                secureTextEntry={true}
                style={styles.input}
            />
            <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholderTextColor={theme.colors.placeholder}
                secureTextEntry={true}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
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
