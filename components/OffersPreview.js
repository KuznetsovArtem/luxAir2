import React from 'react';
import {
	Text, Platform, TouchableNativeFeedback, TouchableHighlight, StyleSheet,
	FlatList, ImageBackground
} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {offersTop as OFFERS} from '../api/offers';
import {BlurView} from "expo";


export default class OffersPreview extends React.Component {
	_navigateToOffer = () => {
		this.props.actions.navigateToOffer();
	};
	_renderItem = ({item}) => {
		if(item.type === 1) {
			return (
				<ImageBackground source={require('../assets/images/offerBg.png')} style={{flex: 1}}>
					<BlurView intensity={50} style={{flex: 1}} tint="light">
						<Card
							title={item.title}
							containerStyle={[styles.card, {margin: 0, flex: 1, backgroundColor:'transparent'}]}
							wrapperStyle={{alignItems:'center', backgroundColor:'transparent'}}>
							{item.info.map((infoText, index) =>
								<Text key={index} style={{marginBottom: 10, color: '#1f3b77'}}>
									{infoText}
								</Text>
							)}
							<Button
								icon={{name: 'flight-takeoff'}}
								onPress={this._navigateToOffer}
								backgroundColor='#1f3b77'
								buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
								title='VIEW NOW' />
						</Card>
					</BlurView>
				</ImageBackground>
			);
		} else {
			return (
				<Card
					// title='Some hotel'
					containerStyle={{margin: 0, flex: 1}}
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
						onPress={this._navigateToOffer}
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