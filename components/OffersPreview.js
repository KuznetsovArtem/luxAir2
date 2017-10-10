import React from 'react';
import {
	Text, Platform, TouchableNativeFeedback, TouchableHighlight, StyleSheet,
	FlatList, ImageBackground
} from 'react-native';
import {Button, Card} from 'react-native-elements';

const OFFERS = [{
	id: 1,
	key: 1,
	image: require('../assets/images/hotelOffer.jpg'),
	text: 'Hotel price drop off'
}, {
	id: 2,
	key: 2,
	type: 1,
	title: 'Drop off',
	info: [
		'Price drop off',
		'Distance: 2km',
		'Half price'
	]
}, {
	id: 3,
	key: 3,
	image: require('../assets/images/hotelOffer.jpg'),
	text: 'Hotel price drop off'
}, {
	id: 4,
	key: 4,
	image: require('../assets/images/hotelOffer.jpg'),
	text: 'Hotel price drop off'
}];


export default class OffersPreview extends React.Component {
	_renderItem = ({item}) => {
		if(item.type === 1) {
			return (
					<Card
						title={item.title}
						containerStyle={[styles.card, {margin: 2, flex: 1}]}
						wrapperStyle={{alignItems:'center'}}>
						{item.info.map((infoText, index) =>
							<Text key={index} style={{marginBottom: 10, color: '#1f3b77'}}>
								{infoText}
							</Text>
						)}
						<Button
							icon={{name: 'flight-takeoff'}}
							backgroundColor='#1f3b77'
							buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
							title='VIEW NOW' />
					</Card>
			);
		} else {
			return (
				<Card
					// title='Some hotel'
					containerStyle={{margin: 2, flex: 1}}
					wrapperStyle={styles.card}
					imageStyle={{
						height: 90
					}}
					image={item.image}>
					<Text style={{marginBottom: 10}}>
						{item.text}
					</Text>
					<Button
						icon={{name: 'code'}}
						backgroundColor='#1f3b77'
						buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
						title='VIEW NOW' />
				</Card>
			);
		}
	};

	render() {
		const TouchComponent = Platform.select({
			ios: TouchableHighlight,
			android: TouchableNativeFeedback
		});

		return (
			<FlatList
				horizontal={true}
				style={styles.container}
				data={OFFERS}
				renderItem={this._renderItem}/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 220
	},
	card: {
		alignItems: 'center',
		height: 190,
		width: 220
	}
});