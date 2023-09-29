
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import theme from '../styles/theme';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';


const RegistrationScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [secureText, setSecureText] = useState(true);


    const handleRegister = () => {
        if (!fullName || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }
        if (!email.includes('@')) {
            setError('Enter a valid email address.');
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords don't match!");
            return;
        }
        setLoading(true);

        auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setLoading(false);
                alert('Successfully registered!');
            })
            .catch((error) => {
                setLoading(false);
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
                style={[styles.input,
                (!email.includes('@') && email) ? { borderColor: 'red' } : {}
                ]} />
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor={theme.colors.placeholder}
                    style={[
                        styles.input,
                        { flex: 1, paddingRight: 40 },
                        (password.length < 6 && password.length > 0) ? { borderColor: 'red' } : {}
                    ]}
                    secureTextEntry={secureText}
                />
                <Icon
                    name={secureText ? 'eye-slash' : 'eye'}
                    size={24}
                    color="grey"
                    style={styles.icon}
                    onPress={() => setSecureText(!secureText)}
                />
            </View>

            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholderTextColor={theme.colors.placeholder}
                    secureTextEntry={secureText}
                    style={[
                        styles.input,
                        { flex: 1, paddingRight: 40 },
                        (confirmPassword !== password && confirmPassword.length > 0) ? { borderColor: 'red' } : {}
                    ]} />
            </View>

            {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleRegister} activeOpacity={0.7}>
                {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Register</Text>}
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
        borderColor: theme.colors.primary,
        padding: 12,
        marginBottom: 16,
        borderRadius: 4,
        color: theme.colors.text,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
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
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: '40%',
        transform: [{ translateY: -12 }]
    }



});

export default RegistrationScreen;
