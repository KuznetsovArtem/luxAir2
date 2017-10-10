import React from 'react';
import {Text, Platform, TouchableNativeFeedback, TouchableHighlight, View, StyleSheet, ImageBackground} from 'react-native';
import {BlurView} from 'expo';

export default class TileButton extends React.Component {

	images = {
		offers: require('../assets/images/offersButton.jpg'),
		map: require('../assets/images/mapButton.png'),
	};

	render() {
		const {title, caption, type} = this.props;
		const TouchComponent = Platform.select({
			ios: TouchableHighlight,
			android: TouchableNativeFeedback
		});
		let imageSource;
		let blurStyle = styles.blurViewSmall;
		let blurTint = 'light';
		let blurInensity = 95;

		switch (type) {
			case 'map':
				imageSource = this.images.map;
				blurStyle = styles.blurView;
				blurTint = 'dark';
				blurInensity = 50;
				break;
			case 'offers':
				blurStyle = styles.blurView;
			default:
				imageSource = this.images.offers;
		}

		return (
			<TouchComponent onPress={this.props.onPress}>
				<ImageBackground source={imageSource} style={{}}>
					<View style={this.props.style}>
						<BlurView intensity={blurInensity} style={blurStyle} tint={blurTint}>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.caption}>{caption}</Text>
						</BlurView>
					</View>
				</ImageBackground>
			</TouchComponent>
		);
	}
}

const styles = StyleSheet.create({
	blurView: {
		justifyContent:'center',
		alignItems:'center',
		padding: 20,
		marginHorizontal: 20,
		borderRadius: 5
	},
	blurViewSmall: {
		justifyContent:'center',
		alignItems:'center',
		padding: 5,
		paddingHorizontal: 10,
		borderRadius: 5
	},
	title: {
		fontFamily: 'space-mono',
		color: '#fff',
		fontSize: 36,
		fontWeight: "500"
	},
	caption: {
		fontFamily: 'space-mono',
		color: '#fff',
		fontSize: 18
	}
});