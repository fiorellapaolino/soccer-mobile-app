import React from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import MainButton from '../components/MainButton';

const {width, height} = Dimensions.get('window');

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
  const handleButtonPress = () => {
    console.log('It will redirect to register screen');
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
        <MainButton onPress={handleButtonPress} buttonText="Get Started" />
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
            {renderButton(index)}
          </View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapItem: {
    width,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  screenContainer: {
    height: '80%',
  },
  textContainer: {
    flex: 1,
    width: '80%',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
