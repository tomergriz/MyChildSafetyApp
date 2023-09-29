
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../styles/theme';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert('Successfully logged in!');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Don't have an account? Register</Text>
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
