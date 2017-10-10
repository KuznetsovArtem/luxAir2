import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { WebBrowser } from 'expo';
import TileButton from '../components/TileButton'
import OffersPreview from '../components/OffersPreview'

export default class AirHome extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}>

					<TileButton
						title="All Offers"
						caption="List of all available for you offers"
						type="offers"
						onPress={() => this._navigateTo('Offers')}
						style={styles.tileItem}/>
					<OffersPreview/>
					<TileButton
						title="Map"
						caption="See the destination city with best deals"
						onPress={() => this._navigateTo('Map')}
						type="map"
						style={styles.tileItem}/>
					<TileButton
						title="My Flight"
						onPress={this._openAboutLink}
						style={styles.tileItemSmall}/>
					<TileButton
						title="Profile"
						onPress={this._openAboutLink}
						style={styles.tileItemSmall}/>
					<TileButton
						title="About"
						onPress={this._openAboutLink}
						style={styles.tileItemSmall}/>

				</ScrollView>

				<View style={styles.tabBarInfoContainer}>
					<Text>POC v{Expo.Constants.manifest.version}</Text>
				</View>
			</View>
		);
	}

	_navigateTo = (screen, data) => {
		this.props.navigation.navigate(screen, data)
	};

	_openAboutLink = () => {
		WebBrowser.openBrowserAsync(
			'https://www.luxoft.com/'
		);
	};
}

const tileStyles = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	height: 200,
	borderTopWidth: 3,
	borderColor: '#1f3b77'
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	tileItem: {
		...tileStyles
	},
	tileItemSmall: {
		...tileStyles,
		height: 100
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)',
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center',
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
