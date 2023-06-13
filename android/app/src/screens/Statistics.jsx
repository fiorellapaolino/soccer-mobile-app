import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainButton from '../components/MainButton';
import { mainColor, blackColor, whiteColor, mainContainerWidth, width, redColor } from '../components/Constants';

const Statistics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>Stats</Text>
            <Text style={styles.buttonText}>Player card</Text>
            <Text style={styles.buttonText}>Season</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Content</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton style={styles.button} buttonText="LeaderBoard">
          <Text style={styles.buttonText}>Botón Abajo</Text>
        </MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    width: width,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: redColor,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    width: mainContainerWidth
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Statistics;
