import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'; // Importa las funciones necesarias de Firebase

import { getAuth } from "firebase/auth";
const auth = getAuth();

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

  const Registro = async () => {
    setLoading(true);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Actualizar el perfil del usuario con el nombre
      await updateProfile(user, {
        displayName: nombre
      });

      console.log('Usuario registrado con éxito:', user);
      // Mostrar un mensaje emergente de éxito
      Alert.alert(
        'Registro Exitoso',
        'Usuario registrado con éxito',
        [
          { text: 'Iniciar Sesión', onPress: () => navigation.navigate('Login') }
        ]
      );
    } catch (error) {
      console.error('Error durante el registro:', error);
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

  const handleNombreFocus = () => {
    setNombreFocused(true);
  };

  const handleNombreBlur = () => {
    setNombreFocused(false);
  };

  const handleRegistro = () => {
    Registro();
  };

  return (
    <View style={styles.container}>
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

      <TouchableOpacity style={styles.button} onPress={handleRegistro} disabled={loading}>
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
