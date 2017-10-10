import React from 'react';
import {
	Text, Platform, TouchableNativeFeedback, TouchableHighlight, View, StyleSheet, ImageBackground,
	FlatList
} from 'react-native';
import {Button, Card, PricingCard} from 'react-native-elements';

const OFFERS = [{
	id: 1,
	key: 1
}, {
	id: 2,
	key: 2,
	type: 1
}, {
	id: 3,
	key: 3
}, {
	id: 4,
	key: 4
}];


export default class OffersPreview extends React.Component {
	_renderItem = ({item}) => {
		if(item.type === 1) {
			return (
				<Card
					title='Some hotel'
					// style={styles.card}
					// wrapperStyle={styles.card}
					containerStyle={styles.card}
					>
					<Text style={{marginBottom: 10}}>
						Hotel price drop off
					</Text>
					<Text style={{marginBottom: 10}}>
						Hotel price drop off
					</Text>
					<Button
						icon={{name: 'code'}}
						backgroundColor='#1f3b77'
						buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
						title='VIEW NOW' />
				</Card>
			);
		} else {
			return (
				<Card
					// title='Some hotel'
					// style={styles.card}
					wrapperStyle={styles.card}
					imageStyle={{
						height: 90
					}}
					// containerStyle={styles.card}
					image={require('../assets/images/hotelOffer.jpg')}>
					<Text style={{marginBottom: 10}}>
						Hotel price drop off
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
		const {} = this.props;
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
		height: 190,
		width: 220
	}
});