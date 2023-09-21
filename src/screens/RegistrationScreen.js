// RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const RegistrationScreen = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput placeholder="Full Name" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
            <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.input} />
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>I agree to the Terms and Conditions</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Already have an account? Log in</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    // ... Same styles as above, with additional styles for checkbox
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
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 16,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});

export default RegistrationScreen;
