import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { mainColor, blackColor, whiteColor, mainContainerWidth } from './Constants';

const MainButton = ({ onPress, buttonText, buttonBgColor, buttonTextColor, borderColor, buttonStyle, buttonWidth }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: buttonBgColor || mainColor,
          borderColor: borderColor || mainColor,
          width: buttonWidth || mainContainerWidth,
          borderWidth: 1,
          shadowColor: blackColor,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4,
          ...buttonStyle,
        }
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: buttonTextColor || whiteColor }]}>
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