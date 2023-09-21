import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import theme from '../styles/theme';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity>
        <Text style={styles.linkText}>Forgot Password?</Text>
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
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    alignSelf: 'center',
    color: theme.colors.text,
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
  linkText: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    color: theme.colors.accent
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

export default LoginScreen;
