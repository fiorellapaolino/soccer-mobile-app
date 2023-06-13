import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import MainButton from '../components/MainButton';
import { mainColor, blackColor, whiteColor, mainContainerWidth, width } from '../components/Constants';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../static/assets/ball.png")} style={{ width: 200, height: 200 }} />
      <Text style={[styles.xlarge, styles.mainColor]}>Galactikos</Text>
      <Text style={styles.large}>Welcome to Galactikos</Text>
      <Text style={styles.medium}>Ready to upgrade your game?</Text>
      <View style={styles.containerButton}>
        <View>
          {renderLoginButton(mainContainerWidth)}
        </View>
        <View>
          {renderRegisterButton(whiteColor, mainColor, mainColor, mainContainerWidth)}
        </View>
      </View>
    </SafeAreaView>
  );
};

const renderLoginButton = (mainContainerWidth) => {
  return (
    <View style={styles.buttonContainer}>
      <MainButton
        onPress={handleLoginButtonPress}
        mainContainerWidth={mainContainerWidth}
        buttonText="Sign In"
        buttonStyle={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}
      />
    </View>
  );
};

const renderRegisterButton = (
  buttonBgColor,
  buttonTextColor,
  borderColor,
) => {
  return (
    <View>
      <MainButton
        onPress={handleRegisterButtonPress}
        buttonText="Create account"
        buttonBgColor={buttonBgColor}
        buttonTextColor={buttonTextColor}
        borderColor={borderColor}
        buttonStyle={{ width: '90%', alignSelf: 'center' }}
      />
    </View>
  );
};

const handleRegisterButtonPress = () => {
  navigation.navigate('RegisterScreen');
  console.log('It will redirect to register screen');
};

const handleLoginButtonPress = () => {
  navigation.navigate('RegisterScreen');
  console.log('It will redirect to login screen');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  },
  containerButton: {
    height: '30%',
    width: width,
    justifyContent: 'center'
  },
  medium: {
    fontSize: 22
  },
  large: {
    fontSize: 34,
    fontWeight: '800',
    color: blackColor
  },
  xlarge: {
    fontSize: 42,
    marginBottom: 40
  },
  mainColor: {
    color: mainColor
  },
});

export default RegisterScreen;