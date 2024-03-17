import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SelectComidas = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const handlePress = () => {
    // Set modalVisible to true when container is clicked
    setModalVisible(true);
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const closeModal = () => {
    // Fade out animation
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start(() => setModalVisible(false));
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <View style={styles.container}>
          <Text>Desayuno</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.modalBackground} activeOpacity={1} onPress={closeModal}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            {/* Your modal content here */}
            <Text>This is the modal content.</Text>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    borderWidth: 1,
    borderColor: '#E3CFCF',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 3,
    paddingBottom:12,
    paddingTop:12,
    marginBottom:10
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  }
});

export default SelectComidas;
