import React from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import MainButton from '../components/MainButton';
import { useNavigation } from '@react-navigation/native';

import {
  containerWidth,
  width,
  height,
  whiteColor
} from '../components/Constants';

const data = [
  {
    title: 'Personalised learning',
    subtitle: 'Get hours of pro and community content',
    image: require('../static/assets/layout1.png'),
  },
  {
    title: 'Detailed stats',
    subtitle: 'Easily log in your match stats',
    image: require('../static/assets/layout2.png'),
  },
  {
    title: 'In depth analysis',
    subtitle: 'Get insightful reports that will further step up your game',
    image: require('../static/assets/layout3.png'),
  },
  {
    title: 'Wide community',
    subtitle:
      "Explore the football community and keep up to date with others' activities",
      image: require('../static/assets/layout4.png'),
    },
];

export default HomeScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('RegisterScreen');
  };

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        return <View key={index} />;
      })}
    </View>
  );

  const renderButton = index => {
    if (index === 3) {
      return (
        <MainButton 
        onPress={handleButtonPress} 
        buttonText="Get Started"
        buttonStyle={{width: 150, alignSelf: 'flex-end', margin: 30}}
        />
      );
    }
    return null;
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.wrapItem}>
        <View style={{...styles.item, width: width, height: height}}>
          <Image
            source={item.image}
            style={[StyleSheet.absoluteFill, styles.backgroundImage]}
          />
          <View style={styles.screenContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
          {renderButton(index)}
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        horizontal
        pagingEnabled
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        scrollEventThrottle={200}
      />
      {renderPagination()}
    </>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapItem: {
    width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    width: width,
    height: height,
    flex: 1
  },
  screenContainer: {
    height: containerWidth
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100
  },
  title: {
    color: whiteColor,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    color: whiteColor,
    fontSize: 16,
    textAlign: 'center',
    width: containerWidth
  },
});
