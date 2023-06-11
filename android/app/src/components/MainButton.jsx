import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const MainButton = ({ onPress, buttonText }) => {
  const buttonColor = 'rgb(4, 90, 93)';

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainButton;
