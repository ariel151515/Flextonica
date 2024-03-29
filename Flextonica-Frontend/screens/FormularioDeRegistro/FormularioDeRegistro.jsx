import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { updateProfile } from 'firebase/auth'; // Importa la función updateProfile de Firebase

// Firebase
import app from '../firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);

const FormularioDeRegistro = ({ texto }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState('');
  const [nombreFocused, setNombreFocused] = useState(false); // Nuevo estado para controlar el enfoque del campo de entrada del nombre

  const navigation = useNavigation();

  const logueo = async (nombre) => {
    setLoading(true); // Establecer loading en true al iniciar el inicio de sesión
    
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      
      await updateProfile(auth.currentUser, {
        displayName: nombre
      });

      console.log('Inicio de sesión exitoso:', user);
      navigation.navigate('Tabs');
    } catch (error) {
      console.log('Error durante el inicio de sesión:', error);
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  // Funciones para manejar el enfoque y desenfoque del campo de entrada del nombre
  const handleNombreFocus = () => {
    setNombreFocused(true);
  };

  const handleNombreBlur = () => {
    setNombreFocused(false);
  };

  const handleLogin = () => {
    logueo(nombre);
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <View style={styles.container}>
      {/* Campo de entrada para el nombre */}
      <View style={[styles.inputContainer, nombreFocused && styles.inputFocused]}> 
        <Text style={[styles.label, nombreFocused || nombre ? styles.labelFocused : null]}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder=" "
          onChangeText={setNombre}
          value={nombre}
          onFocus={handleNombreFocus}
          onBlur={handleNombreBlur}
        />
      </View>

      <View style={[styles.inputContainer, emailFocused && styles.inputFocused]}>
        <Text style={[styles.label, emailFocused || email ? styles.labelFocused : null]}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder=" "
          onChangeText={setEmail}
          value={email}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
      </View>

      <View style={[styles.inputContainer, passwordFocused && styles.inputFocused]}>
        <Text style={[styles.label, passwordFocused || password ? styles.labelFocused : null]}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder=" "
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={handleTogglePasswordVisibility}>
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#A6A4A4"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>{texto}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
  },
  input: {
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  inputFocused: {
    borderBottomColor: 'blue',
  },
  label: {
    position: 'absolute',
    left: 10,
    fontSize: 16,
    color: '#A6A4A4',
  },
  labelFocused: {
    top: -10,
    fontSize: 12,
    color: 'blue',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FormularioDeRegistro;
