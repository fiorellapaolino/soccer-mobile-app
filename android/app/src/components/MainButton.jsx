import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const MainButton = ({ onPress, buttonText, buttonBgColor, buttonTextColor, borderColor, buttonStyle, buttonWidth }) => {
  const defaultMainColor = 'rgb(4, 90, 93)';
  const defaultTextColor = 'white';
  const defaultWidth = '90%';
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: buttonBgColor || defaultMainColor,
          borderColor: borderColor || defaultMainColor,
          width: buttonWidth || defaultWidth,
          borderWidth: 1,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4,
          ...buttonStyle,
        }
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: buttonTextColor || defaultTextColor }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default MainButton;