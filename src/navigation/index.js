import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {COL_BG, COL_BG_BLACK} from '../styles/themes';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const Navigation = () => {
  const selectInitialRoute = () => {
    return 'HOME_SCREEN';
  };

  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor={COL_BG} barStyle="dark-content" />
      )}

      <SafeAreaView style={{flex: 1, backgroundColor: COL_BG}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={selectInitialRoute()}
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              cardStyle: {
                backgroundColor: COL_BG,
              },
            }}>
            <Stack.Screen name="HOME_SCREEN" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default Navigation;
