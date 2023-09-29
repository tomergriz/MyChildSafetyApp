
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import theme from '../styles/theme';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [secureText, setSecureText] = useState(true);


  const handlePasswordReset = () => {
    if (!email) {
      setError('Please provide your email.');
      return;
    }

    auth().sendPasswordResetEmail(email)
      .then(() => {
        alert('Password reset email sent!');
      })
      .catch((error) => {
        setError(error.message);
      });
  };


  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }
    setLoading(true);

    auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setLoading(false);
        alert('Successfully logged in!');
      })
      .catch((error) => {
        setLoading(false);
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
        style={[styles.input,
        (!email.includes('@') && email) ? { borderColor: 'red' } : {}
        ]}
      />
      <View style={styles.inputWrapper}>

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={theme.colors.placeholder}
          style={[styles.input,
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


      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      <TouchableOpacity onPress={handlePasswordReset}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.7}>
        {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Login</Text>}
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
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: '40%',
    transform: [{ translateY: -12 }]
  }
});

export default LoginScreen;
