import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import {TabNavigator, TabBarBottom, StackNavigator} from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AirHome from '../screens/AirHome';
import Offers from '../screens/Offers';
import OfferPage from '../screens/OfferPage';
import Map from '../screens/Map';
import {Animated, Easing}from "react-native";

export default TabNavigator(
  {
    AirHome: {
			screen: StackNavigator({
			  Landing: {
			    screen: AirHome,
			  },
				Offers: {
			  	screen: Offers
				},
				OfferPage: {
			  	screen: OfferPage
				},
				Map: {
			  	screen: Map
				}
			}, {
				headerMode: 'none',
				mode: 'modal',
				navigationOptions: {
					gesturesEnabled: true,
				},
				transitionConfig: () => ({
					transitionSpec: {
						duration: 300,
						easing: Easing.out(Easing.poly(4)),
						timing: Animated.timing,
					},
					screenInterpolator: sceneProps => {
						const { layout, position, scene } = sceneProps;
						const { index } = scene;

						const height = layout.initHeight;
						const translateY = position.interpolate({
							inputRange: [index - 1, index, index + 1],
							outputRange: [height, 0, 0],
						});

						const opacity = position.interpolate({
							inputRange: [index - 1, index - 0.99, index],
							outputRange: [0, 1, 1],
						});

						return { opacity, transform: [{ translateY }] };
					},
				}),
			})
    },
// AirHome: {
		 //  // screen: AirHome,
		 //  screen: AirHome,
	  // },
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        
        if(routeName === 'AirHome') {
          return (
	          <Entypo
	            name={'aircraft'}
	            size={28}
	            style={{ marginBottom: -3 }}
	            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
	          />
          );
        }
        
        let iconName;
        switch (routeName) {
          case 'AirHome':
            iconName = 'logo-usd';
            break;
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios'
              ? `ios-link${focused ? '' : '-outline'}`
              : 'md-link';
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios'
              ? `ios-options${focused ? '' : '-outline'}`
              : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
