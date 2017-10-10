import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import {offersFull as OFFERS} from '../api/offers';

export default class Offers extends React.Component {
	static navigationOptions = {
		title: 'Offers',
	};

	render() {
		return (
			<ScrollView>
				<List>
					{
						OFFERS.map((item, i) => (
							<ListItem
								key={i}
								title={item.title}
								leftIcon={{name: item.icon}}
							/>
						))
					}
				</List>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
});
