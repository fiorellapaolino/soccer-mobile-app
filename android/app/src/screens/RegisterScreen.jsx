import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions, Image} from 'react-native';
import MainButton from '../components/MainButton';


const screenWidth = Dimensions.get('window').width;
const defaultButtonColor = 'rgb(4, 90, 93)';
const buttonWidth = '90%'

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require("../static/assets/ball.png")} style={{ width: 200, height: 200 }} />
        <Text style={[styles.xlarge, styles.mainColor]}>Galactikos</Text>
        <Text style={styles.large}>Welcome to Galactikos</Text>
        <Text style={styles.medium}>Ready to upgrade your game?</Text>
      <View style={styles.containerButton}>
        <View>
            {renderLoginButton(buttonWidth)}
            </View>
            <View>
            {renderRegisterButton('white', defaultButtonColor, defaultButtonColor, buttonWidth)}
          </View>
        </View>
    </SafeAreaView>
  );
};

const renderLoginButton = (buttonWidth) => {
  return (
    <View style={styles.buttonContainer}>
      <MainButton
        onPress={handleLoginButtonPress}
        buttonWidth={buttonWidth}
        buttonText="Sign In"
        buttonStyle={{width: '90%', alignSelf: 'center', marginBottom: 10}}
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
        buttonStyle={{width: '90%', alignSelf: 'center'}}
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
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerButton: {
    height: '30%',
    width: screenWidth,
    justifyContent: 'center',
  },
  medium: {
    fontSize: 22,
  },
  large: {
    fontSize: 34,
    fontWeight: '800',
    color: 'black'
  },
  xlarge: {
    fontSize: 42,
    marginBottom: 40
  },
  mainColor: {
    color: defaultButtonColor
  }
});

export default RegisterScreen;