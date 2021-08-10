import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {container} from '../../styles/styles';
import styles from './styles';

const HomeScreen = () => {
  return (
    <>
      <View style={container}>
        <Text style={styles.titleText}>Welcome to{'\n'}Cat Pokedex</Text>
        <Text style={styles.subTitleText}>Select your options</Text>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.cardRed}>
            <View style={styles.flexRow}>
              <Text style={styles.cardText}>Add Info</Text>
              <ImageBackground
                source={require('../../assets/images/pawprint.png')}
                style={styles.bgImageStyle}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardGreen}>
            <View style={styles.flexRow}>
              <Text style={styles.cardText}>Edit Info</Text>
              <ImageBackground
                source={require('../../assets/images/pawprint.png')}
                style={styles.bgImageStyle}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.cardRed}>
            <View style={styles.flexRow}>
              <Text style={styles.cardText}>Add Info</Text>
              <ImageBackground
                source={require('../../assets/images/pawprint.png')}
                style={styles.bgImageStyle}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardGreen}>
            <View style={styles.flexRow}>
              <Text style={styles.cardText}>Edit Info</Text>
              <ImageBackground
                source={require('../../assets/images/pawprint.png')}
                style={styles.bgImageStyle}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
