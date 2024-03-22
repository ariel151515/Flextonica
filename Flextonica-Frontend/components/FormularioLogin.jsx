import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FormularioLogin = ({texto}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

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

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para iniciar sesión utilizando el email y la contraseña ingresados
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <View style={styles.container}>
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
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{texto}</Text>
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
    borderBottomColor: 'blue', // Cambia el color del borde cuando el input está enfocado
  },
  label: {
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 16,
    color: '#A6A4A4',
  },
  labelFocused: {
    top: -10, // Mueve el label hacia arriba cuando el input está enfocado o tiene texto
    fontSize: 12,
    color: 'blue', // Cambia el color del texto del label cuando el input está enfocado o tiene texto
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

export default FormularioLogin;
